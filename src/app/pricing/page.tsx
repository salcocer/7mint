import { PricingCard } from "@/components/stripe/PricingCard";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    title: "Starter",
    description: "Perfect for individuals and small side projects.",
    price: "$9",
    period: "mo",
    badge: "Popular",
    highlighted: false,
    mode: "subscription" as const,
    priceId: process.env.STRIPE_PRICE_ID_STARTER ?? "",
    features: [
      "Up to 3 projects",
      "5 GB storage",
      "Email support",
      "14-day free trial",
    ],
  },
  {
    title: "Pro",
    description: "For growing teams that need more power.",
    price: "$29",
    period: "mo",
    badge: "Best value",
    highlighted: true,
    mode: "subscription" as const,
    priceId: process.env.STRIPE_PRICE_ID_PRO ?? "",
    features: [
      "Unlimited projects",
      "50 GB storage",
      "Priority support",
      "Advanced analytics",
      "14-day free trial",
    ],
  },
  {
    title: "Lifetime",
    description: "One-time payment. Own it forever.",
    price: "$199",
    period: undefined,
    badge: "One-time",
    highlighted: false,
    mode: "payment" as const,
    priceId: process.env.STRIPE_PRICE_ID_ONE_TIME ?? "",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Lifetime updates",
      "Priority support",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section className="text-center mb-14">
          <Badge className="mb-4" variant="outline">
            Stripe-powered payments
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Start with a 14-day free trial. No credit card required.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </section>
      </main>
    </div>
  );
}
