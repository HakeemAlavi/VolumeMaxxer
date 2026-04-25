"use client";

import { useMemo, useState } from "react";
import { Copy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function AIRecipeBriefBuilder() {
  const [ingredients, setIngredients] = useState("");
  const [calories, setCalories] = useState("500");
  const [mealType, setMealType] = useState("dinner");
  const [dietaryPreference, setDietaryPreference] = useState("high-protein");
  const [allergies, setAllergies] = useState("");
  const [budget, setBudget] = useState("budget-friendly");
  const [copied, setCopied] = useState(false);

  const prompt = useMemo(() => {
    return `You are a high-volume recipe assistant helping someone who is cutting.

Create 3 filling, low-calorie meal ideas using these ingredients:
${ingredients || "[user ingredients]"}

Goal:
Create a ${mealType} that is satisfying, high in food volume, and around ${calories} calories.

User preferences:
- Dietary preference: ${dietaryPreference}
- Budget preference: ${budget}
- Allergies or foods to avoid: ${allergies || "none mentioned"}

Rules:
- Prioritize lean protein, vegetables, water-rich foods, fiber, and low-calorie swaps.
- Explain why each meal is filling.
- Include ingredients, simple steps, and possible high-volume substitutions.
- Do not pretend exact calories are guaranteed.
- Clearly label calories and macros as estimates.
- Mention that final nutrition values should be checked with a nutrition tracker.
- Avoid unsafe advice and do not ignore allergies.`;
  }, [ingredients, calories, mealType, dietaryPreference, allergies, budget]);

  async function copyPrompt() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <Card className="rounded-[2rem] border-slate-200 bg-white/90 shadow-sm">
        <CardContent className="space-y-5 p-6">
          <div>
            <Badge className="rounded-full bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
              Prompt-based AI workflow
            </Badge>
            <h2 className="mt-4 text-2xl font-black tracking-tight">
              Build a safer AI recipe brief
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Instead of letting AI freely invent nutrition advice, this creates
              a structured prompt with constraints, safety reminders, and a
              clear high-volume goal.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold">
              Ingredients you have
            </label>
            <textarea
              value={ingredients}
              onChange={(event) => setIngredients(event.target.value)}
              placeholder="Example: chicken breast, potatoes, cucumber, Greek yogurt, frozen berries"
              className="min-h-28 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-emerald-500/20 transition focus:ring-4"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Calorie target</label>
              <Input
                value={calories}
                onChange={(event) => setCalories(event.target.value)}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Meal type</label>
              <Input
                value={mealType}
                onChange={(event) => setMealType(event.target.value)}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Diet preference</label>
              <Input
                value={dietaryPreference}
                onChange={(event) => setDietaryPreference(event.target.value)}
                className="rounded-2xl"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Budget</label>
              <Input
                value={budget}
                onChange={(event) => setBudget(event.target.value)}
                className="rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold">
              Allergies or foods to avoid
            </label>
            <Input
              value={allergies}
              onChange={(event) => setAllergies(event.target.value)}
              placeholder="Example: dairy, soy, peanuts"
              className="rounded-2xl"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-[2rem] border-emerald-200 bg-slate-950 text-white shadow-xl">
        <CardContent className="flex h-full flex-col p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-300">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-semibold">
                  Generated AI brief
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Copy this into ChatGPT or use it as the future system prompt for
                an in-app AI assistant.
              </p>
            </div>

            <Button
              onClick={copyPrompt}
              variant="secondary"
              className="rounded-full"
            >
              <Copy className="mr-2 h-4 w-4" />
              {copied ? "Copied" : "Copy"}
            </Button>
          </div>

          <pre className="min-h-[440px] flex-1 whitespace-pre-wrap rounded-3xl bg-white/10 p-5 text-sm leading-6 text-slate-100">
            {prompt}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
