> Grok Bot edition: This is a fictional worked example for structure only. Use only its stated sample inputs as evidence; any unsupported claim must be omitted or marked as an assumption. Never transfer sample credentials, testimonials, results, quotes or personal experience into a real creator's output.

# Example Output: Quote Card & Carousel Cover Generator

Two complete walkthroughs: a freelance-writing newsletter locking its visual system and generating a quote card, and a fitness coach building a carousel cover + slide outline from a video takeaway.

---

## Example 1: Freelance Writing Newsletter — Visual System + Quote Card

### Input

```
I want to lock a Visual Series System before generating any cards.

My niche/content: I write a weekly newsletter for freelance writers about
pricing, client relationships, and getting off the feast-or-famine cycle.
Brand colors: no brand yet, suggest some
Platform priority: Instagram and LinkedIn, roughly equal
Vibe in 2-3 words: confident, a little contrarian, editorial

Build me a Visual Series System.
```

---

### Output: Visual Series System

**Visual Series System: The Unbillable Hour (newsletter)**

**Vibe:** Confident, contrarian, editorial

---

**Color Treatment (use on every card, no exceptions)**

- **Background:** #14171F — near-black charcoal navy, solid, no gradient. Reads as editorial/serious rather than "inspirational quote app."
- **Accent:** #E8A33D — warm amber. Used only for the opening quotation mark and the underline beneath the attribution. One accent, never more.
- **Text color:** #F4F1EA — warm off-white, not pure white. Passes contrast easily on the charcoal background and feels warmer/more editorial than stark white.

**Font Pairing**

- **Display font (the quote itself):** A bold slab or humanist serif — something like Tiempos Headline or Canela Deck. Should feel like it belongs in a print magazine pull-quote, not a Pinterest graphic.
- **Support font (attribution, slide labels):** A tight geometric sans like Inter or Söhne, all-caps, letter-spaced +2%.
- **Rule:** Never a third font. Never script/handwriting — the vibe is editorial, not cute.

**Layout Grid**

- **Quote cards:** Quote block left-aligned, starting 12% from the left edge, vertically centered. Max 3 lines before font size steps down. Amber quotation mark sits above the first line, not beside it.
- **Carousel covers:** Headline occupies the top two-thirds of the frame; small "swipe →" cue bottom-right in amber.
- **Margins:** Minimum 90px padding on all sides at 1080x1080.

**Logo / Handle Placement**

- **Position:** Bottom-right corner, 40px from edges.
- **Treatment:** "@theunbillablehour" wordmark only, support font, 60% opacity, no logo mark.
- **Rule:** Identical position and size on every card, including every carousel slide.

**Master Prompt Fragment**

> "Solid #14171F charcoal-navy background, minimalist editorial design, generous negative space, no photographic elements, no gradients, no stock-photo textures — reads like a print magazine pull-quote page, not a generic inspirational quote graphic."

**How to Use This Going Forward**

Paste this whole system back at the start of every future quote card, carousel, or pin session.

---

### Input (continued, same session)

```
Here's my Visual Series System: [system above]

Turn this into a quote card for Instagram:
"Clients don't leave because your rates are too high. They leave because
you stopped surprising them."

Attribution: from this week's newsletter issue, my own words
```

---

### Output: Quote Card Prompt & Spec

**Quote Card: "Clients don't leave because your rates…"**

**Platform:** Instagram Feed 1080x1080

**Image Generation Prompt:**

> Solid #14171F charcoal-navy background, minimalist editorial design, generous negative space, no photographic elements, no gradients, no stock-photo textures — reads like a print magazine pull-quote page, not a generic inspirational quote graphic. Large amber (#E8A33D) opening quotation mark positioned above the text block, left-aligned at 12% from the left edge, otherwise empty background reserved for text overlay.

*Note: text overlay added separately in Canva/Figma per the spec below — most image models still render this length of text unreliably.*

**Overlay Copy (exact line breaks):**

```
Clients don't leave because
your rates are too high.
They leave because you
stopped surprising them.

— THE UNBILLABLE HOUR
```

**Typography Spec:**

- **Quote text:** Tiempos Headline (or closest available bold serif) · 58pt · bold · #F4F1EA
- **Attribution line:** Inter, all-caps, +2% letter-spacing · 16pt · #E8A33D at 80% opacity
- **Emphasis treatment:** None flagged — full quote reads as one continuous statement, don't break the rhythm with a color change

**Alt Text:**

Quote card reading: "Clients don't leave because your rates are too high. They leave because you stopped surprising them." — from The Unbillable Hour newsletter.

---

## Example 2: Fitness Coach — Carousel Cover + Slide Outline

### Input

```
Here's my Visual Series System: bright white background (#FAFAF8), one
coral accent (#FF6B5B), bold condensed sans for headlines (something like
Archivo Black), a lighter sans for body text (Inter), logo bottom-center
as a small coral dumbbell icon. Vibe: energetic, no-nonsense, motivating
but not preachy.

Source content: This week's video was about why people plateau on strength
gains — most people think it's about not training hard enough, but it's
actually about not tracking progressive overload. They do the same weights
for months because they're not writing anything down.

Carousel length: 8 slides
Platform: Instagram

Specific hook angle: I want the cover to call out the actual mistake
directly, not tease it.
```

---

### Output: Carousel Cover Prompt + Slide-by-Slide Outline

**Carousel: "Why You've Stopped Getting Stronger"**

**Platform:** Instagram 1080x1350 · **Slide count:** 8

---

**Slide 1 — Cover (Image Generation Prompt)**

> Bright solid white (#FAFAF8) background, minimalist energetic design, one coral (#FF6B5B) accent element — a bold horizontal underline beneath the headline zone. Headline zone occupies the top 60% of the frame, generous white space below it, small coral swipe-arrow icon bottom-right, no photographic elements, must read clearly and boldly even at mobile thumbnail size.

**Cover headline (exact overlay copy):**

```
You're not plateauing.
You're not tracking.
```

**Typography spec:** Archivo Black (or closest bold condensed sans) · 76pt · #1A1A1A near-black · coral underline beneath second line for emphasis. Small "SWIPE →" kicker in Inter, all-caps, coral, bottom-right corner.

---

**Slide-by-Slide Text Outline (Slides 2 through 8)**

**Slide 2:**
```
Here's the mistake almost
everyone makes at the gym:
```

**Slide 3:**
```
You do the same weight,
for the same reps,
for months.
```

**Slide 4:**
```
Your body adapted to that
weight in week 2.
Everything after is maintenance,
not progress.
```

**Slide 5:**
```
This is called
progressive overload —
and it's not optional.
```

**Slide 6:**
```
[NEEDS IMAGE: simple screenshot-style mockup of a basic workout log — 3 columns: exercise, weight, reps — showing weight increasing week over week]

Track 3 numbers every session:
weight, reps, and how it felt.
```

**Slide 7:**
```
If you didn't write it down,
you can't know if you're
actually progressing.
```

**Slide 8 — Closing/CTA:**

```
Save this before your
next session.

Follow @[handle] for more
no-fluff strength coaching.
```

**Design Consistency Notes**

- Slides 2-7 share one simpler template: text top-aligned at 15% from the top edge, centered horizontally, no imagery except the flagged slide 6, background stays solid #FAFAF8 with no coral accent except on emphasized words
- Coral dumbbell logo stays bottom-center on every slide, same size as the cover, not just the cover and last slide
- Slide 6 is the only slide needing a supporting visual — flagged explicitly rather than forcing a workout-log concept into text alone, which wouldn't land
