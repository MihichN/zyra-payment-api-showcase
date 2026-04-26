import { describe, expect, it } from "vitest"
import { transitionInvoice } from "../examples/invoice-state/invoiceState"

describe("transitionInvoice", () => {
  it("moves a draft invoice into awaiting payment when published", () => {
    expect(transitionInvoice("draft", "publish")).toBe("awaiting_payment")
  })

  it("moves an invoice through the confirmation path", () => {
    const confirming = transitionInvoice("awaiting_payment", "tx_seen")
    const paid = transitionInvoice(confirming, "tx_confirmed")

    expect(confirming).toBe("confirming")
    expect(paid).toBe("paid")
  })

  it("keeps terminal states immutable", () => {
    expect(transitionInvoice("paid", "expire")).toBe("paid")
    expect(transitionInvoice("expired", "tx_confirmed")).toBe("expired")
  })

  it("ignores invalid transitions instead of inventing state", () => {
    expect(transitionInvoice("draft", "tx_confirmed")).toBe("draft")
  })
})
