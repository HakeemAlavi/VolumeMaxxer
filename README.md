# Volume Maxxing

Volume Maxxing is a small AI-assisted web prototype for people who are cutting or trying to lose weight but struggle with meals that feel too small or unsatisfying.

The idea is simple: help users find low-calorie, high-volume meals that make dieting easier to sustain.

## Problem

When I am cutting, the hardest part is not only staying under my calorie target. It is staying full enough to actually stick to the plan.

A lot of low-calorie recipes look healthy, but they are not always satisfying. This makes it easier to snack, overeat later, or abandon the diet. I wanted to build a small product that focuses specifically on fullness, food volume, and adherence.

## What I built

The prototype includes:

- A polished landing page explaining the problem and product idea
- A recipe browser with search and filters
- Recipe detail pages with ingredients, preparation steps, calories, protein, allergens, and volume score
- MongoDB-backed recipe storage
- Vercel deployment
- An AI Recipe Brief Builder that turns ingredients, goals, allergies, and budget into a structured AI prompt

## AI usage

I used AI in two ways.

First, I used AI as a building partner to scope the MVP, generate and debug code, improve the UI, troubleshoot deployment issues, and refine the product story.

Second, I built a prompt-based AI workflow into the product. The AI Recipe Brief Builder creates a structured prompt that users can copy into ChatGPT to generate high-volume meal ideas.

I deliberately chose a prompt-based AI workflow instead of direct AI recipe generation because nutrition values, allergies, and calorie estimates require careful validation.

## Why AI helps

AI is useful for:

- Turning pantry ingredients into meal ideas
- Suggesting high-volume substitutions
- Adapting recipes to dietary preferences
- Reducing the time spent searching for cutting-friendly meals

## Where AI should not be trusted blindly

AI should not be treated as the final source of truth for:

- Exact calories
- Macros
- Allergy safety
- Medical or nutrition advice

For this reason, the prototype keeps recipes curated and treats AI as an ideation layer.

## Tech stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- MongoDB Atlas
- Vercel
- GitHub

## What I deliberately left out

I did not add authentication, public CRUD, saved meal plans, or direct AI recipe generation in this version.

Public create, update, and delete actions would require user accounts, moderation, and stronger nutrition validation. Direct AI generation would require better safeguards around calorie estimates and allergies.

## Future improvements

Next, I would add:

- Verified nutrition data through a nutrition API
- User accounts and saved favorite recipes
- Pantry-based recipe generation inside the app
- Budget-aware grocery lists
- Weekly meal planning
- Admin-only recipe creation and editing
- A better volume score based on nutrition data and user feedback

##

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
