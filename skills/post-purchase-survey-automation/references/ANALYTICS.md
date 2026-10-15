# Survey Measurement Plan

Define the reporting window and cohort before calculating. Track unique invitations separately from send attempts. Use consistent timezone and date boundaries; overlapping periods are not independent replications.

## Dashboard fields

| Measure | Definition |
|---|---|
| Eligible invitations | Unique purchases satisfying the approved program rules |
| Provider accepted | Unique invitations with a recorded provider acceptance |
| Delivered | Unique invitations with confirmed delivery events, if available |
| Valid responses | Accepted responses after token and input validation |
| Response rate | Valid responses divided by the stated eligible or delivered denominator |
| NPS | Percentage scoring 9–10 minus percentage scoring 0–6; scores 7–8 are passives |
| Usage mix | Each allowed response category divided by valid responses |
| Incentives issued | Successfully issued provider offers, not generated local strings |
| Redemption rate | Unique redeemed offers divided by issued offers in a comparable eligibility window |
| Coupon-linked sales | Observed sales associated with the offers under a stated attribution rule |

Report counts alongside rates. A zero denominator produces not available, not 0%. Late delivery or response events can change a cohort, so show data freshness and follow-up maturity. Do not compare a seven-day cohort against an incomplete one-day cohort as if exposure were equal.

## Financial interpretation

Coupon-linked sales do not establish incremental sales. People might have purchased without the survey. If a valid comparison or experiment exists, estimate incremental contribution using the relevant net revenue, variable fulfillment costs, discounts, refunds, provider fees and incremental program costs. Avoid double-counting discounts already included in net revenue.

A contribution ROI scenario is (incremental contribution before program cost minus program cost) divided by program cost. State every input and attribution assumption. If incrementality, margins or costs are missing, report them as unknown and omit ROI. A zero program-cost denominator makes ROI undefined. Never substitute gross revenue divided by discount cost and call it profitability.

## Synthetic calculation example

Assume 100 delivered invitations, 20 valid responses: 12 promoters, 5 passives and 3 detractors. Response rate is 20/100 = 20%. NPS is (12/20 − 3/20) × 100 = 45. Assume 20 successfully issued offers and 4 redemptions; redemption rate is 20%. These are a teaching fixture, not CreatorSkills results or benchmarks.

If those 4 orders have $100 gross value and $15 total discounts, pre-refund revenue is $85. Costs and incrementality are unknown, so profitability and ROI are unknown. Do not report $85 as profit.

## Decisions and experiments

Group optional feedback into themes, keep examples redacted and label the reviewed sample. Do not generalize a few comments to all customers. Propose one change such as question wording or delivery delay, with an eligibility cohort, outcome, guardrail and observation window. Incentives may change who responds; report that selection limitation. A higher response rate alone does not prove better feedback or customer loyalty.
