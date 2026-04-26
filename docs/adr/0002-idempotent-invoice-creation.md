# ADR 0002: Idempotent Invoice Creation

## Status

Accepted

## Context

Merchant systems retry requests after network failures. Without idempotency, retries can create duplicate invoices for the same order.

## Decision

Require an `Idempotency-Key` header on invoice creation and bind it to merchant ID plus request hash.

## Consequences

- Safe retries become possible for merchants.
- Conflicting payloads with the same key return a deterministic conflict.
- The API needs retention and cleanup rules for idempotency records.
