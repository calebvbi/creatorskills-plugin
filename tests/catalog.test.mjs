import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fetchCatalog, publicSkill, readJson, run, search, validatePage } from "../skills/creator-studio/scripts/catalog.mjs";

const item = (i) => ({ slug: `skill-${i}`, name: `Skill ${i}`, shortDescription: "Podcast sponsor brief", category: "PODCASTING", price: 7, tags: ["sponsor"] });
const page = (n, total = 21) => ({ items: Array.from({ length: Math.min(20, total - (n - 1) * 20) }, (_, i) => item((n - 1) * 20 + i)), pagination: { page: n, pageSize: 20, total, totalPages: Math.ceil(total / 20), hasNextPage: n < Math.ceil(total / 20) } });
const response = (value) => new Response(JSON.stringify(value));

test("retrieves every unique item with newest sort and a shared deadline", async () => {
  const calls = [];
  const items = await fetchCatalog(async (url, options) => {
    calls.push({ url, options });
    return response(page(Number(new URL(url).searchParams.get("page"))));
  });
  assert.equal(items.length, 21);
  assert.equal(calls.length, 2);
  assert.ok(calls.every(({ url }) => new URL(url).searchParams.get("sort") === "newest"));
  assert.equal(calls[0].options.signal, calls[1].options.signal);
  assert.equal(calls[0].options.redirect, "error");
});

test("rejects duplicate pages even when the row count equals total", async () => {
  await assert.rejects(fetchCatalog(async (url) => {
    const data = page(Number(new URL(url).searchParams.get("page")));
    if (data.pagination.page === 2) data.items[0] = item(0);
    return response(data);
  }), /coverage/);
});

test("rejects catalog mutation during pagination", async () => {
  await assert.rejects(fetchCatalog(async (url) => {
    const n = Number(new URL(url).searchParams.get("page"));
    return response(page(n, n === 1 ? 21 : 22));
  }), /changed/);
});

test("rejects truncated pages, invalid price, and malformed pagination", () => {
  for (const mutate of [(p) => p.items.pop(), (p) => p.items[0].price = "7", (p) => p.pagination.hasNextPage = false]) {
    const data = page(1);
    mutate(data);
    assert.throws(() => validatePage(data, 1));
  }
});

test("rejects non-JSON, HTTP failure, and aborted requests", async () => {
  await assert.rejects(fetchCatalog(async () => new Response("<html>error</html>")));
  await assert.rejects(fetchCatalog(async () => ({ ok: false, status: 503 })), /503/);
  await assert.rejects(fetchCatalog(async (_, { signal }) => { signal.throwIfAborted(); }, AbortSignal.abort()), /abort/i);
});

test("failure returns explicitly stale snapshot without sending the search query", async () => {
  const urls = [];
  const result = await run(["search", "podcast sponsor secret-campaign-name"], {
    fetcher: async (url) => { urls.push(url); throw new Error("Network unavailable"); },
    read: async () => JSON.stringify({ asOf: "2026-01-01", items: [publicSkill(item(1))] }),
  });
  assert.equal(result.source, "bundled snapshot");
  assert.equal(result.asOf, "2026-01-01");
  assert.match(result.notice, /may be stale/);
  assert.equal(result.results.length, 1);
  assert.ok(urls.every((url) => !url.includes("secret-campaign-name")));
});

test("offline search makes no network call and unknown skill returns no invented result", async () => {
  const deps = { fetcher: async () => assert.fail("Unexpected network request"), read: async () => JSON.stringify({ asOf: "2026-01-01", items: [publicSkill(item(1))] }) };
  assert.equal((await run(["skill", "missing-skill", "--offline"], deps)).results.length, 0);
  assert.equal((await run(["search", "podcast", "--offline"], deps)).results.length, 1);
});

test("invalid command and traversal slug fail before network or filesystem access", async () => {
  const deps = { fetcher: async () => assert.fail(), read: async () => assert.fail() };
  for (const args of [["skill", "../../private"], ["delete", "all"], ["search"], ["search", "x".repeat(301)]]) await assert.rejects(run(args, deps));
});

test("search ranks title matches above description matches and excludes unrelated items", () => {
  const items = [publicSkill(item(1)), { ...publicSkill(item(2)), name: "Podcast sponsor" }, { ...publicSkill(item(3)), summary: "Bread", tags: [], category: "COOKING" }];
  assert.deepEqual(search(items, "podcast sponsor").map((i) => i.slug), ["skill-2", "skill-1"]);
  assert.throws(() => search(items, "???"));
});

test("zero price does not grant automatic access to skill contents", () => {
  assert.match(publicSkill({ ...item(1), price: 0 }).access, /account or email/);
  assert.match(publicSkill(item(1)).capability, /not included/);
});

test("only explicitly bundled MIT workflows claim included instructions", () => {
  const included = publicSkill({ ...item(1), slug: "podcast-show-notes-creator", price: 0 });
  assert.match(included.access, /MIT library workflow included/);
  assert.match(included.capability, /skills\/podcast-show-notes-creator\/SKILL.md/);
  assert.match(publicSkill({ ...item(1), slug: "new-free-skill", price: 0 }).capability, /not included/);
});

test("broad podcast discovery surfaces included workflows and exact requests stay relevant", async () => {
  const { items } = JSON.parse(await readFile(new URL("../skills/creator-studio/references/catalog.json", import.meta.url), "utf8"));
  const results = search(items, "podcast");
  assert.ok(results.every((item) => /included/.test(item.access)));
  assert.equal(search(items, "podcast guest booking system")[0].slug, "podcast-guest-booking-system");
});

test("a website price never becomes a fee for an included plugin workflow", () => {
  const included = publicSkill({ ...item(1), slug: "brand-voice-codex", price: 7 });
  assert.equal(included.price, 0);
  assert.equal(included.websitePrice, 7);
  assert.equal(included.priceScope, "Included plugin workflow");
  assert.match(included.access, /no CreatorSkills account/);
});

test("oversized response is cancelled before the whole body is buffered", async () => {
  let cancelled = false;
  let reads = 0;
  const stream = new ReadableStream({
    pull(controller) { reads++; controller.enqueue(new Uint8Array(100)); },
    cancel() { cancelled = true; },
  });
  await assert.rejects(readJson(new Response(stream), 150), /size limit/);
  assert.equal(cancelled, true);
  assert.ok(reads <= 3);
});

test("healthy live catalog does not depend on reading a bundled snapshot", async () => {
  const result = await run(["search", "podcast"], {
    fetcher: async () => response(page(1, 1)),
    read: async () => assert.fail("Live retrieval must not read snapshot"),
  });
  assert.equal(result.source, "live public catalog");
  assert.equal(result.results.length, 1);
});
