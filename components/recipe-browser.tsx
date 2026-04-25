"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Clock, Flame, Search } from "lucide-react";
import { Recipe } from "@/types/recipe";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
  recipes: Recipe[];
};

const mealTypes = ["all", "breakfast", "lunch", "dinner", "snack"];

export function RecipeBrowser({ recipes }: Props) {
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("all");
  const [dietaryTag, setDietaryTag] = useState("all");

  const dietaryTags = useMemo(() => {
    const tags = recipes.flatMap((recipe) => recipe.dietaryTags);
    return ["all", ...Array.from(new Set(tags))];
  }, [recipes]);

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesQuery =
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase());

      const matchesMealType =
        mealType === "all" || recipe.mealType === mealType;

      const matchesDietaryTag =
        dietaryTag === "all" || recipe.dietaryTags.includes(dietaryTag);

      return matchesQuery && matchesMealType && matchesDietaryTag;
    });
  }, [recipes, query, mealType, dietaryTag]);

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-white p-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
          <Input
            placeholder="Search chicken, yogurt, pasta cravings..."
            className="h-12 rounded-2xl pl-11"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {mealTypes.map((type) => (
            <Button
              key={type}
              variant={mealType === type ? "default" : "outline"}
              className="rounded-full capitalize"
              onClick={() => setMealType(type)}
            >
              {type}
            </Button>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {dietaryTags.map((tag) => (
            <Button
              key={tag}
              variant={dietaryTag === tag ? "secondary" : "outline"}
              className="rounded-full"
              onClick={() => setDietaryTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.map((recipe) => (
          <Link key={recipe.slug} href={`/recipes/${recipe.slug}`}>
            <Card className="h-full overflow-hidden rounded-[2rem] transition hover:-translate-y-1 hover:shadow-xl">
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="h-52 w-full object-cover"
              />

              <CardContent className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-bold">{recipe.title}</h2>
                  <Badge className="rounded-full bg-lime-500 text-slate-950">
                    {recipe.volumeScore}/10
                  </Badge>
                </div>

                <p className="line-clamp-2 text-sm text-slate-600">
                  {recipe.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {recipe.dietaryTags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span className="flex items-center gap-1">
                    <Flame className="h-4 w-4" />
                    {recipe.calories} kcal
                  </span>

                  <span>{recipe.protein}g protein</span>

                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {recipe.prepTime} min
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="rounded-[2rem] bg-white p-10 text-center shadow-sm">
          <h3 className="text-xl font-bold">No recipes found</h3>
          <p className="mt-2 text-slate-600">
            Try changing your search or filters.
          </p>
        </div>
      )}
    </div>
  );
}
