import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <section className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            A production-ready video player template
          </h1>
        </section>
      </main>
    </div>
  );
}
