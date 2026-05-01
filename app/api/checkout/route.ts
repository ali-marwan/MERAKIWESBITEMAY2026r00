import { NextResponse } from "next/server";

// TODO: Stripe — replace this stub with a real Stripe Checkout Session creator.
// 1. Read env vars: STRIPE_SECRET_KEY, NEXT_PUBLIC_SITE_URL
// 2. Parse the body (priceId, packageSlug, marketplaceItemId, quantity)
// 3. Create a Checkout Session: stripe.checkout.sessions.create({ ... })
// 4. Return { url: session.url } so the client can redirect.
// 5. Add a paired /api/stripe/webhook route to handle subscription lifecycle events.

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      message:
        "Checkout will be available soon. Please speak to our team to confirm your subscription.",
    },
    { status: 501 },
  );
}

export async function GET() {
  return NextResponse.json(
    { ok: false, message: "Method not allowed" },
    { status: 405 },
  );
}
