# Architecture

```text
HTTP Routes -> Invoice Service -> Repository
                  |
                  v
            Provider Adapter
                  |
                  v
          Webhook/Polling Updates
```

## Notes

- The API models invoices as a lifecycle with explicit transitions.
- Provider-specific logic is isolated behind adapters.
- Routes stay thin and delegate validation/business rules to services.
- Webhook and polling updates converge into the same state transition layer.

## Sequence: Invoice Payment

```mermaid
sequenceDiagram
  participant Merchant
  participant API
  participant Repository
  participant Provider
  participant Checkout

  Merchant->>API: POST /v1/invoices
  API->>Repository: Persist invoice + idempotency key
  API-->>Merchant: Invoice response
  Checkout->>API: GET /v1/invoices/{id}
  API-->>Checkout: Awaiting payment
  Provider->>API: Webhook transaction_seen
  API->>Repository: Transition to confirming
  Provider->>API: Webhook transaction_confirmed
  API->>Repository: Transition to paid
```
