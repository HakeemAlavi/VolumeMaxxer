import { Recipe } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    slug: "giant-chicken-stir-fry-bowl",
    title: "Giant Chicken Stir-Fry Bowl",
    description:
      "A huge bowl of lean chicken, vegetables, and cauliflower rice designed to keep you full while cutting.",
    imageUrl:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
    calories: 430,
    protein: 48,
    prepTime: 25,
    servings: 1,
    volumeScore: 9,
    mealType: "dinner",
    dietaryTags: ["high-protein", "low-calorie", "gluten-free"],
    allergens: ["soy"],
    ingredients: [
      "180g chicken breast",
      "300g mixed stir-fry vegetables",
      "250g cauliflower rice",
      "1 tbsp low-sodium soy sauce",
      "Garlic, ginger, chili flakes",
      "Cooking spray",
    ],
    steps: [
      "Slice the chicken breast into small pieces.",
      "Cook chicken in a hot pan with cooking spray until browned.",
      "Add garlic, ginger, vegetables, and soy sauce.",
      "Microwave or pan-fry the cauliflower rice.",
      "Serve everything in a large bowl with chili flakes.",
    ],
    whyHighVolume:
      "Cauliflower rice and vegetables add a lot of food volume for very few calories, while chicken keeps protein high.",
    bestFor:
      "Dinner when you want a big plate of food without blowing your calorie target.",
  },
  {
    slug: "protein-yogurt-berry-mountain",
    title: "Protein Yogurt Berry Mountain",
    description:
      "A sweet, high-protein breakfast bowl with berries, yogurt, and crunch.",
    imageUrl:
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1200&auto=format&fit=crop",
    calories: 360,
    protein: 42,
    prepTime: 5,
    servings: 1,
    volumeScore: 8,
    mealType: "breakfast",
    dietaryTags: ["high-protein", "vegetarian", "no-cook"],
    allergens: ["dairy"],
    ingredients: [
      "300g low-fat Greek yogurt",
      "150g frozen berries",
      "20g protein powder",
      "10g puffed rice or cereal",
      "Cinnamon",
      "Zero-calorie sweetener if needed",
    ],
    steps: [
      "Mix Greek yogurt with protein powder until smooth.",
      "Add frozen berries and let them soften for a few minutes.",
      "Top with puffed rice and cinnamon.",
      "Serve in a large bowl.",
    ],
    whyHighVolume:
      "Greek yogurt and berries create a large, filling bowl with high protein and relatively low calories.",
    bestFor: "Breakfast or dessert cravings during a cut.",
  },
  {
    slug: "loaded-egg-white-veggie-scramble",
    title: "Loaded Egg White Veggie Scramble",
    description:
      "A massive savory breakfast using egg whites, vegetables, and salsa.",
    imageUrl:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop",
    calories: 310,
    protein: 38,
    prepTime: 15,
    servings: 1,
    volumeScore: 9,
    mealType: "breakfast",
    dietaryTags: ["high-protein", "low-fat", "vegetarian"],
    allergens: ["egg"],
    ingredients: [
      "300ml egg whites",
      "1 whole egg",
      "200g mushrooms",
      "100g spinach",
      "100g bell peppers",
      "50g salsa",
      "Salt, pepper, paprika",
    ],
    steps: [
      "Cook mushrooms and peppers in a non-stick pan.",
      "Add spinach and let it wilt.",
      "Pour in egg whites and one whole egg.",
      "Scramble until cooked through.",
      "Top with salsa.",
    ],
    whyHighVolume:
      "Egg whites are high in protein and low in calories, while vegetables dramatically increase meal size.",
    bestFor:
      "A high-protein breakfast that feels much bigger than its calorie count.",
  },
  {
    slug: "zucchini-noodle-turkey-bolognese",
    title: "Zucchini Noodle Turkey Bolognese",
    description:
      "A large pasta-style dinner using zucchini noodles and lean turkey mince.",
    imageUrl:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200&auto=format&fit=crop",
    calories: 460,
    protein: 50,
    prepTime: 30,
    servings: 1,
    volumeScore: 8,
    mealType: "dinner",
    dietaryTags: ["high-protein", "low-calorie", "gluten-free"],
    allergens: [],
    ingredients: [
      "200g lean turkey mince",
      "300g zucchini noodles",
      "200g passata",
      "100g mushrooms",
      "Garlic, onion powder, basil, oregano",
      "Salt and pepper",
    ],
    steps: [
      "Cook turkey mince in a pan until browned.",
      "Add mushrooms, passata, and seasonings.",
      "Simmer for 10 to 15 minutes.",
      "Lightly cook zucchini noodles.",
      "Serve sauce over the zucchini noodles.",
    ],
    whyHighVolume:
      "Zucchini noodles replace calorie-dense pasta, allowing a much larger serving size.",
    bestFor: "Pasta cravings while keeping calories controlled.",
  },
];
