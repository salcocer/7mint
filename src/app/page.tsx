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
import { Zap, Palette, Code2, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Next.js 15 App Router",
    description:
      "Built on the latest Next.js with the App Router for file-based routing, server components, and streaming.",
    badge: "Framework",
  },
  {
    icon: Palette,
    title: "shadcn/ui Components",
    description:
      "Beautifully designed, accessible components built with Radix UI and Tailwind CSS. Copy and paste into your apps.",
    badge: "UI Library",
  },
  {
    icon: Code2,
    title: "TypeScript & TailwindCSS",
    description:
      "Full TypeScript support with TailwindCSS v4 and PostCSS for a modern, type-safe development experience.",
    badge: "DX",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl">7mint</span>
            <Badge variant="secondary">Template</Badge>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Docs
            </Button>
            <Button variant="ghost" size="sm">
              GitHub
            </Button>
            <Button size="sm">Get Started</Button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero */}
        <section className="text-center mb-20">
          <Badge className="mb-4" variant="outline">
            Next.js + shadcn/ui + TypeScript + TailwindCSS
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Your next project starts here
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A production-ready template with Next.js 15, shadcn/ui, TypeScript,
            and TailwindCSS v4. Everything you need to build modern web apps.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="gap-2">
              Start Building <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View on GitHub
            </Button>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((feature) => (
            <Card key={feature.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">{feature.badge}</Badge>
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1" />
              <CardFooter>
                <Button variant="ghost" size="sm" className="gap-1 px-0">
                  Learn more <ArrowRight className="h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Ready to build?</CardTitle>
              <CardDescription className="text-base">
                Clone this template and start building your next great idea in
                minutes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-md px-4 py-3 font-mono text-sm text-left">
                <span className="text-muted-foreground">$ </span>
                npx create-next-app@latest my-app --example with-shadcn-ui
              </div>
            </CardContent>
            <CardFooter className="justify-center gap-3">
              <Button>Deploy to Vercel</Button>
              <Button variant="outline">Read the Docs</Button>
            </CardFooter>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            Built with Next.js, shadcn/ui, TypeScript &amp; TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
}
