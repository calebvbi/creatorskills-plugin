# CreatorSkills

Turn a brief or transcript into drafts you can use. CreatorSkills brings 94 free workflows into Grok Bot: the full 89-workflow owned library, plus five workflows for combined creator tasks. It also prepares portable briefs using 55 app guides.

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

The 89 library workflows cover planning, writing, video and podcast production, newsletters, visual briefs, audience research, analytics, sponsorships, proposals, courses and creator operations. Each includes complete adapted instructions and a worked example; supporting guides are included where needed. See [provenance and attribution](NOTICE.md).

All 94 workflows are free and need no CreatorSkills account, API key or purchase. Your Grok plan has its own limits and costs. Text instructions do not themselves render images, transcribe inaccessible media, send messages or publish content. External integrations run only when actually available and authorized.

## Full library and app preparation

See [the complete index](skills/creator-studio/references/catalog.md) and [coverage manifest](coverage.json). All 89 current owned library workflows are bundled as a new MIT edition. Separate website prices do not apply to the included plugin instructions. Existing purchasers retain their access. Counts describe this release; future website listings are not automatically bundled.

For a skill from elsewhere, attach its instructions and required references, then ask: "Use this skill to [your task]." The [supplied-file workflow](skills/creator-studio/references/use-a-library-skill.md) checks dependencies and available capabilities without assuming redistribution rights.

The 55 app guides organize inputs into portable briefs. They do not execute hosted pipelines or grant credits, and no paid app is required for the plugin. The creator can use the brief in this conversation or independently choose another service.

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

## Gallery

[View the five-image gallery](assets/gallery/README.md). Original illustrations show the intended creator workflows. Gallery placement on a live marketplace details page remains unconfirmed.

## Privacy, terms, and support

See [plugin privacy](PRIVACY.md) and [terms](TERMS.md). The plugin has no analytics collector, account system, or credential store. It does not create scheduled routines. Contact **support@creatorskills.co** for problems, including the plugin version, requested workflow, and a redacted reproduction. Do not send passwords or private source material.

The plugin is MIT licensed. Third-party providers and the CreatorSkills website retain their own terms. No marketplace ranking, output performance, or acceptance is guaranteed.
