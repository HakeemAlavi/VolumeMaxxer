import Link from "next/link";
import { ArrowRight, Salad, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAF5] text-slate-950">
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-10 md:py-16">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-lime-500">
              <Salad className="h-5 w-5" />
            </div>
            <span>Volume Maxxing</span>
          </div>

          <Button asChild>
            <Link href="/recipes">Browse recipes</Link>
          </Button>
        </nav>

        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 inline-flex rounded-full border bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              Built for cutting without feeling constantly hungry
            </div>

            <h1 className="max-w-3xl text-5xl font-black tracking-tight md:text-7xl">
              Low-calorie meals that actually fill you up.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Volume Maxxing helps people on a weight loss journey find meals
              that are high in food volume, high in satisfaction, and easier to
              stick to long term.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/recipes">
                  Find filling recipes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="#how-it-works">How it works</Link>
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden rounded-[2rem] border-0 shadow-2xl">
            <CardContent className="p-0">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop"
                alt="Healthy high-volume meal"
                className="h-[420px] w-full object-cover"
              />
            </CardContent>
          </Card>
        </div>

        <section id="how-it-works" className="grid gap-4 md:grid-cols-3">
          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <Search className="mb-4 h-7 w-7 text-lime-600" />
              <h3 className="text-xl font-bold">Search by craving</h3>
              <p className="mt-2 text-slate-600">
                Find meals for breakfast, lunch, dinner, or snacks without
                scrolling through generic diet content.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <Salad className="mb-4 h-7 w-7 text-lime-600" />
              <h3 className="text-xl font-bold">Prioritize fullness</h3>
              <p className="mt-2 text-slate-600">
                Recipes highlight calories, protein, and a volume score so users
                can choose meals that help them stay satisfied.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl">
            <CardContent className="p-6">
              <Sparkles className="mb-4 h-7 w-7 text-lime-600" />
              <h3 className="text-xl font-bold">AI-ready foundation</h3>
              <p className="mt-2 text-slate-600">
                The first version uses curated recipes. Future versions can
                generate meals from ingredients, budget, allergies, and goals.
              </p>
            </CardContent>
          </Card>
        </section>
      </section>
    </main>
  );
}
