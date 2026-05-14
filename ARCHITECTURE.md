# ARCHITECTURE

## Folder Structure
- `app/`: Next.js App Router pages and layouts.
- `components/`:
  - `common/`: Reusable, generic UI components (buttons, cards, forms).
  - `layout/`: Layout components (Navbar, Footer).
  - `sections/`: Page-specific sections (Hero, AboutSection).
- `features/`: Complex feature-based logic.
- `actions/`: Next.js Server Actions for form submissions.
- `hooks/`: Custom React hooks.
- `lib/`: Utility functions (cn, etc.).
- `types/`: TypeScript definitions.
- `config/`: Application configuration (site metadata, navigation).
- `content/`: Static content files.
- `constants/`: Global constants.
- `styles/`: Global styles and Tailwind extensions.

## Tech Stack
- **Next.js 16**: Modern React framework with App Router.
- **TypeScript**: Static typing for reliability.
- **Tailwind CSS 4**: Utility-first styling with OKLCH colors.
- **shadcn/ui**: Accessible UI primitives based on Radix.
- **Framer Motion**: Purposeful animations for engagement.
- **Lucide React**: Modern icon set.
- **Geist**: Premium typography.

## Key Design Patterns
- **Mobile First**: All components are developed and tested for mobile responsiveness first.
- **Server Components**: Prefer server components for performance, using `"use client"` only where interactivity is needed.
- **Validation**: Use Zod for both client-side and server-side (upcoming) schema validation.
