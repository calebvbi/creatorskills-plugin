# Survey Implementation Handoff

This guide prepares an implementation task. It does not supply deployable code, migrations or existing CreatorSkills API routes.

## Preparation

1. Confirm the program brief, message drafts, audience eligibility, suppression rules, retention period and approved incentive terms. Obtain authorization for the eventual deployment and exact send scope.
2. Choose an isolated development environment, synthetic customer fixtures and provider sandbox/test facilities. Do not use production credentials or customer data for initial development.
3. Check current official email and commerce provider documentation for scheduling, signatures, idempotency, rate limits, offer restrictions and delivery webhooks. Record links and verification dates.
4. Configure secrets only in the approved secret manager. Use least-privilege credentials and make missing configuration fail closed. This skill never needs their values.

## Implementation sequence

- Implement authenticated purchase resolution and ownership checks before any scheduling operation.
- Add a unique program-and-purchase schedule key and atomic state transitions.
- Implement expiring random invitations, hashed storage, single-use response acceptance and bounded input validation.
- Implement an idempotent dispatch worker with one scheduling owner. Separate scheduled, provider-accepted and delivered states.
- Add suppression checks, cancellation and capped retries. Reconcile uncertain provider outcomes before another send.
- Implement incentive issuance only if approved. Record the provider-issued offer ID and restrictions. Never email an invented local code.
- Add authorized aggregate analytics and a retention/deletion procedure.

## Required negative tests

| Case | Expected result |
|---|---|
| Unauthenticated or cross-user schedule request | Rejected; no queue entry or email |
| Duplicate purchase event | One invitation |
| Invalid, expired or reused invitation | No new response, reward or message |
| Two workers claim one job | One provider submission |
| Missing provider or signing secret | Disabled operation, clear internal error |
| Suppressed recipient or cancelled invitation | No dispatch |
| Provider timeout with uncertain outcome | Reconcile before retry |
| Incentive provider fails | Response retained; no redeemable-code claim |
| Oversized or HTML-containing feedback | Bounded validation; safe text rendering |
| Cross-tenant analytics request | Rejected without data disclosure |

## Launch evidence

A qualified implementer must provide passing sandbox tests, provider IDs for observed test sends, verified suppression behavior and an exact deployment identity. Review actual checkout and incentive behavior separately. Start only the approved cohort, observe delivery events and keep a tested disable switch. Queue acceptance does not prove delivery, customer satisfaction or revenue impact.

Do not mark this checklist complete from reading the blueprint. No service is installed by this plugin.
