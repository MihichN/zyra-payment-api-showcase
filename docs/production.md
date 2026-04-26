# Production Concerns

## Payment Integrity

- Require idempotency keys for invoice creation.
- Treat invoice status as a state machine with terminal states.
- Verify webhook signatures before processing provider events.
- Use database transactions for invoice state changes and audit events.

## Reliability

- Retry provider calls with bounded backoff.
- Reconcile payment status through both webhooks and polling.
- Make expiration jobs safe to re-run.
- Record provider event IDs to avoid double processing.

## Security

- Merchant API keys are hashed at rest.
- Private keys, seed phrases, and RPC credentials stay outside the codebase.
- Do not log raw webhook payloads if they contain sensitive identifiers.
- Scope merchant access to their own invoices only.

## Observability

- Track invoice creation latency, payment confirmation latency, webhook failure rate, and reconciliation lag.
- Alert on duplicate event attempts, provider downtime, and stuck invoices.
