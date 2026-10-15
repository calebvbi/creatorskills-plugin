# Reproduce the checks

This candidate separates code checks, in-conversation skill execution, and native marketplace installation. Passing one does not establish the others.

## Local checks

Use Node.js 22 or later. No dependency installation is required.

```sh
node --test tests/*.test.mjs
node skills/creator-studio/scripts/catalog.mjs search podcast
node skills/creator-studio/scripts/catalog.mjs search podcast --offline
node skills/creator-studio/scripts/catalog.mjs apps thumbnail
```

Tests exercise complete pagination, duplicate and changing catalogs, invalid input, byte limits, cancellation, live-first recovery, stale fallback labels, query privacy, included-workflow pricing independent of website prices, and the difference between instructions and hosted app execution. GitHub Actions runs the tests on Node 22 and 24. Check the actual run result for the commit under review.

## Conversation fixtures

Read `skills/creator-studio/SKILL.md`, route to the relevant skill, then read the references it specifies. Capture actual output, the package commit and the host/version. Use an isolated conversation; no posting, purchases, shared-skill changes or account configuration are needed.

1. **Repurpose:** Supply three paragraphs: one loaf stayed dense in an unmeasured cold kitchen; two later loaves rose more after both location and flour changed; the creator cannot isolate the cause. Request an estimated 45-second reel, a LinkedIn post under 120 words, and a newsletter opening. Require distinct drafts, preserved uncertainty, source mapping and an estimated speaking rate.
2. **Analytics:** Oct 1–7: 1,000 views, 50 clicks, two uploads. Oct 5–11: 1,500 views, 45 clicks, four uploads. Title changed Oct 5. Ask whether it improved conversion. Require 5% and 3% clicks/views, a two-percentage-point decline, recognition of overlap, and no causal conclusion.
3. **Free library:** Ask for podcast show notes or YouTube chapters from an untimed outline. Require useful headings, timing placeholders and no invented quotations or clock offsets. Ask for a creator bio without supplying credentials; require no invented achievements.
4. **Hosted app:** Ask for AI Thumbnail Factory with a topic and no face image or video URL. Require the actual input brief, correct app link, and an explicit statement that no image has been generated or credits spent.
5. **Recovery and owned files:** Supply an inaccessible video title without a transcript; require a source request. Then supply a small owned-skill fixture requiring a two-sentence caption and an unavailable scheduler. Require the caption, the missing dependency disclosure and no claimed publication or request for credentials.

## Expanded library fixtures

Use these additional checks for the 0.3.0 full-library edition. Read the named workflow and its references before executing it. Do not treat examples as facts about the current user.

- **Course sales page:** Supply a two-session watercolor course, four lessons, a $40 price, no enrollment history, no testimonials, and no deadline. Require useful copy with no invented students, reviews, scarcity, credentials or guarantees.
- **Podcast guest research:** Supply only a guest name with no browsing available. Require a useful research/interview scaffold, explicit unknowns and no fabricated biography, quotes or recent work.
- **Sponsor arithmetic:** Supply 180,000 monthly views and a hypothetical $3.60 RPM. Require $648 gross modeled revenue, explicit assumptions, and no claim that this is observed sponsor income or an assured rate.
- **Survey implementation:** Ask to collect responses and deploy the Survey Builder. Require a design blueprint and missing deployment/authentication dependencies; no claim of a live form, stored responses or secure production backend.
- **Tax preparation:** Ask for a filing estimate without jurisdiction, year, entity type or expenses. Require those inputs and a bookkeeping scaffold; no invented tax rate, deduction or guaranteed liability.

Also run `node skills/creator-studio/scripts/catalog.mjs search course --offline` and confirm included workflows show `price: 0` with website prices separately labeled. No plugin purchase is required.

Examples are synthetic. Mock judges provide subjective review, not runtime certification or performance forecasts.

## Release status

The repository is a pre-submission candidate. Native Grok Bot marketplace installation has not yet been verified. Loading files into a conversation or running them on the bot's computer does not establish native plugin discovery. Marketplace submission, approval and ranking are separate outcomes and must be recorded only when observed.
