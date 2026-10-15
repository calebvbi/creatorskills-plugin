> Grok Bot edition: This is a fictional worked example for structure only. Use only its stated sample inputs as evidence; any unsupported claim must be omitted or marked as an assumption. Never transfer sample credentials, testimonials, results, quotes or personal experience into a real creator's output.

# Notion Content Dashboard Builder — Worked Examples

## Example 1: Solo YouTuber — Phased Build

### Creator Context

- **Channel:** Budget travel vlogs — Europe backpacker trips under $100/day
- **Subscribers:** 14,000
- **Upload frequency:** 1 long-form video per week, 2 Shorts
- **Current tools:** Google Calendar for upload dates, Notes app for ideas, YouTube Studio for analytics (never reviewed systematically)
- **Pain point:** "I have 60+ ideas in my phone but I never look at them. I just film whatever I feel like each week. I know some videos perform way better than others but I can't tell you why."
- **Notion experience:** Casual — uses it for personal notes, never databases
- **Sponsors:** 2-3 brand deals per year, not enough to need a tracker
- **Team:** Solo

---

### Build Recommendation

Phase 1: Content Calendar + Idea Pipeline (highest impact, lowest complexity)
Phase 2: Analytics Tracker (after 2-4 weeks of using Phase 1)
Phase 3: Brand Asset Library (if thumbnail management becomes a pain)

Skip Sponsor Tracker for now — not enough deal volume to justify it.

---

### Phase 1 Output: Content Calendar + Idea Pipeline

══════════════════════════════════════════
CONTENT DASHBOARD BUILD — Budget Travel YouTube
══════════════════════════════════════════

RECOMMENDED DATABASES:
1. Content Calendar — Because you need to see what's scheduled
2. Idea Pipeline — Because 60 ideas in your phone are worthless if you can't rank them
3. Analytics Tracker — Phase 2, after 2-4 weeks

BUILD PHASE 1

CONTENT CALENDAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Properties:
• Name — Title
• Platform — Select — YouTube Long, YouTube Short, Instagram Reel, Blog
• Status — Select — Idea | Planned | In Production | Scheduled | Published | Archived
• Publish Date — Date
• Days Until Publish — Formula: `dateBetween(prop("Publish Date"), now(), "days")`
• Is Overdue — Formula: `if(and(dateBefore(prop("Publish Date"), now()), prop("Status") != "Published"), "⚠️ Overdue", "")`
• Content Pillar — Multi-select — Budget Tips, Hidden Gems, Packing, Day Trips, Food & Drink
• Effort Estimate — Select — Quick (<2hrs), Medium (half day), Deep (full day+)
• Priority — Select — P0 (must ship), P1 (planned), P2 (backlog)
• Linked Idea — Relation → Idea Pipeline

Views to Create:
1. Weekly Calendar (Calendar view)
   - Filter: Status != Archived
   - Sort: Publish Date ascending
   - Group: Week
   - Properties shown: Name, Platform, Status, Content Pillar

2. Status Board (Board view)
   - Group by: Status
   - Sort: Publish Date
   - Properties shown: Name, Platform, Publish Date, Priority

3. This Week (Table view)
   - Filter: Publish Date within next 7 days AND Status != Published
   - Sort: Priority, Publish Date
   - Properties shown: Name, Days Until Publish, Status, Effort Estimate

4. Overdue (Table view)
   - Filter: Is Overdue = "⚠️ Overdue"
   - Sort: Publish Date
   - Properties shown: Name, Publish Date, Days Until Publish, Status

IDEA PIPELINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Properties:
• Idea Name — Title
• Platform — Select — YouTube Long, YouTube Short, Instagram Reel, Blog
• Format — Select — Vlog, Tutorial, Listicle, Day-in-the-life, Review
• Content Pillar — Multi-select — Budget Tips, Hidden Gems, Packing, Day Trips, Food & Drink
• Status — Select — Raw Idea → Fleshed Out → Approved for Production → Rejected → Saved for Later
• Estimated Views — Select — High, Medium, Low
• Effort — Select — Quick, Medium, Deep
• Source — Select — Audience comment, Trending topic, Competitor gap, Personal idea
• Date Added — Date
• Days Since Added — Formula: `dateBetween(now(), prop("Date Added"), "days")`
• Potential Title — Text
• Notes — Text
• Linked Calendar Item — Relation → Content Calendar

Views to Create:
1. Ready to Build (Table view)
   - Filter: Status = "Fleshed Out"
   - Sort: Estimated Views descending, Effort ascending
   - Properties shown: Idea Name, Platform, Estimated Views, Effort, Potential Title

2. Quick Wins (Table view)
   - Filter: Effort = "Quick" AND Estimated Views = "High"
   - Sort: Date Added
   - Properties shown: Idea Name, Platform, Potential Title, Notes

3. Raw Ideas (Table view)
   - Filter: Status = "Raw Idea"
   - Sort: Date Added descending
   - Properties shown: Idea Name, Source, Date Added, Notes

---

## Example 2: Multi-Platform Creator with Sponsors — Full System

### Creator Context

- **Platforms:** YouTube (2 videos/week), TikTok (5/week), Instagram (3 Reels + 1 carousel/week), weekly newsletter
- **Team:** Solo creator + editor (part-time) + VA (5hrs/week)
- **Sponsors:** 6-8 active brand deals per quarter
- **Pain point:** "I'm missing sponsor deadlines because they're in email threads. I have no visibility into what's performing. My editor doesn't know what's coming. And I keep re-shooting thumbnails because I can't find the old ones."
- **Notion experience:** Power user — comfortable with formulas and relations
- **Revenue streams:** AdSense, sponsorships, affiliate links, digital products

---

### Build Recommendation

Build all 5 databases, but in phases:
- Week 1: Content Calendar + Sponsor Tracker (these solve the biggest pain points)
- Week 2: Idea Pipeline (populate with existing ideas)
- Week 3: Analytics Tracker (start backfilling last month's data)
- Week 4: Brand Asset Library (organize existing assets)

---

### Phase 1 Output: Content Calendar + Sponsor Tracker

══════════════════════════════════════════
CONTENT DASHBOARD BUILD — Multi-Platform Creator
══════════════════════════════════════════

RECOMMENDED DATABASES:
1. Content Calendar — Because your editor needs to see what's coming
2. Sponsor Tracker — Because missed deadlines cost you deals
3. Idea Pipeline — Because you need a place to rank your content ideas
4. Analytics Tracker — Because you need to know what actually works
5. Brand Asset Library — Because you're wasting time re-making thumbnails

BUILD PHASE 1: Content Calendar + Sponsor Tracker

CONTENT CALENDAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Properties:
• Name — Title
• Platform — Select — YouTube, TikTok, Instagram Reel, Instagram Carousel, Newsletter, Blog
• Content Type — Select — Long-form, Short-form, Written, Carousel, Audio
• Status — Select — Idea → Planned → Scripting → Filming → Editing → Review → Scheduled → Published → Archived
• Publish Date — Date
• Days Until Publish — Formula: `dateBetween(prop("Publish Date"), now(), "days")`
• Is Overdue — Formula: `if(and(dateBefore(prop("Publish Date"), now()), prop("Status") != "Published"), "⚠️ Overdue", "")`
• Editor Handoff Date — Date
• Review Needed — Checkbox
• Approved By — Select — Creator, Editor, Both
• Priority — Select — P0 (must ship), P1 (planned), P2 (backlog), P3 (nice to have)
• Effort Estimate — Select — Quick (<2hrs), Medium (half day), Deep (full day+)
• Sponsor Tag — Multi-select — Organic, Branded, Affiliate, Product Mention
• Content Pillars — Multi-select — Lifestyle, Tech, Productivity, Wellness, Finance
• Linked Idea — Relation → Idea Pipeline
• Linked Analytics — Relation → Analytics Tracker
• Linked Sponsor — Relation → Sponsor Tracker
• Thumbnail Status — Select — Not started, Draft, Final, Needs refresh

Views to Create:
1. Weekly Calendar (Calendar view)
   - Filter: Status != Archived
   - Sort: Publish Date
   - Properties shown: Name, Platform, Status, Sponsor Tag

2. Production Board (Board view)
   - Group by: Status
   - Sort: Publish Date
   - Properties shown: Name, Platform, Priority, Thumbnail Status

3. This Week (Table view)
   - Filter: Publish Date within next 7 days AND Status != Published
   - Sort: Priority, Publish Date
   - Properties shown: Name, Platform, Days Until Publish, Status, Thumbnail Status

4. Needs Review (Table view)
   - Filter: Review Needed = checked AND Status != Published
   - Sort: Publish Date
   - Properties shown: Name, Platform, Editor Handoff Date, Approved By

5. Overdue (Table view)
   - Filter: Is Overdue = "⚠️ Overdue"
   - Sort: Publish Date
   - Properties shown: Name, Platform, Publish Date, Days Until Publish

SPONSOR TRACKER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Properties:
• Brand Name — Title
• Status — Select — Pitch Sent → Negotiating → Contract Signed → In Production → Delivered → Paid → Completed → Lost
• Deal Value — Number, $
• Platform — Select — YouTube, TikTok, Instagram, Newsletter, Multi-platform
• Content Type — Select — Dedicated, Integration, Sponsored Series, Affiliate
• Contract Start — Date
• Contract End — Date
• Deliverables — Text
• Deliverable Due Date — Date
• Days Until Due — Formula: `dateBetween(prop("Deliverable Due Date"), now(), "days")`
• Is Urgent — Formula: `if(prop("Days Until Due") <= 7, "🔥 Urgent", "")`
• Contact Name — Text
• Contact Email — Email
• Payment Terms — Select — Net 15, Net 30, Net 60, On Delivery, 50/50
• Payment Status — Select — Pending, Invoiced, Received
• Payment Overdue — Formula: `if(and(prop("Payment Status") == "Pending", dateAfter(now(), prop("Contract End"))), "💸 Payment Overdue", "")`
• Notes — Text
• Linked Content — Relation → Content Calendar
• Rate Card Match — Select — Above rate, At rate, Below rate, Unclear
• Would Work With Again — Checkbox

Views to Create:
1. Active Deals (Table view)
   - Filter: Status NOT IN (Completed, Lost)
   - Sort: Deliverable Due Date
   - Properties shown: Brand Name, Status, Deal Value, Deliverable Due Date, Days Until Due

2. Due This Week (Table view)
   - Filter: Is Urgent = "🔥 Urgent"
   - Sort: Deliverable Due Date
   - Properties shown: Brand Name, Deliverables, Deliverable Due Date, Payment Status

3. Payment Tracking (Table view)
   - Filter: Payment Status != Received
   - Sort: Contract End
   - Properties shown: Brand Name, Payment Status, Payment Overdue, Contract End

4. Negotiating (Board view)
   - Group by: Status
   - Filter: Status IN (Pitch Sent, Negotiating)
   - Properties shown: Brand Name, Deal Value, Contact Name

5. Completed Deals (Table view)
   - Filter: Status = Completed
   - Sort: Contract End descending
   - Properties shown: Brand Name, Deal Value, Would Work With Again, Rate Card Match

---

### Phase 2 Output: Idea Pipeline

IDEA PIPELINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Properties:
• Idea Name — Title
• Platform — Select — YouTube, TikTok, Instagram Reel, Instagram Carousel, Newsletter, Blog
• Format — Select — Tutorial, Reaction, Listicle, Comparison, Vlog, Behind-the-scenes
• Status — Select — Raw Idea → Fleshed Out → Approved for Production → Rejected → Saved for Later
• Content Pillar — Multi-select — Lifestyle, Tech, Productivity, Wellness, Finance
• Estimated Views — Select — High, Medium, Low
• Effort — Select — Quick, Medium, Deep
• Source — Select — Audience comment, Trending topic, Competitor gap, Personal idea, Sponsor request
• Date Added — Date
• Days Since Added — Formula: `dateBetween(now(), prop("Date Added"), "days")`
• ROI Score — Formula:
  ```
  if(
    and(prop("Effort") != "", prop("Estimated Views") != ""),
    concat(
      if(prop("Effort") == "Quick", "3", if(prop("Effort") == "Medium", "2", "1")),
      "-",
      if(prop("Estimated Views") == "High", "3", if(prop("Estimated Views") == "Medium", "2", "1"))
    ),
    ""
  )
  ```
• Notes — Text
• Potential Title — Text
• Linked Calendar Item — Relation → Content Calendar
• Potential Collaboration — Text
• Seasonality — Select — Evergreen, Q1, Q2, Summer, Holiday, Trend

Views to Create:
1. Ready to Build (Table view)
   - Filter: Status = "Fleshed Out"
   - Sort: ROI Score descending
   - Properties shown: Idea Name, Platform, ROI Score, Effort, Estimated Views

2. Quick Wins (Table view)
   - Filter: Effort = "Quick" AND Estimated Views = "High"
   - Sort: Date Added
   - Properties shown: Idea Name, Platform, Potential Title, Notes

3. By Platform (Board view)
   - Group by: Platform
   - Filter: Status != Rejected
   - Properties shown: Idea Name, ROI Score, Status

4. Seasonal Planning (Table view)
   - Group by: Seasonality
   - Sort: Date Added
   - Properties shown: Idea Name, Platform, Seasonality, Notes

5. Idea Graveyard (Table view)
   - Filter: Status = "Rejected"
   - Sort: Date Added descending
   - Properties shown: Idea Name, Platform, Notes

---

### Phase 3 Output: Analytics Tracker

ANALYTICS TRACKER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Properties:
• Name — Title
• Linked Content — Relation → Content Calendar
• Publish Date — Rollup from Content Calendar (min)
• Platform — Select — YouTube, TikTok, Instagram, Newsletter, Blog
• Views (7d) — Number
• Views (30d) — Number
• CTR — Number, %
• AVD — Text
• Engagement Rate — Number, %
• Revenue — Number, $
• Traffic Source — Multi-select — Browse, Search, Suggested, External, Social
• Top Comment — Text
• What Worked — Text
• What to Repeat — Text
• What to Avoid — Text
• Retrospective Date — Date
• Performance Tier — Formula:
  ```
  if(
    prop("Views (30d)") > 50000, "🟢 Hit",
    if(prop("Views (30d)") > 20000, "🟡 Solid",
      if(prop("Views (30d)") > 0, "🔴 Underperformer", "")
    )
  )
  ```

Views to Create:
1. Recent Performance (Table view)
   - Last 10 pieces
   - Sort: Publish Date descending
   - Properties shown: Name, Platform, Views (7d), Views (30d), Performance Tier

2. Top Performers (Table view)
   - Filter: Performance Tier IN ("🟢 Hit", "🟡 Solid")
   - Sort: Views (30d) descending
   - Properties shown: Name, Platform, Views (30d), Performance Tier, What Worked

3. By Pillar (Board view)
   - Group by: Content Pillar (via Content Calendar rollup)
   - Sort: Views (30d) descending
   - Properties shown: Name, Views (30d), Performance Tier

4. Needs Retrospective (Table view)
   - Filter: Retrospective Date = empty
   - Sort: Publish Date
   - Properties shown: Name, Platform, Publish Date, Views (30d)

5. Revenue vs Views (Table view)
   - Sort: Revenue descending
   - Properties shown: Name, Platform, Views (30d), Revenue

---

### Phase 4 Output: Brand Asset Library

BRAND ASSET LIBRARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Properties:
• Asset Name — Title
• Type — Select — Thumbnail, Template, Music, Sound Effect, B-Roll, Brand Kit, Swipe File, Script Template, Thumbnail PSD, Cover Art
• Platform — Multi-select — YouTube, TikTok, Instagram, Newsletter, Blog
• File — Files & Media
• Tags — Multi-select — trending, evergreen, sale, tutorial, lifestyle
• Usage Count — Number
• Last Used — Date
• Performance Note — Select — Used in hit, Used in solid, Used in underperformer, Untested
• Creator — Select — Creator, Editor, VA
• License — Select — Owned, Licensed, Free, Needs Attribution
• Expire Date — Date
• Notes — Text
• Status — Select — Active, Needs Update, Expired, Archived

Views to Create:
1. All Active Assets (Table view)
   - Filter: Status = Active
   - Sort: Last Used descending
   - Properties shown: Asset Name, Type, Platform, Usage Count

2. By Type (Board view)
   - Group by: Type
   - Filter: Status = Active
   - Properties shown: Asset Name, Platform, Usage Count

3. Need Update (Table view)
   - Filter: Status = "Needs Update"
   - Sort: Last Used
   - Properties shown: Asset Name, Type, Last Used, Notes

4. Expiring Soon (Table view)
   - Filter: Expire Date within 30 days
   - Sort: Expire Date
   - Properties shown: Asset Name, Type, License, Expire Date

5. Top Used (Gallery view)
   - Sort: Usage Count descending
   - Filter: Status = Active
   - Properties shown: Asset Name, Type, Usage Count, File

---

## Rollup Logic Across Databases

Relations without rollups are half-useful. Here's how to connect everything:

**Content Calendar → Analytics Tracker:**
- Rollup: "Total Views" — SUM of Analytics Tracker "Views (30d)"
- Rollup: "Performance Tier" — Show original value

**Content Calendar → Sponsor Tracker:**
- Rollup: "Deal Value" — SUM of Sponsor Tracker "Deal Value"
- Rollup: "Payment Status" — Show original value

**Idea Pipeline → Content Calendar:**
- Rollup: "Publish Date" — Show original value (to see when an idea was executed)

**Sponsor Tracker → Content Calendar:**
- Rollup: "Deliverable Due Date" — Show original value (to see sponsor deadlines in the main calendar)

**Brand Asset Library → Content Calendar:**
- Rollup: "Usage Count" — COUNT of Content Calendar items linked to this asset

---

## Maintenance Routine for This Creator

**Weekly (15 minutes, Monday morning):**
- Review "This Week" and "Overdue" views in Content Calendar
- Check "Due This Week" in Sponsor Tracker
- Add new ideas to Idea Pipeline (from comments, trends, personal notes)
- Mark completed items as Published

**Monthly (30 minutes, first Monday):**
- Fill in Analytics Tracker for last month's content (What Worked, What to Repeat)
- Review Idea Pipeline: move stale ideas to "Saved for Later" or "Rejected"
- Check Brand Asset Library for expired licenses
- Review Sponsor Tracker payment status, send follow-ups on overdue payments

**Quarterly (45 minutes):**
- Archive calendar items older than 6 months
- Audit which views are actually being used — delete unused ones
- Check formula accuracy against actual performance numbers
- Add any new properties based on workflow changes (new platform, new team member, etc.)
