# Personal Portfolio / CP Blog

This is a personal competitive programming and math blog built with Next.js (app router), TypeScript and Tailwind CSS.

Quick local development

1. Install dependencies:

```powershell
cd d:\dev\portfolio
npm ci
```

2. Run development server:

```powershell
npm run dev
```

Production build & run

```powershell
npm run build
npm run start
```

Deployment (recommended: Vercel)

- Option A — Vercel Git Integration (recommended):
  1. Push this repo to GitHub.
  2. Import the repo in Vercel (https://vercel.com/new) and follow the UI to link the `main` branch.
  3. Vercel will build and deploy on every push.

- Option B — GitHub Actions (already included):
  - A workflow is present at `.github/workflows/deploy-vercel.yml` which uses a `VERCEL_TOKEN` secret to trigger Vercel deploys. To use it:
    1. Create a Vercel token (https://vercel.com/account/tokens).
    2. In your GitHub repo, go to Settings → Secrets and create `VERCEL_TOKEN` with that token.
    3. Push to `main` to trigger the workflow.

Notes
- The site uses Next.js app-router and is optimized for Vercel. Static pages are prerendered during build.
- If you want exact typography/animation tweaks, tell me which parts to tune (heading sizes, typing speed, spacing) and I will update `src/app/globals.css`.
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
