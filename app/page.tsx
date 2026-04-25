import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Flame,
  Salad,
  Search,
  ShieldCheck,
  Sparkles,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dcfce7,transparent_35%),linear-gradient(180deg,#f8faf5,#ffffff)] text-slate-950">
      <section className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-8 md:py-12">
        <nav className="flex items-center justify-between rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
          <Link href="/" className="flex items-center gap-2 font-black">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-sm">
              <Salad className="h-5 w-5" />
            </div>
            <span>Volume Maxxing</span>
          </Link>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              asChild
              className="hidden rounded-full sm:inline-flex"
            >
              <Link href="/ai-builder">AI brief</Link>
            </Button>
            <Button
              asChild
              className="rounded-full bg-slate-950 text-white hover:bg-slate-800"
            >
              <Link href="/recipes">Browse recipes</Link>
            </Button>
          </div>
        </nav>

        <div className="grid items-center gap-10 md:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Badge className="mb-5 rounded-full bg-emerald-100 px-4 py-2 text-emerald-800 hover:bg-emerald-100">
              Built for cutting without feeling constantly hungry
            </Badge>

            <h1 className="max-w-4xl text-5xl font-black tracking-[-0.05em] md:text-7xl">
              Low-calorie meals that still feel like a lot of food.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Volume Maxxing helps people on a weight loss journey find meals
              that are high in volume, high in satisfaction, and easier to stick
              to long term.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="rounded-full bg-emerald-500 font-bold text-slate-950 hover:bg-emerald-400"
              >
                <Link href="/recipes">
                  Find filling recipes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border-slate-300 bg-white"
              >
                <Link href="/ai-builder">
                  Build an AI recipe brief
                  <Sparkles className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              <MiniStat value="430" label="sample kcal" />
              <MiniStat value="48g" label="protein" />
              <MiniStat value="9/10" label="volume score" />
            </div>
          </div>

          <Card className="overflow-hidden rounded-[2.5rem] border-0 bg-white shadow-2xl">
            <CardContent className="p-3">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop"
                  alt="Healthy high-volume meal"
                  className="h-[430px] w-full object-cover"
                />
              </div>

              <div className="grid gap-3 p-4 sm:grid-cols-3">
                <PreviewMetric icon={<Flame />} label="Calories" value="430" />
                <PreviewMetric
                  icon={<Utensils />}
                  label="Protein"
                  value="48g"
                />
                <PreviewMetric icon={<Salad />} label="Volume" value="9/10" />
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            icon={<Search className="h-7 w-7" />}
            title="Search by craving"
            text="Find meals for breakfast, lunch, dinner, or snacks without scrolling through generic diet content."
          />
          <FeatureCard
            icon={<Salad className="h-7 w-7" />}
            title="Prioritize fullness"
            text="Recipes highlight calories, protein, and a volume score so users can choose meals that help them stay satisfied."
          />
          <FeatureCard
            icon={<Sparkles className="h-7 w-7" />}
            title="AI-ready workflow"
            text="The AI brief builder turns ingredients, goals, allergies, and budget into a safer recipe-generation prompt."
          />
        </section>

        <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <Card className="rounded-[2rem] bg-slate-950 text-white shadow-xl">
            <CardContent className="p-8">
              <Badge className="rounded-full bg-emerald-400 text-slate-950 hover:bg-emerald-400">
                Product logic
              </Badge>
              <h2 className="mt-5 text-3xl font-black tracking-tight">
                How the volume score works
              </h2>
              <p className="mt-3 leading-7 text-slate-300">
                In this prototype, volume score is a simple product signal. It
                rewards meals that combine low calorie density, lean protein,
                vegetables, water-rich ingredients, fiber, and expected satiety.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Large serving size for calories",
              "Lean protein included",
              "Vegetables or water-rich foods",
              "High-volume swaps used",
              "Simple prep for adherence",
              "Calories treated as estimates",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-3xl border bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                <span className="text-sm font-medium text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-[2rem] border bg-white p-6 shadow-sm md:grid-cols-3">
          <div>
            <ShieldCheck className="mb-3 h-7 w-7 text-emerald-600" />
            <h2 className="text-2xl font-black">Prototype limits</h2>
          </div>
          <p className="text-sm leading-6 text-slate-600">
            Recipes are curated and nutrition values are estimates. The AI brief
            helps with ideation, but final calories and macros should be checked
            with a nutrition tracker.
          </p>
          <p className="text-sm leading-6 text-slate-600">
            I deliberately left out user accounts, full CRUD, and automatic
            medical or allergy advice because those require stronger validation
            and safety controls.
          </p>
        </section>
      </section>
    </main>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border bg-white/80 p-4 shadow-sm">
      <p className="text-2xl font-black">{value}</p>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </p>
    </div>
  );
}

function PreviewMetric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl bg-slate-50 p-4">
      <div className="mb-2 h-5 w-5 text-emerald-600">{icon}</div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-lg font-black">{value}</p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Card className="rounded-[2rem] border-slate-200 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-6">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          {icon}
        </div>
        <h3 className="text-xl font-black">{title}</h3>
        <p className="mt-2 leading-7 text-slate-600">{text}</p>
      </CardContent>
    </Card>
  );
}
