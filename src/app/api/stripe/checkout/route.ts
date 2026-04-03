import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const { priceId, customerId } = await request.json();

  if (!priceId) {
    return NextResponse.json({ error: "priceId is required" }, { status: 400 });
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    ...(customerId ? { customer: customerId } : {}),
    success_url: `${appUrl}/pricing?session_id={CHECKOUT_SESSION_ID}&status=success`,
    cancel_url: `${appUrl}/pricing?status=cancelled`,
  });

  return NextResponse.json({ url: session.url });
}
