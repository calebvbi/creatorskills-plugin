# YouTube Chapter Generator — adapted worked examples

## Example 1: verified timing cues

**Supplied input:** A 12-minute video transcript has these segment start cues: 00:00 opening; 01:20 equipment list; 04:10 measuring ingredients; 08:05 recording observations; 11:00 conclusion. The creator wants concise chapter labels.

**Output:**

```text
00:00 What this video covers
01:20 Equipment checklist
04:10 Measuring ingredients
08:05 Recording observations
11:00 Next steps
```

These clock values are copied from the supplied source. They are not independently checked against the video. Confirm the final edit and current YouTube chapter requirements before uploading.

## Example 2: outline with no timestamps

**Supplied input:** “My video covers choosing a recipe, measuring ingredients and recording what happened. I don't have a timed transcript yet. Make chapters.”

**Output:**

```text
[TIMESTAMP NEEDED] Choosing a recipe
[TIMESTAMP NEEDED] Measuring ingredients
[TIMESTAMP NEEDED] Recording what happened
```

These are chapter headings, not publish-ready chapter metadata. Supply a timed transcript or mark each segment's start in the final edit. No intro, outro, direct quote or clock offset was invented.

## Example 3: explicitly requested planning estimate

**Supplied input:** “Plan approximate chapter timings for a future six-minute video: one-minute opening, two minutes of setup, two minutes demonstrating the process, and a one-minute conclusion.”

**Output — planning estimates only:**

```text
~00:00 Opening
~01:00 Setup
~03:00 Process demonstration
~05:00 Conclusion
```

These offsets follow the creator's requested allocation. They are estimates for an unrecorded video and must be replaced with verified edit timings before publication.
