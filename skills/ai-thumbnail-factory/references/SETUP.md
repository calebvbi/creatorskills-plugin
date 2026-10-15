> Grok Bot edition: Apply the parent skill's grounding, current-source and authorization rules throughout. Produce a draft or plan using available capabilities. External actions and costs require the creator's authorization and an observed tool result; examples and benchmarks are not verified facts.

# AI Image Generation Setup Guide

The AI Thumbnail Factory works in two modes: **with image generation** (creates actual thumbnail images) and **text-only** (generates detailed design specs you execute in Canva). This guide covers both.

---

## Option 1: GPT Image 1.5 (via ChatGPT)

The simplest path. If you have ChatGPT Plus, image generation is built right in.

**Setup:**
1. Open ChatGPT (you need a Plus subscription at $20/month)
2. Start a new conversation or use your Thumbnail Factory GPT
3. When the system generates an image prompt, paste it directly into the chat
4. ChatGPT will generate the image using GPT Image 1.5 automatically

**Cost:** Included with your ChatGPT Plus subscription (no per-image charge for chat-based generation).

**Quality notes:**
- GPT Image 1.5 is a major upgrade over the older DALL-E 3 — far better at compositions, lighting, and following complex prompts
- Text rendering in images is greatly improved, but we still recommend adding text overlays manually in Canva for full control over fonts and placement
- It handles realistic human faces better than previous models, but always use your own photos for face-based thumbnails for authenticity
- Excellent at backgrounds, product scenes, food photography, and detailed compositions

**Best for:** Background images, product scenes, food photography, abstract compositions, and "scene setting" images that you'll composite with your own photos and text.

---

## Option 2: GPT Image 1.5 / GPT Image 1 Mini (via OpenAI API)

For creators who want more control, per-image pricing, or don't have ChatGPT Plus.

**Setup:**
1. Go to [platform.openai.com](https://platform.openai.com) and create an account
2. Navigate to **API Keys** and create a new key
3. Add billing information (you'll pay per image)
4. Use the API key with any tool that supports OpenAI image generation, or use the API playground

**Pricing tiers:**
- **GPT Image 1.5** — The flagship model. ~$0.01/image (low quality), ~$0.04/image (medium), ~$0.20/image (high). Medium quality is the sweet spot for thumbnails.
- **GPT Image 1 Mini** — Budget-friendly option. ~$0.005/image (low), ~$0.02/image (medium), ~$0.05/image (high). Great for rapid iteration and drafts.

**Tip:** Generate at 1792x1024 for the best thumbnail aspect ratio. Use GPT Image 1 Mini for quick drafts and experimenting, then switch to GPT Image 1.5 (medium) for the final version.

**Note:** DALL-E 3 is being deprecated in May 2026. If you're currently using DALL-E 3 via the API, plan to switch to GPT Image 1.5 or GPT Image 1 Mini.

---

## Option 3: Gemini 2.5 Flash Image / Imagen 4 (via Google AI Studio)

Google's image generation options — excellent quality with a generous free tier.

**Setup:**
1. Go to [aistudio.google.com](https://aistudio.google.com)
2. Sign in with your Google account
3. Select **Gemini 2.5 Flash** (for text-and-image generation) or **Imagen 4** (dedicated image model)
4. Paste the image generation prompts from the Thumbnail Factory directly

**Pricing:**
- **Gemini 2.5 Flash Image** — ~$0.04/image. Includes a generous free tier of 1,500 requests/day.
- **Imagen 4 Fast** — ~$0.02/image. Best value for pure image generation.
- **Imagen 4 Standard** — ~$0.04/image. Higher quality output.
- **Imagen 4 Ultra** — ~$0.06/image. Maximum quality for final production images.

**Quality notes:**
- Gemini 2.5 Flash produces good results for natural scenes, product shots, and food photography
- Like all AI image generators, always add text manually for full control
- Color accuracy can vary — you may need to adjust colors in post
- Imagen 4 excels at photorealistic output and outdoor/landscape scenes

---

## Option 4: No Image Generation — The Canva Path

No API access? No problem. The Thumbnail Factory is just as valuable as a design strategy tool.

**How this works:**
1. The system generates your 3 thumbnail concepts with full visual specs
2. Each concept includes a "Canva/Manual Execution Notes" section
3. Follow those notes to build the thumbnail in Canva (free tier works fine)

**What you get without image generation:**
- Complete composition blueprints (what goes where)
- Exact text overlay copy and font recommendations
- Color palettes with hex codes
- Stock photo search terms for finding the right base images
- Step-by-step Canva assembly instructions

**Recommended Canva features:**
- **Background Remover** — isolate yourself from a photo for face-based thumbnails
- **Magic Resize** — resize to YouTube's 1280x720 thumbnail dimensions
- **Brand Kit** (Pro) — save your channel colors and fonts for consistency
- **Frames and Grids** — for before/after and comparison layouts

**Stock photo sources for base images:**
- Unsplash (free, high quality)
- Pexels (free, good variety)
- Canva's built-in library (free + premium options)

---

## Cost Expectations

Here's what image generation costs look like at different usage levels:

| Usage Level | Images/Month | GPT Image 1 Mini (low) | Imagen 4 Fast | Gemini 2.5 Flash | GPT Image 1.5 (medium) |
|-------------|-------------|------------------------|---------------|------------------|------------------------|
| Light (1 video/week) | 8-12 images | $0.04-0.06 | $0.16-0.24 | $0.32-0.48 | $0.32-0.48 |
| Regular (2-3 videos/week) | 20-30 images | $0.10-0.15 | $0.40-0.60 | $0.80-1.20 | $0.80-1.20 |
| Heavy (daily uploads) | 60-90 images | $0.30-0.45 | $1.20-1.80 | $2.40-3.60 | $2.40-3.60 |

These assume ~3 concept images per thumbnail (generating all 3 concepts to compare). In practice, you'll generate fewer once you learn which archetypes work best for your channel.

**Note:** These costs are for base image generation only. You'll typically generate 1-3 images per video, pick the best one, and finalize it in Canva with text overlays and your own photos composited in. If you're using Gemini 2.5 Flash's free tier (1,500 requests/day), your costs could be $0 for most usage levels.

---

## Tips for Better AI-Generated Thumbnail Images

1. **Always specify "do not include any text"** in your prompts. Add text manually for full control.
2. **Request landscape orientation** (16:9 or 1792x1024) to match YouTube's thumbnail dimensions.
3. **Generate backgrounds separately from subjects.** Create the scene/background with AI, then composite your own face and product photos on top.
4. **Iterate on lighting terms.** "Dramatic side lighting" vs "soft natural lighting" vs "bright studio lighting" produces vastly different results. Experiment to find what matches your brand.
5. **Save prompts that work.** When you get a great result, save that prompt as a template for future thumbnails — just swap out the subject details.
6. **Use AI generation for inspiration, not the final product.** Even with great AI images, the final thumbnail usually needs manual polish in Canva — color correction, text placement, and compositing your own photos.
