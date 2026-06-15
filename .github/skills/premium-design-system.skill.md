---
name: "premium-design-system"
description: "Activates automatically when writing, refactoring, or migrating frontend code, Next.js components, Tailwind styling, Framer Motion animations, or premium design tokens."
---

# Premium Design System Skill (Next.js & Tailwind Stack)

## Core Aesthetics & Standards
You must strictly enforce a luxury, editorial-grade visual design. Bypass generic, blocky templates. Prioritize sweeping whitespace, asymmetric typography balance, and fluid interactions.

### 1. Typography & Hierarchy
- Use fluid typography with CSS clamp() or Tailwind arbitrary values.
- Pair a high-contrast display font for headers with a clean geometric sans for body text.
- Use generous leading and tight tracking for headlines.

### 2. Micro-Interactions & Framer Motion
- Prefer spring-based transitions and animate only transform & opacity.
- Use whileHover, whileTap for interactive states and keep animations GPU-friendly.

### 3. Layout & Structure
- Use Next.js App Router; default to server components, add "use client" only when needed.
- Keep components small, semantic, and reusable.

## Workflow
1. Write semantic HTML with Tailwind utilities.
2. Validate visually in headless browser or VS Code integrated browser.
3. Test mobile (375px), tablet (768px), desktop (1440px).
4. Run npm run build and fix TypeScript/lint errors.


