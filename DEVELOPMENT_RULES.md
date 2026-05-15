# DEVELOPMENT RULES - ANSHU MEMORIAL ACADEMY

## Core Technology Stack
- **Framework:** Next.js (App Router only)
- **Database:** NeonDB (PostgreSQL)
- **ORM:** Drizzle ORM
- **Authentication:** Better Auth
- **Forms:** react-hook-form
- **Validation:** Zod
- **Deployment:** Vercel-supported stack only

## Prohibited Technologies
- **No Laravel:** This is a strictly JavaScript/TypeScript project.
- **No NoSQL:** Prefer relational data modeling with NeonDB.
- **No Heavy Redesign:** Do not deviate from the established "Premium Blue & Gold" design system.

## Architectural Mandates
- **Preserve Architecture:** Follow the existing folder structure (`app/`, `components/`, `actions/`, `lib/`, `config/`).
- **Mobile-First:** All UI changes must be developed and verified for mobile responsiveness as the primary priority.
- **Institutional UX:** Maintain a premium, trustworthy, and modern educational aesthetic (2026 standards).
- **Server Components:** Prioritize Server Components for performance; use client-side interactivity only when necessary.

## Process & Efficiency
- **Token Efficiency:** Implement changes in surgical, phased turns to minimize context usage.
- **Phased Validation:** Each phase must be followed by rigorous testing and verification before proceeding.
- **Tracking:** Update `PROJECT_STATUS.md`, `TASKS.md`, and `MEMORY.md` immediately after completing any significant phase or sub-task.
- **Error Handling:** Use professional placeholder states for features with pending real-world data or backend integration.

## Design System
- **Colors:** Deep Premium Blue (Primary) and Subtle Gold (Accent).
- **Typography:** Geist Sans (Sans) and Geist Mono (Mono).
- **Radius:** Large rounded corners (`2xl` or `3xl` for cards, `xl` for inputs/buttons) for a modern, approachable feel.
