import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";
import bundledLibrary from "../references/bundled-library.json" with { type: "json" };

const API = "https://creatorskills.co/api/mcp/skills";
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const bundledSlugs = new Set(bundledLibrary.items.map(({ slug }) => slug));
const reference = (name) => new URL(`../references/${name}`, import.meta.url);

export async function readJson(response, maxBytes = 1_000_000) {
  if (!response.body) throw new Error("Empty catalog response");
  const reader = response.body.getReader();
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBytes) {
        await reader.cancel();
        throw new Error("Catalog response exceeds size limit");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return JSON.parse(new TextDecoder().decode(bytes));
}

export function validatePage(value, page) {
  if (!value || !Array.isArray(value.items) || !value.pagination) throw new Error("Invalid catalog response");
  const p = value.pagination;
  if (p.page !== page || p.pageSize !== 20 || !Number.isSafeInteger(p.total) || p.total < 1 || p.total > 2000 ||
      p.totalPages !== Math.ceil(p.total / 20) || p.hasNextPage !== (page < p.totalPages)) {
    throw new Error("Invalid catalog pagination");
  }
  const expected = Math.min(20, p.total - (page - 1) * 20);
  if (value.items.length !== expected) throw new Error("Incomplete catalog page");
  for (const item of value.items) {
    if (!item || typeof item.slug !== "string" || !SLUG.test(item.slug) || typeof item.name !== "string" ||
        !item.name.trim() || typeof item.shortDescription !== "string" || typeof item.category !== "string" ||
        typeof item.price !== "number" || !Number.isFinite(item.price) || item.price < 0 ||
        !Array.isArray(item.tags) || item.tags.some((tag) => typeof tag !== "string")) {
      throw new Error("Invalid catalog item");
    }
  }
  return value;
}

export async function fetchCatalog(fetcher = fetch, signal = AbortSignal.timeout(12000)) {
  const items = [];
  let total;
  for (let page = 1; ; page++) {
    const response = await fetcher(`${API}?pageSize=20&page=${page}&sort=newest`, {
      signal, redirect: "error", headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error(`Catalog unavailable: HTTP ${response.status}`);
    const data = validatePage(await readJson(response), page);
    total ??= data.pagination.total;
    if (total !== data.pagination.total) throw new Error("Catalog changed during retrieval");
    items.push(...data.items);
    if (!data.pagination.hasNextPage) break;
  }
  if (items.length !== total || new Set(items.map((item) => item.slug)).size !== total) {
    throw new Error("Catalog coverage could not be verified");
  }
  return items;
}

export function publicSkill(item) {
  return {
    slug: item.slug, name: item.name, summary: item.shortDescription, category: item.category,
    tags: item.tags, price: item.price, currency: "USD",
    url: `https://creatorskills.co/skills/${item.slug}`,
    access: bundledSlugs.has(item.slug) ? "MIT library workflow included; no CreatorSkills account required" : item.price > 0 ? "Separate purchase required" : "Free listing; account or email may be required",
    capability: bundledSlugs.has(item.slug) ? `Run the bundled skills/${item.slug}/SKILL.md workflow.` : "Library discovery. Instructions are not included in this plugin.",
  };
}

export function search(items, query, limit = 5) {
  const terms = query.toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [];
  if (!terms.length) throw new Error("Enter at least one search word");
  const ranked = items.map((item) => {
    const title = `${item.name} ${item.slug}`.toLocaleLowerCase();
    const text = `${item.summary} ${item.category} ${(item.tags ?? []).join(" ")}`.toLocaleLowerCase();
    const score = terms.reduce((sum, word) => sum + (title.includes(word) ? 4 : text.includes(word) ? 1 : 0), 0);
    return { item, score };
  });
  return ranked.filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || Number(bundledSlugs.has(b.item.slug)) - Number(bundledSlugs.has(a.item.slug)) || a.item.slug.localeCompare(b.item.slug))
    .slice(0, limit).map(({ item }) => item);
}

export async function run(args, { fetcher = fetch, read = readFile } = {}) {
  const [command, ...rest] = args;
  const offline = rest.includes("--offline");
  const query = rest.filter((arg) => arg !== "--offline").join(" ").trim();
  if (!["search", "skill", "apps"].includes(command) || !query || query.length > 300) {
    throw new Error('Usage: catalog.mjs search "words" | skill slug | apps "words" [--offline]');
  }
  if (command === "skill" && !SLUG.test(query)) throw new Error("Use a valid lowercase skill slug");
  if (command === "apps") {
    const snapshot = JSON.parse(await read(reference("apps.json"), "utf8"));
    return { source: "bundled app metadata", asOf: snapshot.asOf, notice: "Preparation only. Check the linked app for availability and current credit cost.", results: search(snapshot.items, query) };
  }
  let items;
  let source;
  let asOf;
  let notice = "Offline snapshot. Verify price and availability on the product page.";
  if (!offline) {
    try {
      items = (await fetchCatalog(fetcher)).map(publicSkill);
      source = "live public catalog";
      asOf = new Date().toISOString();
      notice = "Listing prices observed at retrieval. The product page controls purchase and access.";
    } catch (error) {
      notice = `Live catalog could not be verified (${error instanceof Error ? error.message : "request failed"}). Using a dated snapshot; prices and availability may be stale.`;
    }
  }
  if (!items) {
    const snapshot = JSON.parse(await read(reference("catalog.json"), "utf8"));
    items = snapshot.items;
    source = "bundled snapshot";
    asOf = snapshot.asOf;
  }
  const results = command === "skill" ? items.filter((item) => item.slug === query) : search(items, query);
  return { source, asOf, notice, catalogCount: items.length, results };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  run(process.argv.slice(2)).then((result) => process.stdout.write(`${JSON.stringify(result, null, 2)}\n`)).catch((error) => {
    process.stderr.write(`${error instanceof Error ? error.message : "Catalog request failed"}\n`);
    process.exitCode = 1;
  });
}
