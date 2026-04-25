import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Clock, Dumbbell, Flame, Salad } from "lucide-react";

import { getRecipeBySlug } from "@/lib/recipes";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function RecipeDetailPage({ params }: Props) {
  const { slug } = await params;

  const recipe = await getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F8FAF5] px-6 py-10 text-slate-950">
      <article className="mx-auto max-w-5xl">
        <Link href="/recipes" className="text-sm font-medium text-slate-500">
          ← Back to recipes
        </Link>

        <section className="mt-8 grid gap-8 md:grid-cols-[1fr_0.85fr]">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge className="rounded-full bg-lime-500 text-slate-950">
                Volume score {recipe.volumeScore}/10
              </Badge>

              {recipe.dietaryTags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-full">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              {recipe.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {recipe.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              <Stat
                icon={<Flame className="h-5 w-5" />}
                label="Calories"
                value={`${recipe.calories}`}
              />

              <Stat
                icon={<Dumbbell className="h-5 w-5" />}
                label="Protein"
                value={`${recipe.protein}g`}
              />

              <Stat
                icon={<Clock className="h-5 w-5" />}
                label="Prep time"
                value={`${recipe.prepTime} min`}
              />

              <Stat
                icon={<Salad className="h-5 w-5" />}
                label="Servings"
                value={`${recipe.servings}`}
              />
            </div>
          </div>

          <Card className="overflow-hidden rounded-[2rem] border-0 shadow-xl">
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className="h-full min-h-[360px] w-full object-cover"
            />
          </Card>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <Card className="rounded-[2rem]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Ingredients</h2>

              <ul className="mt-4 space-y-3 text-slate-700">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-500" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem]">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Preparation</h2>

              <ol className="mt-4 space-y-4 text-slate-700">
                {recipe.steps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-500 font-bold text-slate-950">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <Card className="rounded-[2rem] bg-lime-100">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Why it is high-volume</h2>

              <p className="mt-3 leading-7 text-slate-700">
                {recipe.whyHighVolume}
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] bg-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold">Best for</h2>

              <p className="mt-3 leading-7 text-slate-700">{recipe.bestFor}</p>
            </CardContent>
          </Card>
        </section>

        {recipe.allergens.length > 0 && (
          <section className="mt-6">
            <Card className="rounded-[2rem] border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold">Allergen note</h2>

                <p className="mt-2 text-slate-700">
                  Contains: {recipe.allergens.join(", ")}
                </p>
              </CardContent>
            </Card>
          </section>
        )}
      </article>
    </main>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-4 shadow-sm">
      <div className="mb-2 text-lime-600">{icon}</div>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-xl font-black">{value}</p>
    </div>
  );
}
