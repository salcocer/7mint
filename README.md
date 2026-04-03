# 7mint

A modern web application template built with **Next.js 16**, **shadcn/ui**, **TypeScript**, and **TailwindCSS v4**.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 (App Router) | Framework |
| [TypeScript](https://www.typescriptlang.org) | 5 | Type safety |
| [TailwindCSS](https://tailwindcss.com) | 4 | Styling |
| [PostCSS](https://postcss.org) | - | CSS processing |
| [shadcn/ui](https://ui.shadcn.com) | latest | UI components |
| [Radix UI](https://www.radix-ui.com) | - | Accessible primitives |
| [Lucide React](https://lucide.dev) | - | Icons |

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles + CSS variables
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   └── ui/             # shadcn/ui components
│       ├── badge.tsx
│       ├── button.tsx
│       └── card.tsx
└── lib/
    └── utils.ts        # Utility functions (cn helper)
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

