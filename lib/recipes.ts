import type { WithId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import type { Recipe } from "@/types/recipe";

const dbName = process.env.MONGODB_DB || "volumemaxxing";

type RecipeDocument = Recipe;

function serializeRecipe(recipe: WithId<RecipeDocument>): Recipe {
  const { _id, ...rest } = recipe;
  return rest;
}

export async function getRecipes(): Promise<Recipe[]> {
  const client = await clientPromise;
  const db = client.db(dbName);

  const recipes = await db
    .collection<RecipeDocument>("recipes")
    .find({})
    .sort({ volumeScore: -1 })
    .toArray();

  return recipes.map(serializeRecipe);
}

export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
  const client = await clientPromise;
  const db = client.db(dbName);

  const recipe = await db
    .collection<RecipeDocument>("recipes")
    .findOne({ slug });

  if (!recipe) {
    return null;
  }

  return serializeRecipe(recipe);
}
