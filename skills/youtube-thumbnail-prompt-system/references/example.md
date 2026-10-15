> Grok Bot edition: This is a fictional worked example for structure only. Use only its stated sample inputs as evidence; any unsupported claim must be omitted or marked as an assumption. Never transfer sample credentials, testimonials, results, quotes or personal experience into a real creator's output.

# YouTube Thumbnail Prompt System — Worked Examples

These examples show the exact output style expected from the system.

## Example 1 — Tool roundup video

### Creator input

```text
Video title: I Tested 7 AI Thumbnail Tools for 30 Days
Topic: AI tools for YouTube thumbnail creation
Audience: YouTubers with 1K-50K subscribers
Face in thumbnail: yes
Brand colors: navy, amber, white
Model target: all 3 (ChatGPT image generation, Flux, Midjourney)
Test goal: improve CTR from 4.1% to 5.5%+
```

### Output

## Channel Style Guide
- Palette: `#0F172A` (navy), `#F59E0B` (amber), `#E5E7EB` (off-white)
- Contrast rule: amber accents must sit against dark navy field for mobile readability
- Visual motif: thin glow frame around focal object
- Composition default: face left (40-45%), object cluster right (55-60%)
- Text overlay rules: max 4 words, heavy sans-serif, high-contrast outline
- Brand continuity rule: keep one amber focal accent in every thumbnail

## Concept 1 — Reaction/Emotion: High-Energy Reaction

### Base Prompt
```text
YouTube thumbnail, 16:9. Left side: close-up creator face with surprised expression, occupying 45% of frame. Right side: cluster of 3 app icons with subtle glow frame. Dark navy gradient background with amber accent highlights. Strong edge contrast, clean composition, no text, no watermark.
```

### ChatGPT Image Variant
```text
Create a 16:9 YouTube thumbnail base image. Left side: close-up human face with surprised expression and soft key light. Right side: cluster of three app icons with subtle amber glow frame. Dark navy gradient background, clean composition, high contrast. No text or logos.
```

### Flux Variant
```text
16:9 youtube thumbnail base, surprised close-up face left 45%, three app icons right with amber glow frame, dark navy gradient, high edge contrast, clean negative space, no text
```

### Midjourney Variant
```text
close-up surprised creator face on left, three app icons on right with subtle amber glow frame, dark navy gradient background, strong contrast, clean thumbnail composition, no text --ar 16:9 --stylize 150 --v 6
```

### A/B Test Variant
- Hypothesis: closer face crop increases emotional clarity and CTR.

**Variant A (control):**
```text
[Use Concept 1 baseline prompt unchanged]
```

**Variant B (challenger):**
```text
YouTube thumbnail, 16:9. Left side: tighter close-up creator face (head fills ~55% of frame height) with surprised expression. Right side: cluster of 3 app icons with subtle glow frame. Same palette and contrast rules. No text.
```

- Variable changed: face crop distance only
- Expected signal: improved stop-rate on mobile impressions

### Execution Notes
- Keep overlay text short: `BEST TOOL?`
- Place text top-right to avoid face overlap.
- Do not add more than one extra icon; clutter lowers clarity.

## Concept 2 — Listicle: Number-Led

### Base Prompt
```text
YouTube thumbnail, 16:9. Large visual number 7 as focal object on right side, creator face on left with focused expression. Surround number with tiny tool cues (not dense). Navy background with amber accents, high contrast, no text.
```

### ChatGPT Image Variant
```text
Create a 16:9 thumbnail base image with a large visual number 7 as the main focal element on the right, creator face on the left, and minimal tool cues around the number. Use dark navy + amber accents, clean layout, no text.
```

### Flux Variant
```text
16:9 listicle thumbnail base, large visual number 7 right, focused creator face left, minimal tool cues, navy plus amber accents, clean composition, no text
```

### Midjourney Variant
```text
large number 7 focal point on right, creator face left, minimal tool cues, dark navy with amber highlights, clean listicle thumbnail style, no text --ar 16:9 --stylize 140 --v 6
```

### A/B Test Variant
- Hypothesis: higher object scale improves instant comprehension.
- Variable changed: number size (30% frame width → 40% frame width)

## Concept 3 — Text-Overlay Composition: Bold Claim Backdrop

### Base Prompt
```text
YouTube thumbnail background image, 16:9. One dominant app dashboard object centered-right with dramatic contrast. Reserve clear top-left negative space for 3-word text overlay. Dark navy base with amber edge accents. No rendered text.
```

### ChatGPT Image Variant
```text
Create a 16:9 thumbnail background with one dominant dashboard-style object on the right and clean negative space in the top-left for text. Dark navy base, amber edge accents, high contrast, no text.
```

### Flux Variant
```text
16:9 thumbnail background, dominant dashboard object right, top-left negative space for text, navy + amber contrast, clean, no text
```

### Midjourney Variant
```text
dominant dashboard object on right, clear top-left negative space, dark navy with amber edge accents, high-contrast thumbnail background, no text --ar 16:9 --stylize 110 --v 6
```

### A/B Test Variant
- Hypothesis: less text density outperforms dense overlay when topic is already complex.
- Variable changed: overlay plan only (`3 words` vs `5 words`) while image stays constant.

## Recommended first test
- Pick: Concept 1
- Why: emotional clarity + tool context gives both curiosity and relevance
- First metric check window: 24-48 hours after publish

---

## Example 2 — Educational workflow video

### Creator input

```text
Video title: How I Edit Talking-Head Videos 2x Faster
Topic: editing workflow tutorial
Audience: beginner to intermediate creators
Face in thumbnail: no
Brand colors: charcoal, cyan
Model target: Midjourney first, then Flux
Test goal: improve tutorial CTR while keeping brand clean
```

### Output

## Channel Style Guide
- Palette: `#111827` (charcoal), `#06B6D4` (cyan), `#D1D5DB` (light neutral)
- Contrast rule: cyan must only highlight focal workflow path
- Visual motif: path/flow arrows with soft glow
- Composition default: central process object, left-to-right reading direction
- Text overlay rules: max 5 words, one line preferred
- Brand continuity rule: keep one cyan directional cue in every frame

## Concept 1 — Educational Explainer: Concept Diagram

### Base Prompt
```text
YouTube thumbnail background, 16:9. Central editing timeline object with simplified node flow around it. Left-to-right directional cues using cyan highlights. Charcoal background, clean and legible at small size. No text.
```

### Midjourney Variant
```text
central video editing timeline object with simplified node flow, cyan directional cues left-to-right, charcoal background, clean educational thumbnail composition, no text --ar 16:9 --stylize 90 --v 6
```

### Flux Variant
```text
16:9 educational thumbnail base, central editing timeline object, simple node flow, cyan directional cues, charcoal background, clean and legible, no text
```

### A/B Test Variant
- Variable changed: depth blur (none vs subtle background blur)
- Hypothesis: slight depth separation improves focal lock

## Concept 2 — Problem vs Solution

### Base Prompt
```text
YouTube thumbnail background, 16:9. Left side shows messy timeline state, right side shows clean organized timeline. Cyan cue points toward clean side. Strong contrast but minimal clutter. No text.
```

### Midjourney Variant
```text
split composition messy editing timeline on left, clean organized timeline on right, cyan directional cue toward right side, charcoal base, clean educational style, no text --ar 16:9 --stylize 110 --v 6
```

### Flux Variant
```text
16:9 problem-solution thumbnail, messy timeline left, organized timeline right, cyan cue toward right, charcoal background, clean, no text
```

### A/B Test Variant
- Variable changed: split angle (vertical split vs slight diagonal split)
- Hypothesis: diagonal split increases visual momentum

## Concept 3 — Product/Tutorial Result Showcase

### Base Prompt
```text
YouTube thumbnail, 16:9. Foreground shows clean final edit timeline with strong clarity. Background includes subtle process cue (keyboard + waveform glow). Charcoal base with controlled cyan accents. No text.
```

### Midjourney Variant
```text
foreground clean final video edit timeline, subtle keyboard and waveform cue in background, charcoal base with cyan accents, sharp subject separation, no text --ar 16:9 --stylize 100 --v 6
```

### Flux Variant
```text
16:9 tutorial result thumbnail, clean final timeline foreground, subtle keyboard and waveform cue background, charcoal plus cyan accents, sharp subject separation, no text
```

### A/B Test Variant
- Variable changed: focal object scale (timeline panel medium vs large)
- Hypothesis: larger panel improves tutorial relevance recognition

## Recommended first test
- Pick: Concept 2
- Why: instantly communicates pain-to-outcome transformation
- First metric check window: first 1,000 impressions
