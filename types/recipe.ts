export type Recipe = {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  calories: number;
  protein: number;
  prepTime: number;
  servings: number;
  volumeScore: number;
  mealType: "breakfast" | "lunch" | "dinner" | "snack";
  dietaryTags: string[];
  allergens: string[];
  ingredients: string[];
  steps: string[];
  whyHighVolume: string;
  bestFor: string;
};
