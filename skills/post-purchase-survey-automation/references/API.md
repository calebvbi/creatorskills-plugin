# Survey API Contract Proposal

These routes are conceptual names for a future implementation. They are not advertised CreatorSkills endpoints. Do not call a production host to test them. No implementation or authentication middleware is included.

## Schedule an invitation

Proposed internal operation: POST /surveys/schedule.

Require an authenticated trusted service or authorized operator. Accept a purchase reference and approved program version, not an arbitrary email address or user ID. Resolve recipient and completed purchase server-side, verify eligibility and permission, check suppression and validate delay bounds. Use a unique program-and-purchase key. Return an opaque schedule reference and scheduled state; a repeat request returns the existing schedule.

Reject unauthenticated, unauthorized, cross-user, missing, incomplete or refunded/ineligible purchases. A conflict between the idempotency key and request content must fail rather than silently selecting another recipient.

## Read an invitation and submit feedback

Proposed public operations: GET /survey and POST /survey/respond, carrying a scoped invitation token through an implementation chosen to avoid logging and referrer leaks.

Require a cryptographically random, scoped, expiring token and verify its stored hash. A survey ID alone is insufficient authorization. Before verification return no purchase or recipient details. On acceptance allow only an integer score 0–10, an allowlisted usage enum and bounded optional text. Enforce body-size and rate limits. Escape output; never render submitted HTML.

Atomically consume the invitation and store one response. Replay returns an appropriate generic already-used result without issuing another coupon or email. Expired and malformed tokens fail closed. A valid response remains saved if optional incentive issuance fails.

## Read analytics

Proposed internal operation: GET /surveys/analytics.

Authenticate and authorize the requested program and date range. Default to aggregate counts and redacted themes. Do not expose customer emails or raw feedback through public endpoints. Enforce tenant isolation, retention rules and export access. Return denominator definitions and data freshness alongside metrics.

## Dispatch and provider events

The worker must claim a due job once and recheck suppression. Provider requests use stable idempotency keys. A valid signed delivery event can update accepted/delivered/bounced states; duplicates are harmless and events for unknown messages are rejected or quarantined. Missing signing secrets disable event acceptance. Verify provider-specific signature and replay requirements using current official documentation.

## Errors and audit record

Distinguish authentication, authorization, validation, conflict, rate-limit, transient provider and configuration failures. Public responses must not reveal whether a particular customer exists. Logs contain internal references and error categories, never raw tokens, secrets, payment details or unrestricted feedback.

The implementation acceptance suite must prove each rejection and idempotency condition with synthetic identities and sandbox providers before production use.
