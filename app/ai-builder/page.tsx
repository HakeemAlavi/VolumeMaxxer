import Link from "next/link";
import { ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";
import { AIRecipeBriefBuilder } from "@/components/ai-recipe-brief-builder";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AIBuilderPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dcfce7,transparent_35%),linear-gradient(180deg,#f8faf5,#ffffff)] px-6 py-10 text-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Button variant="ghost" asChild className="mb-5 rounded-full">
              <Link href="/recipes">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to recipes
              </Link>
            </Button>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm">
              <Sparkles className="h-4 w-4" />
              AI-assisted recipe ideation
            </div>

            <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              Turn pantry ingredients into a high-volume recipe brief.
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              This is the AI layer of the prototype: a structured prompt
              workflow that helps users generate meal ideas while keeping
              nutrition estimates, allergies, and safety limitations explicit.
            </p>
          </div>

          <Card className="rounded-[2rem] border-emerald-200 bg-white/80 shadow-sm">
            <CardContent className="flex max-w-sm gap-3 p-5">
              <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-emerald-600" />
              <p className="text-sm leading-6 text-slate-600">
                AI helps with ideation, not final nutrition truth. Calories,
                macros, and allergy safety should still be validated.
              </p>
            </CardContent>
          </Card>
        </div>

        <AIRecipeBriefBuilder />
      </div>
    </main>
  );
}
