// TODO: Stripe — wire to real checkout once payments backend is ready.
// This module is the single integration point for checkout. When Stripe is
// connected: implement createCheckoutSession() to POST to /api/checkout
// (which will create a real Stripe Checkout Session) and return its url.

export interface CheckoutPayload {
  priceId?: string;
  packageSlug?: string;
  marketplaceItemId?: string;
  quantity?: number;
}

export interface CheckoutResult {
  ok: boolean;
  message: string;
  url?: string;
}

export async function createCheckoutSession(
  payload: CheckoutPayload,
): Promise<CheckoutResult> {
  // TODO: Stripe — replace with `await fetch('/api/checkout', { method: 'POST', body: JSON.stringify(payload) })`
  // and return { ok: true, url: data.url } so the client can redirect.
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.warn("TODO: Stripe — wire /api/checkout. Payload:", payload);
  }
  return {
    ok: false,
    message:
      "Checkout will be available soon. Please speak to our team to confirm your subscription.",
  };
}
