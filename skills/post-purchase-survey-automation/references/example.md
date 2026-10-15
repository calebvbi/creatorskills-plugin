# Worked Example: A Survey Plan, Not a Deployment

## Synthetic creator input

A creator sells a digital editing guide. They want a short feedback survey seven days after eligible completed purchases, one optional reminder after another week, and no incentive for the first test. Their implementation team uses an email provider, but no current provider capability has been checked. No customer records or credentials are supplied. The request is for a plan only.

## Proposed brief

Purpose: identify confusing guide sections. Scope: a small cohort selected by the creator after confirming eligibility and suppression rules. Delay: seven days, a proposed starting point. Reminder: optional once, only for unanswered, unexpired invitations and eligible recipients. No discount is configured or promised. Retention and jurisdiction review remain open decisions.

## Survey draft

1. How likely are you to recommend the editing guide to someone with a similar need? Integer 0–10.
2. Used successfully / Used with difficulties / Not used yet / Not applicable.
3. Which section should we clarify? Optional. Please do not include private account or payment details.

## Implementation handoff

The trusted purchase event resolves the recipient server-side. A unique program-and-purchase key schedules one invitation. An expiring random token authorizes the response; the survey ID alone does not. The dispatch worker checks suppression before sending and uses a stable idempotency key. Provider acceptance and confirmed delivery are separate states. Invalid tokens, missing secrets and uncertain provider outcomes fail closed or enter reconciliation.

Before any real send, the team must verify the provider contract, implement and test the design, approve the exact message and recipient selection, and demonstrate that duplicate jobs do not send duplicate messages. No endpoint was created or called during this example.

## Synthetic measurement exercise

For teaching, assume 100 delivered invitations and 20 valid responses: 12 promoters, 5 passives and 3 detractors. Response rate is 20%; NPS is 45. Five respondents identify a confusing export step; that is 5 of the 20 respondents, not proof that 25% of all purchasers had the issue.

Proposed next action: review the export section with those comments, draft a clearer example and test whether later respondents report fewer problems. Cohort mix and response selection may differ, so a before/after difference alone would not prove the edit caused improvement. Revenue impact is unknown.
