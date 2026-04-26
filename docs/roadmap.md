# Roadmap

## Near Term

- Add webhook signature verification examples with fake keys.
- Add OpenAPI examples for idempotency conflicts.
- Add integration tests around invoice lifecycle with an in-memory repository.

## Scaling

- Move provider polling into a queue-backed worker.
- Partition payment events by merchant or time period as volume grows.
- Add outbox pattern for reliable merchant webhook delivery.

## Leadership Notes

- Payment changes require rollout plans and rollback paths.
- Keep provider adapters isolated from invoice lifecycle rules.
- Document incident playbooks for delayed confirmations and provider outages.
