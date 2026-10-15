# Post-Purchase Survey Automation: Design Blueprint

Produce a survey, message drafts, system design and acceptance checklist for a creator's post-purchase feedback program. This edition does not install a service, issue discounts, send messages or connect to production. It contains no deployable endpoint handlers. Start with the creator's desired output and load only the relevant supporting guide.

## 1. Establish the program

Collect the product, purpose, eligible purchase type, desired delay, existing email provider and discount policy if any. Ask about recipient consent and suppression rules, jurisdiction, data retention and who may access responses. Do not request API keys, customer exports or payment details in chat. Work with redacted examples or a small synthetic fixture. A seven-day delay is a proposed starting experiment, not a universal best time.

Record decisions in a brief:

- Purpose and decision the feedback will inform.
- Eligibility rule, delay and reminder policy.
- Questions, optional fields and whether responses are anonymous or linked.
- Incentive, if approved, with restrictions and expiry.
- Owner, permitted recipients, retention schedule and success measures.

Separate proposed rules from confirmed configuration. Check official provider documentation before specifying scheduling, rate limits, coupon capabilities or platform requirements. No paid service is required to use this planning skill.

## 2. Draft a short survey

Use one recommendation question, one usage question and one optional open question. The recommendation question may use an integer from 0 through 10. Label it NPS only when using the standard recommendation question and scoring method. A purchase satisfaction rating is a different measure.

Suggested questions:

1. How likely are you to recommend [product] to someone with a similar need? 0 to 10, with endpoint labels.
2. Which best describes your experience? Used successfully / Used with difficulties / Not used yet / Not applicable.
3. What should we improve or clarify? Optional; ask respondents not to include private or payment information.

Offer a relevant follow-up question only when it changes a product decision. Do not force positive feedback to receive an incentive. Keep negative and incomplete responses visible in aggregate reporting.

## 3. Specify a secure lifecycle

Use these conceptual records, with fields minimized for the purpose:

| Record | Important fields and constraints |
|---|---|
| Survey schedule | Internal ID, verified purchase ID, eligible recipient reference, status, due time, suppression state; unique program-and-purchase key |
| Response invitation | Hash of a random token, expiry, survey reference, consumed state; token is not a user ID |
| Response | Survey reference, integer score, allowlisted usage status, bounded optional text; one accepted response per invitation |
| Delivery attempt | Provider idempotency key, provider message ID, attempted/accepted/delivered timestamps, error classification |
| Incentive | Approved offer version, provider-issued identifier if successfully created, redemption constraints, issued/failed state |

Suggested transitions are proposed → eligible → scheduled → sending → provider-accepted → delivered. Suppressed, expired and failed are explicit outcomes. Provider acceptance is not proof of delivery or a response. A response can be accepted only with a valid, unexpired invitation or an authenticated owner flow.

Before scheduling, authenticate the trusted caller and resolve the completed purchase server-side. Confirm ownership and eligibility. Never trust a caller-supplied userId to choose an email recipient. Queue the intended event once, with an idempotent program-and-purchase key. Queue creation and provider submission require retry-safe coordination.

For a public response form, use a random, scoped, expiring bearer invitation. Store only its hash. Validate it before exposing survey details or accepting a response. Bound every input; reject fractional scores, non-finite values, unknown enums and oversized text. Rate limit the public surface. Consume the token and create the response atomically. A duplicate request must not issue another incentive or message.

A provider secret must be configured through the deployment platform's secret manager. Missing configuration disables the operation. Never compare a request against a string built from an undefined secret. Avoid placing invitations in logs or analytics URLs. Redact sensitive response text from error logs and escape user-controlled text in email and web rendering.

## 4. Design delivery and recovery

Choose one scheduling owner: an application queue or a documented provider scheduler. Do not combine both without a single documented delivery owner. Recheck suppression and eligibility immediately before dispatch. Claim a job atomically, use a stable provider idempotency key, and distinguish failed, accepted and confirmed-delivered states. Retries need backoff and a cap. If the provider outcome is uncertain, reconcile before resending.

A reminder is a separate proposed message. It needs a confirmed reminder policy, a still-unanswered invitation, current recipient eligibility and its own idempotency key. Cancellation or a suppression event prevents subsequent messages. Ask the operator to approve exact message text and recipient selection before enabling any external sending.

Incentives are optional. A local string is not a redeemable discount. An implementation must successfully create or reference an approved provider offer, apply the intended customer and usage restrictions, and record its provider ID. Do not promise a code until issuance succeeds. Keep retries separate from response acceptance so a provider outage does not lose feedback. Existing customer entitlements and purchase terms remain unchanged.

## 5. Measure without claiming causality

Report invitations eligible, messages accepted and delivered, valid responses, response rate with its explicit denominator, NPS with counts, usage categories, redacted themes, issued incentives and redemptions. Separate unique people from delivery attempts. State the reporting window and incomplete observations.

Coupon-linked sales are attributed sales, not proven incremental sales. Estimate incremental contribution only with a defensible comparison and complete costs. Do not call gross revenue divided by discounts profit or ROI. See ANALYTICS.md for formulas and limitations.

## 6. Deliver the plan

Return the brief, survey, initial and optional reminder drafts, lifecycle diagram or table, endpoint contract outline, measurement plan, failure cases and approval checklist. Assign proposed owners and dependencies without saying anything was deployed. A handoff must list which facts were supplied, which decisions remain open and which checks a qualified implementer must pass.

Before launch, require isolated tests for unauthorized scheduling, cross-user purchase access, invalid/expired/replayed tokens, duplicate sends, concurrent workers, suppression, missing secrets, provider timeout, incentive failure and correct metrics. Production deployment and real customer messages are separate authorized tasks. API.md and SETUP.md describe that future work; they are not working endpoints.
