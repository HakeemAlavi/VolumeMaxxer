import Link from "next/link";
import { getRecipes } from "@/lib/recipes";
import { RecipeBrowser } from "@/components/recipe-browser";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function RecipesPage() {
  const recipes = await getRecipes();

  return (
    <main className="min-h-screen bg-[#F8FAF5] px-6 py-10 text-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Link href="/" className="text-sm font-medium text-slate-500">
              ← Back to home
            </Link>

            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              Recipe browser
            </h1>

            <p className="mt-3 max-w-2xl text-slate-600">
              Browse meals designed around the core cutting principle: high food
              volume, manageable calories, and enough protein to stay satisfied.
            </p>
          </div>

          <Button asChild>
            <Link href="/">About Volume Maxxing</Link>
          </Button>
        </div>

        <RecipeBrowser recipes={recipes} />
      </div>
    </main>
  );
}
