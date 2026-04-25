import type { WithId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import type { Recipe } from "@/types/recipe";
import { recipes as fallbackRecipes } from "@/data/recipes";

const dbName = process.env.MONGODB_DB || "volume-maxxer-db";

type RecipeDocument = Recipe;

function serializeRecipe(recipe: WithId<RecipeDocument>): Recipe {
  const { _id, ...rest } = recipe;
  return rest;
}

export async function getRecipes(): Promise<Recipe[]> {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);

    const recipes = await db
      .collection<RecipeDocument>("recipes")
      .find({})
      .sort({ volumeScore: -1 })
      .toArray();

    if (recipes.length === 0) {
      console.warn("MongoDB returned no recipes. Using fallback recipe data.");
      return fallbackRecipes;
    }

    return recipes.map(serializeRecipe);
  } catch (error) {
    console.error("Failed to fetch recipes from MongoDB:", error);
    return fallbackRecipes;
  }
}

export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);

    const recipe = await db
      .collection<RecipeDocument>("recipes")
      .findOne({ slug });

    if (!recipe) {
      return fallbackRecipes.find((recipe) => recipe.slug === slug) || null;
    }

    return serializeRecipe(recipe);
  } catch (error) {
    console.error("Failed to fetch recipe from MongoDB:", error);
    return fallbackRecipes.find((recipe) => recipe.slug === slug) || null;
  }
}
