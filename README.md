# CreatorSkills

Turn a brief or transcript into drafts you can use. CreatorSkills brings 22 free workflows into Grok Bot: 17 complete workflows from its public MIT library, plus five workflows for combined creator tasks. It also helps you find and use separately acquired skills and prepare inputs for hosted apps.

## Try it

After installing the plugin, ask:

> Use CreatorSkills to turn this transcript into a short video script, a LinkedIn post, and a newsletter opening. Keep the original caveats and show where each claim came from. [Paste your transcript.]

Or:

> Plan a six-minute video for first-time home bakers about why dough fails to rise. I can demonstrate yeast activation and room temperature, but I have no experiment results yet. Give me three matched titles and openings, an outline, and a shot list.

## What runs in your conversation

| Workflow | Input | Result |
| --- | --- | --- |
| Publish a piece | Topic, audience, evidence | Titles, opening, outline or script, production plan |
| Repurpose a source | Transcript, article, or script | Distinct channel drafts and a source map |
| Keep my voice | Writing samples and a draft | Edited copy and an evidence-based voice note |
| Read creator analytics | Export or supplied metrics | Checked comparisons and a measurable next experiment |
| Prepare creator business | Sponsor or client brief | Pitch, proposal, scope, or campaign report draft |

The 17 library workflows cover content ideas, repurposing, bios, Community posts, blog outlines, Reels and TikTok scripts, LinkedIn posts, email subjects, newsletter growth, podcast show notes, threads, YouTube chapters and descriptions, creator productivity, and book launch planning. Each includes the full workflow, a worked example, and guidance for using it in Grok Bot. See [provenance and attribution](NOTICE.md).

All 22 workflows are free to use and need no CreatorSkills account or API key. Your Grok plan and any external services you choose retain their own limits and costs. Text instructions do not themselves render images, transcribe inaccessible media, send messages, or publish content.

## Library and app coverage

See [the complete index](skills/creator-studio/references/catalog.md) and [coverage manifest](coverage.json). All entries have an explicit access mode. This is full catalog discovery, not a free copy of every separately sold skill.

The 17 MIT library workflows are bundled in full. The remaining 72 catalog products are separate downloads requiring purchase. To use one you own, attach its `SKILL.md` and required reference files, then ask: "Use this skill to [your task]." The [library workflow](skills/creator-studio/references/use-a-library-skill.md) checks required tools and applies the instructions in the current conversation. A skill requiring unavailable tools can only run its portable portions. It does not automatically install privately purchased files across your bots. Counts describe this release's snapshot; the online catalog can change.

Hosted app guides prepare a brief and link to the app. They do not run its pipeline or grant credits. Confirm current availability and cost on CreatorSkills.

The catalog finder uses Node.js 22 or later. It has no package dependencies:

```sh
node skills/creator-studio/scripts/catalog.mjs search "newsletter"
node skills/creator-studio/scripts/catalog.mjs skill content-idea-brainstormer
node skills/creator-studio/scripts/catalog.mjs apps "thumbnail"
```

Use `--offline` to read the bundled snapshot. Without Node, the Markdown index and all workflows remain readable. Live retrieval failures show a dated fallback explicitly. The search text stays local; the finder retrieves public catalog pages without submitting the creator's prompt.

## Installation status

This repository contains an Agent Plugins 1.0 package with `plugin.json` at its root. Grok Bot is listed as a compatible client by the [Agent Plugins project](https://agent-plugins.org/compatible-clients).

Marketplace submission and in-app installation are release gates. Until a listing is approved, do not assume that searching Connect apps will find this plugin. Release testing must record the actual Grok Bot import method and version. Cursor local-folder tests are not Grok Bot tests.

See [reproducible checks and conversation fixtures](TESTING.md). This is a pre-submission candidate; a public repository is not proof of marketplace availability.

Once listed, open Grok Bot **Connect apps**, find **CreatorSkills**, add it, and start with one of the prompts above. Verify that the workflow produces the requested draft.

## Privacy, terms, and support

See [plugin privacy](PRIVACY.md) and [terms](TERMS.md). The plugin has no analytics collector, account system, or credential store. It does not create scheduled routines. Contact **support@creatorskills.co** for problems, including the plugin version, requested workflow, and a redacted reproduction. Do not send passwords or private source material.

The plugin is MIT licensed. Third-party providers and the CreatorSkills website retain their own terms. No marketplace ranking, output performance, or acceptance is guaranteed.
