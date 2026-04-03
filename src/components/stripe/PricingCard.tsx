"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState } from "react";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  priceId: string;
  mode: "payment" | "subscription";
  badge?: string;
  highlighted?: boolean;
}

export function PricingCard({
  title,
  description,
  price,
  period,
  features,
  priceId,
  mode,
  badge,
  highlighted = false,
}: PricingCardProps) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const endpoint =
        mode === "subscription"
          ? "/api/stripe/subscriptions"
          : "/api/stripe/checkout";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Failed to start checkout");
      }

      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card
      className={`flex flex-col ${highlighted ? "border-primary ring-2 ring-primary" : ""}`}
    >
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          {badge && <Badge variant={highlighted ? "default" : "secondary"}>{badge}</Badge>}
        </div>
        <div className="flex items-end gap-1 mt-2 mb-1">
          <span className="text-4xl font-bold">{price}</span>
          {period && (
            <span className="text-muted-foreground mb-1">/{period}</span>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-primary shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          variant={highlighted ? "default" : "outline"}
          onClick={handleCheckout}
          disabled={loading || !priceId}
          title={!priceId ? "Price not configured" : undefined}
        >
          {loading ? "Redirecting…" : mode === "subscription" ? "Start free trial" : "Buy now"}
        </Button>
      </CardFooter>
    </Card>
  );
}
