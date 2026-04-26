# ADR 0001: Invoice Lifecycle as a State Machine

## Status

Accepted

## Context

Payment systems become fragile when invoice state is represented by many independent booleans. Webhooks, polling, manual reconciliation, and expiration jobs can race and produce inconsistent state.

## Decision

Represent invoice status as an explicit state machine with terminal states.

## Consequences

- Invalid transitions are ignored or rejected deliberately.
- Webhook and polling updates can share the same transition logic.
- Terminal states such as `paid` and `expired` cannot be overwritten by late events.
- The lifecycle is easier to test, document, and reason about during incidents.
