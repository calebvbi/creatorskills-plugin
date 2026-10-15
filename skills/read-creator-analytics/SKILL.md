---
name: read-creator-analytics
description: Interpret supplied creator analytics, check comparable periods and denominators, and propose a measurable content experiment. Use for channel performance reviews and growth-stall diagnosis.
---

# Read creator analytics

Work from supplied exports or an explicitly connected analytics source. State the platform, date range, timezone if available, metric definitions, and data gaps. Do not pretend to have account access.

Check comparability before calculating change. Identify partial periods, overlapping cohorts, unequal durations, missing rows, changed metric definitions, and differences in published-content volume. Do not call overlapping periods an independent replication. Do not pool overlapping cohorts. A zero or missing baseline cannot support percentage growth.

Calculate counts and rates with their actual denominators. Show the arithmetic for each recommendation-driving metric. Distinguish percentage-point change from relative percent change. If raw rows are available, use a calculation tool and retain a compact result table. With a tiny dataset, state the limits rather than implying statistical significance.

Separate three kinds of statement:

- **Observed:** directly present in the data or calculated from it.
- **Possible explanation:** plausible but not established by the data.
- **Next test:** an action that could distinguish explanations.

Recommend at most three actions, ordered by the evidence and creator's capacity. For the first action, specify the content change, comparison, measurement window, success criterion, and a stop condition. Let the user choose an ambitious target; do not invent an industry benchmark.

Do not infer that a viewer saw a particular link from a general page-scroll event. Do not attribute a change to a title or thumbnail without controlling or acknowledging other changes. Missing input means the diagnosis is incomplete; return the useful observed portion plus the exact export needed next.
