# ZyraPayments API Showcase

Public-safe showcase of a payment API for a crypto payment platform. The private version manages invoices, payment status, merchant integration, and provider interactions.

## Highlights

- Invoice lifecycle model.
- Payment status transitions.
- Merchant-facing API boundary.
- Provider adapter isolation in the private implementation.
- MySQL-backed persistence in the private implementation.

## Tech Stack

- Node.js, Express.
- MySQL and HTTP integrations in the private implementation.
- Environment-driven runtime configuration.

## Included

- `docs/architecture.md` - API boundary and lifecycle.
- `docs/openapi.yaml` - public-safe API contract.
- `docs/adr/` - architecture decision records for lifecycle and idempotency.
- `docs/production.md` - payment integrity, reliability, security, and observability notes.
- `docs/roadmap.md` - scaling and delivery roadmap.
- `examples/invoice-state/invoiceState.ts` - safe invoice state machine example.
- `tests/` - unit tests for invoice lifecycle edge cases.
- `.github/workflows/ci.yml` - CI pipeline for typecheck and tests.

## Engineering Quality

```bash
npm install
npm run typecheck
npm test
```

## Not Included

Webhook signing, merchant secrets, private keys, RPC credentials, real schemas, production logs, and provider adapters are excluded.
