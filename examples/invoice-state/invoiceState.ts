export type InvoiceState = "draft" | "awaiting_payment" | "confirming" | "paid" | "expired"
export type InvoiceEvent = "publish" | "tx_seen" | "tx_confirmed" | "expire"

export function transitionInvoice(state: InvoiceState, event: InvoiceEvent): InvoiceState {
  if (state === "paid" || state === "expired") return state

  if (state === "draft" && event === "publish") return "awaiting_payment"
  if (state === "awaiting_payment" && event === "tx_seen") return "confirming"
  if (state === "confirming" && event === "tx_confirmed") return "paid"
  if (event === "expire") return "expired"

  return state
}
