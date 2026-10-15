> Grok Bot edition: Apply the parent skill's grounding, current-source and authorization rules throughout. Produce a draft or plan using available capabilities. External actions and costs require the creator's authorization and an observed tool result; examples and benchmarks are not verified facts.

# YouTube Thumbnail Prompt Templates

Use these templates as a structured starting point. Replace bracketed fields with your video specifics.

## 0) Channel Style Guide Builder (Run once per channel)

**Best for:** Establishing a repeatable visual identity.

**Prompt:**
```text
Build a thumbnail style guide for my channel.
Niche: [niche]
Audience: [audience]
Brand colors: [colors or "none"]
Face in thumbnails: [yes/no]
Thumbnail mood: [clean, bold, playful, serious]

Return:
1) 3-color palette with hex
2) 1 recurring visual motif
3) default composition rule
4) text overlay rule set (max words, font weight, contrast treatment)
5) do-not-use list (things that break consistency)
```

---

## Face-Forward Templates

## 1) Face + Single Object Contrast

**Best for:** Tutorials, reviews, "I tested" videos.

**Base prompt:**
```text
YouTube thumbnail, 16:9. Left side: close-up creator face with [emotion], occupying ~45% frame width. Right side: one large [object] with high contrast outline. Background: dark gradient [color1] to [color2], subtle rim light around subject. Keep composition clean with one focal object. No text, no watermark.
```

**ChatGPT image variant:**
```text
Create a YouTube thumbnail base image in 16:9. On the left, a close-up human face with [emotion], lit by soft key light plus rim light. On the right, a single large [object] with strong edge contrast. Use [palette]. Keep background simple and dark. No text or logos.
```

**Flux variant:**
```text
16:9 youtube thumbnail base, left close-up face [emotion], right single [object], dark gradient background [palette], high edge contrast, clean negative space, no text, no logo
```

**Midjourney variant:**
```text
close-up expressive face on left, single large [object] on right, dark gradient background [palette], strong rim light, clean composition, high contrast, youtube thumbnail base, no text --ar 16:9 --stylize 150 --v 6
```

## 2) Face + Data Shock

**Best for:** Growth, analytics, finance, case-study videos.

**Base prompt:**
```text
YouTube thumbnail, 16:9. Creator face centered-left with surprised expression. Right side: oversized numeric element [number/metric] as visual object (not text overlay). High contrast background with one accent color [accent]. Minimal clutter, strong focal hierarchy. No text, no watermark.
```

**ChatGPT image variant:**
```text
Design a 16:9 thumbnail base image with a surprised face on the left and a large visual numeric symbol on the right representing [metric]. Use [palette] with one bright accent. Keep background simple and contrast-rich. No text.
```

**Flux variant:**
```text
16:9 thumbnail base, surprised face left, oversized metric symbol right, [palette] with [accent], strong contrast, clean background, no text
```

**Midjourney variant:**
```text
surprised face left, oversized metric icon right, dark high-contrast background [palette], minimal clutter, youtube thumbnail style, no text --ar 16:9 --stylize 120 --v 6
```

## 3) Face + Mystery Blur

**Best for:** Reveals and curiosity-driven topics.

**Base prompt:**
```text
YouTube thumbnail, 16:9. Creator face on one side reacting to a blurred/obscured object on the other side. Blur area should be obvious and central to curiosity. Background simple, high contrast, with one accent glow [accent]. No text, no watermark.
```

**ChatGPT image variant:**
```text
Generate a 16:9 thumbnail base where a creator reacts to a deliberately blurred object. The blur should feel intentional and intriguing. Keep palette [palette], one accent glow [accent], and minimal background details. No text.
```

**Flux variant:**
```text
16:9 thumbnail, reacting face + intentionally blurred object, curiosity composition, [palette], accent glow [accent], minimal background, no text
```

**Midjourney variant:**
```text
reacting face beside intentionally blurred mystery object, curiosity hook, clean dark background [palette], accent glow [accent], no text --ar 16:9 --stylize 180 --v 6
```

---

## Text-Overlay Composition Templates

## 4) Bold Claim Backdrop

**Best for:** Opinion and commentary videos.

**Base prompt:**
```text
YouTube thumbnail background image, 16:9. Build a clean high-contrast backdrop with one dominant subject [subject] and open space reserved for 3-5 word text overlay at [position]. Palette: [palette]. Keep it simple and readable at mobile size. No text rendered in image.
```

**ChatGPT image variant:**
```text
Create a 16:9 thumbnail background with a single dominant [subject] and clear negative space at [position] for short overlay text. Use [palette], high contrast, minimal clutter. Do not render text.
```

**Flux variant:**
```text
16:9 thumbnail background, dominant [subject], reserved negative space at [position], [palette], high contrast, no text
```

**Midjourney variant:**
```text
dominant [subject], clear negative space for text at [position], high-contrast thumbnail background, [palette], no text --ar 16:9 --stylize 100 --v 6
```

## 5) Split-Panel Text Frame

**Best for:** Comparison and "this vs that" content.

**Base prompt:**
```text
YouTube thumbnail background, 16:9. Vertical split composition with [left idea] and [right idea]. Keep center divider clear for optional text marker. High contrast between panels using [palette]. No text or logos.
```

**ChatGPT image variant:**
```text
Generate a 16:9 split-panel thumbnail background. Left panel represents [left idea], right panel [right idea]. Keep clear divider and strong contrast using [palette]. No text.
```

**Flux variant:**
```text
16:9 split-panel thumbnail, left [left idea], right [right idea], clear center divider, high contrast [palette], no text
```

**Midjourney variant:**
```text
split-panel thumbnail background, left [left idea], right [right idea], clean center divide, high contrast [palette], no text --ar 16:9 --stylize 130 --v 6
```

## 6) Minimal Text Anchor

**Best for:** Educational channels with clean branding.

**Base prompt:**
```text
YouTube thumbnail background, 16:9. Minimal composition with one symbolic object [symbol] and calm gradient background [palette]. Reserve lower-third space for short overlay text. Emphasize clarity and legibility at small size. No rendered text.
```

**ChatGPT image variant:**
```text
Create a clean 16:9 thumbnail background with one symbolic object [symbol], calm gradient [palette], and lower-third negative space for text. Keep details minimal. No text.
```

**Flux variant:**
```text
minimal 16:9 thumbnail background, single [symbol], calm gradient [palette], lower-third negative space, no text
```

**Midjourney variant:**
```text
minimal symbolic thumbnail background, single [symbol], calm gradient [palette], clean lower-third space, no text --ar 16:9 --stylize 80 --v 6
```

---

## Reaction/Emotion Templates

## 7) High-Energy Reaction

**Best for:** Challenge videos, dramatic outcomes.

**Base prompt:**
```text
YouTube thumbnail, 16:9. Dynamic face-forward composition with intense reaction [emotion], motion cues around focal object [object], and strong contrast lighting. Use [palette] with one bright accent. No text or logos.
```

**ChatGPT image variant:**
```text
Generate a 16:9 thumbnail base image with a high-energy reaction face and subtle motion cues around [object]. Use [palette], strong directional light, and clear focal hierarchy. No text.
```

**Flux variant:**
```text
16:9 high-energy reaction thumbnail, intense [emotion], motion cues around [object], strong light contrast, [palette], no text
```

**Midjourney variant:**
```text
high-energy reaction face, dynamic motion cues around [object], dramatic lighting, [palette], youtube thumbnail style, no text --ar 16:9 --stylize 170 --v 6
```

## 8) Low-Key Disbelief

**Best for:** "I didn't expect this" style storytelling.

**Base prompt:**
```text
YouTube thumbnail, 16:9. Creator face with subtle disbelief expression, medium crop, looking toward unexpected visual element [element]. Keep tone controlled, contrast clean, and background uncluttered. Palette [palette]. No text.
```

**ChatGPT image variant:**
```text
Create a 16:9 thumbnail base with a medium-crop face showing subtle disbelief and eye-line toward [element]. Use [palette], simple background, clean contrast. No text.
```

**Flux variant:**
```text
16:9 thumbnail, medium-crop face subtle disbelief, eye-line to [element], clean background, [palette], no text
```

**Midjourney variant:**
```text
medium crop disbelief expression looking at [element], clean dark background, controlled contrast [palette], no text --ar 16:9 --stylize 110 --v 6
```

## 9) Joy/Win Moment

**Best for:** Milestones, success updates, transformation wins.

**Base prompt:**
```text
YouTube thumbnail, 16:9. Face-forward joyful expression paired with visual success marker [marker]. Bright accent highlights against dark base. Keep composition simple and celebratory without clutter. Palette [palette]. No text.
```

**ChatGPT image variant:**
```text
Generate a 16:9 thumbnail base showing joyful expression and visual success marker [marker]. Use dark base plus bright accent from [palette]. Keep it clean. No text.
```

**Flux variant:**
```text
16:9 thumbnail, joyful face + success marker [marker], dark base with bright accent [palette], clean composition, no text
```

**Midjourney variant:**
```text
joyful creator expression with success marker [marker], dark-to-bright contrast, clean celebratory thumbnail style, [palette], no text --ar 16:9 --stylize 140 --v 6
```

---

## Before/After Templates

## 10) Hard Split Before/After

**Best for:** Makeovers, optimization, editing demos.

**Base prompt:**
```text
YouTube thumbnail background, 16:9. Hard vertical split. Left side represents "before" [before state] with muted tones. Right side represents "after" [after state] with brighter, cleaner tones. Clear transformation contrast. No text rendered.
```

**ChatGPT image variant:**
```text
Create a 16:9 before/after split thumbnail background. Left side: [before state], muted. Right side: [after state], brighter and cleaner. Strong transformation contrast. No text.
```

**Flux variant:**
```text
16:9 before-after split background, left muted [before], right vibrant [after], clear contrast, no text
```

**Midjourney variant:**
```text
before-after hard split composition, left muted [before], right clean vibrant [after], transformation emphasis, no text --ar 16:9 --stylize 120 --v 6
```

## 11) Process Timeline Transformation

**Best for:** Step-by-step improvement videos.

**Base prompt:**
```text
YouTube thumbnail, 16:9. Three-stage horizontal progression from [start state] to [mid state] to [end state]. Keep each stage visually distinct and readable at small size. Use [palette] and one accent for progression cues. No text.
```

**ChatGPT image variant:**
```text
Generate a 16:9 progression-style thumbnail base with three visual stages: [start], [mid], [end]. Make transitions clear and high-contrast. Use [palette]. No text.
```

**Flux variant:**
```text
16:9 thumbnail progression, stage1 [start], stage2 [mid], stage3 [end], clear transitions, [palette], no text
```

**Midjourney variant:**
```text
three-stage visual progression from [start] to [end], high readability thumbnail composition, [palette], no text --ar 16:9 --stylize 130 --v 6
```

---

## Listicle Templates

## 12) Number-Led Listicle

**Best for:** "Top X" and "X tools" videos.

**Base prompt:**
```text
YouTube thumbnail, 16:9. Large visual numeric element [number] as focal object with supporting items [items]. Clean layout with strong hierarchy: number first, item cluster second. Palette [palette]. No text rendered.
```

**ChatGPT image variant:**
```text
Create a 16:9 thumbnail base where a large visual [number] is the main focal point, with supporting [items] arranged around it. High contrast and clean hierarchy. No text.
```

**Flux variant:**
```text
16:9 listicle thumbnail base, large [number] focal point, supporting [items], clear hierarchy, [palette], no text
```

**Midjourney variant:**
```text
large number-led thumbnail composition with supporting [items], clean hierarchy, high contrast [palette], no text --ar 16:9 --stylize 150 --v 6
```

## 13) Ranked Items Grid

**Best for:** Tool roundups and ranked recommendations.

**Base prompt:**
```text
YouTube thumbnail background, 16:9. Compact 2x2 or 3x2 item grid showing [items] with one highlighted winner slot. Use [palette], keep spacing clean, and maintain one obvious focal winner. No text.
```

**ChatGPT image variant:**
```text
Generate a 16:9 ranked-grid thumbnail background with [items] in a clean grid and one highlighted winner slot. Keep visual spacing and contrast clear. No text.
```

**Flux variant:**
```text
16:9 ranked grid thumbnail, [items] arranged cleanly, one highlighted winner slot, [palette], no text
```

**Midjourney variant:**
```text
ranked item grid composition, one highlighted winner slot, clean spacing, thumbnail readability, [palette], no text --ar 16:9 --stylize 120 --v 6
```

---

## Educational Explainer Templates

## 14) Concept Diagram Scene

**Best for:** "How it works" and framework videos.

**Base prompt:**
```text
YouTube thumbnail background, 16:9. Central concept object [concept] with simple supporting diagram-like elements around it. Keep information visual, not text-heavy. Palette [palette], clear contrast, uncluttered frame. No text rendered.
```

**ChatGPT image variant:**
```text
Create a 16:9 educational thumbnail base with central concept object [concept] and minimal diagram-like support elements. Clean, legible, high contrast. No text.
```

**Flux variant:**
```text
16:9 educational thumbnail base, central [concept], minimal diagram elements, clear contrast [palette], no text
```

**Midjourney variant:**
```text
educational concept diagram composition, central [concept], minimal supporting visuals, high legibility, [palette], no text --ar 16:9 --stylize 90 --v 6
```

## 15) Problem vs Solution Explainer

**Best for:** Teaching pain-point resolution.

**Base prompt:**
```text
YouTube thumbnail background, 16:9. Two-zone composition: left visualizes [problem], right visualizes [solution]. Keep contrast meaningful but clean. Use [palette] with one accent to guide eye toward solution side. No text.
```

**ChatGPT image variant:**
```text
Generate a 16:9 problem-vs-solution thumbnail base. Left side shows [problem], right side [solution]. Use [palette] and one eye-guiding accent. Keep frame clean. No text.
```

**Flux variant:**
```text
16:9 problem-solution split, left [problem], right [solution], clean contrast [palette], guiding accent, no text
```

**Midjourney variant:**
```text
problem vs solution split composition, left [problem] right [solution], clean educational thumbnail style, [palette], no text --ar 16:9 --stylize 110 --v 6
```

---

## Product/Tutorial Templates

## 16) Tool-in-Context Tutorial

**Best for:** Software and workflow tutorials.

**Base prompt:**
```text
YouTube thumbnail, 16:9. Show [tool/product] in practical context with one clear action cue [action cue]. Keep scene realistic but simplified. Palette [palette], high clarity, no visual clutter. No text.
```

**ChatGPT image variant:**
```text
Create a 16:9 tutorial thumbnail base showing [tool/product] used in context with one clear action cue [action cue]. Keep composition simple and readable. No text.
```

**Flux variant:**
```text
16:9 tutorial thumbnail, [tool/product] in context, clear action cue [action cue], clean layout [palette], no text
```

**Midjourney variant:**
```text
tutorial thumbnail base, [tool/product] in practical context, clear action cue [action cue], clean high-clarity composition, [palette], no text --ar 16:9 --stylize 100 --v 6
```

## 17) Product Result Showcase

**Best for:** "Built with this" and outcome-focused demos.

**Base prompt:**
```text
YouTube thumbnail, 16:9. Foreground: finished result [result]. Background: subtle hint of tool/process [tool cue]. Prioritize the result as focal point. Use [palette], sharp subject separation, minimal noise. No text.
```

**ChatGPT image variant:**
```text
Generate a 16:9 result-showcase thumbnail base with [result] in foreground and subtle [tool cue] in background. Keep result dominant and clean. No text.
```

**Flux variant:**
```text
16:9 result showcase thumbnail, foreground [result], subtle background [tool cue], clear subject separation, [palette], no text
```

**Midjourney variant:**
```text
result-first thumbnail composition, foreground [result], subtle process cue in background, clean contrast [palette], no text --ar 16:9 --stylize 125 --v 6
```

---

## A/B Variant Generator Template

## 18) One-Variable A/B Prompt Pair

**Best for:** Systematic thumbnail testing.

**Prompt:**
```text
Using this baseline thumbnail concept:
[PASTE BASE PROMPT]

Generate Variant B by changing only one variable:
Variable options: [face crop, text density, contrast level, focal object scale, emotion intensity, depth blur]
Chosen variable: [one]

Return:
1) Variant A prompt (unchanged baseline)
2) Variant B prompt (single-variable change)
3) What changed in one sentence
4) Why this test matters for CTR
```
