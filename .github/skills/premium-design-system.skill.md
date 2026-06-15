---
name: "premium-design-system"
description: "Activates automatically when writing, refactoring, or migrating frontend code, Next.js components, Tailwind styling, Framer Motion animations, or premium design tokens."
---

# Premium Design System Skill (Next.js & Tailwind Stack)

## Core Aesthetics & Standards
You must strictly enforce a luxury, editorial-grade visual design. Bypass generic, blocky templates. Prioritize sweeping whitespace, asymmetric typography balance, and fluid interactions.

### 1. Typography & Hierarchy
- **Scale**: Implement a fluid typography system using CSS `clamp()` or Tailwind's arbitrary values.
- **Pairing**: Pair a high-contrast editorial Serif/Display typeface for headers with a clean, low-contrast, geometric Sans-Serif or Monospace font for body text.
- **Spacing**: Set tracking (`letter-spacing`) to tight or normal for heavy displays, and wide/tracked-out for small subtitles or buttons. Ensure all body copy has an elegant line height (`leading-relaxed`).

### 2. Micro-Interactions & Framer Motion Animation
- **Physics**: Avoid linear transitions. Use custom spring or cubic-bezier curves (e.g., `ease: [0.16, 1, 0.3, 1]`) for all state changes.
- **Hardware Acceleration**: Only animate `transform` (x, y, scale, rotate), `opacity`, and `filter`. Never animate properties that cause browser reflows (e.g., `width`, `height`, `top`).
- **Interactive States**: Every interactive element must possess custom hover, active, focus-visible, and disabled states using Framer Motion (`whileHover`, `whileTap`).

### 3. Layout & Structure
- **Framework**: Use Next.js App Router structural standards. Enforce clean, modular, reusable React server components by default, adding `"use client"` only when interactive state or Framer Motion is required.
- **Spacing**: Maintain strict, generous padding rules. Give elements room to breathe. Use a consistent layout rhythm (e.g., multiplier of an 8px grid system).

---

## Required Workflow Actions
Every time you process a layout modification or generate a new component, you must execute the following sequence:

1. **Write Clean Code**: Build the component using semantic HTML5 tags and Tailwind CSS utility tokens. Do not write monolithic components; split logic elegantly.
2. **Execute Visual Validation**: Call the local headless browser tool or open the vs code integrated browser.  to review your work.
3. **Cross-Viewport Checklist**: Test and confirm that text wrapping, content overlapping, and alignment look flawless at:
   - Mobile: `375px`
   - Tablet: `768px`
   - Desktop: `1440px`
4. **Compile Check**: Run `npm run build` to confirm zero TypeScript compilation errors or linter warnings.

---

## Structural Code Examples

### Premium Button Component Style
```tsx
"use client";

import { motion } from "framer-motion";

export default function PremiumButton({ text = "Discover Collection" }) {
  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      className="group relative overflow-hidden border border-neutral-800 bg-transparent px-8 py-3 text-xs font-medium uppercase tracking-widest text-neutral-100 transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-black"
    >
      <span className="absolute inset-0 translate-y-full bg-neutral-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
      <span className="relative z-10 flex items-center gap-2">
        {text}
        <motion.span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
          →
        </motion.span>
      </span>
    </motion.button>
  );
}
```

### Fluid Layout Skeleton Style
```tsx
// Asymmetric, dynamic luxury layout frame
export default function EditorialSection() {
  return (
    <section className="grid min-h-screen grid-cols-1 gap-12 px-6 py-24 md:grid-cols-12 md:px-16 lg:px-24 bg-black text-white">
      <div className="flex flex-col justify-end md:col-span-5 md:pr-12">
        <span className="mb-4 text-xs font-mono uppercase tracking-widest text-neutral-400">01 // Manifest</span>
        <h2 className="font-serif text-4xl leading-tight text-neutral-100 md:text-5xl lg:text-6xl">
          Crafting digital artifacts.
        </h2>
      </div>
      <div className="relative aspect-[3/4] w-full bg-neutral-900 md:col-span-7 md:translate-y-12 overflow-hidden">
        {/* Optimized Media Asset Layer */}
      </div>
    </section>
  );
}
```
