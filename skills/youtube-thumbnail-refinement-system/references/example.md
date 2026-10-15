> Grok Bot edition: This is a fictional worked example for structure only. Use only its stated sample inputs as evidence; any unsupported claim must be omitted or marked as an assumption. Never transfer sample credentials, testimonials, results, quotes or personal experience into a real creator's output.

# YouTube Thumbnail Refinement System — Worked Example

## Scenario

A creator already has a strong thumbnail idea, but the AI-generated first pass looks fake enough to hurt trust.

## Creator input

```text
Video title: I Let ChatGPT Design My Thumbnails for 7 Days
Niche: YouTube growth / creator education
Audience: creators with 1K to 50K subscribers
Current thumbnail draft: shocked face on left, glowing laptop on right, fake YouTube analytics screen in the background, text inside the image says "AI DID THIS"
What feels wrong: the face looks plastic, the laptop keyboard is warped, the analytics screen is unreadable, and the whole thing feels too shiny
Brand style: dark navy, amber accents, clean tech look
Editing tool: Canva
```

## Output

## Verdict
- Mode: Partial rebuild
- Why: the core hook is good, but the current draft has too many obvious AI tells to salvage as-is
- Biggest trust risk: uncanny face plus fake analytics UI
- Signal worth preserving: strong "AI made this?" curiosity hook with face-versus-screen contrast

## Refinement Diagnosis
- What feels obviously AI-generated: plastic skin texture, warped keyboard geometry, unreadable fake dashboard, over-glossy lighting
- What hurts click-through: the viewer has to decode too many elements at once and the text inside the image makes the whole thumbnail feel cheap
- What to keep: face-left / object-right structure, dark navy base, amber accent
- What to cut: generated text, fake dashboard background, extra glow on every edge
- What to replace with real assets: real creator face cutout and real analytics screenshot

## Final Thumbnail Direction
### Composition
- Real creator face on the left at roughly 45% frame width
- Real analytics screenshot on the right, cropped tight so one metric is readable
- Laptop removed entirely to reduce noise
- Background simplified to a dark navy gradient with one amber edge light behind the screenshot

### Text Overlay
- Copy: `AI PICKED THESE`
- Placement: top-right, above the screenshot
- Style: bold all-caps sans-serif with manual shadow
- Reason: clearer than the current in-image text and short enough to read on mobile

### Color and Contrast
- Navy base: `#0F172A`
- Amber accent: `#F59E0B`
- Off-white text: `#E5E7EB`
- Highest contrast goes to the face eyes, the readable metric, and the text overlay

### Manual Polish Pass
- Cut out the creator from a real photo instead of generating a face
- Use one real YouTube analytics screenshot and blur everything except the key metric
- Add text in Canva, not in the image model
- Add a thin amber outline to either the face or screenshot, not both
- Lower background contrast so the face and metric carry the frame

### Regeneration Prompt
```text
YouTube thumbnail background, 16:9. Dark navy gradient background with subtle amber rim light on the right side. Reserve left side for a real human face cutout. On the right, one clean laptop-or-dashboard support area with clear rectangular framing and strong negative space for manual text above. High contrast, believable lighting, clean tech aesthetic, minimal clutter. No text, no people, no fake UI details, no duplicate objects, no warped keyboard, no watermark.
```

## A/B Variant
- Hypothesis: removing text from the top-right and relying on a tighter face crop could increase curiosity
- Variant A: face-left, screenshot-right, `AI PICKED THESE` text
- Variant B: tighter face crop, same screenshot, no overlay text
- Variable changed: text presence only
- What to measure: CTR lift from cleaner, more curiosity-driven packaging

## Ready-to-Publish Checklist
- Real face used
- Real screenshot used
- No generated text remains
- One focal hook only
- Thumbnail still reads at mobile size
- Background does not compete with face or metric

## My Recommendation
- Publish path: rebuild the thumbnail around real assets and keep the same face-versus-proof structure
- Fastest next move: swap in the real face and screenshot first, then test text vs no-text before doing any more prompt work
