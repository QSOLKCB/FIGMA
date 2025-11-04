QSOL-Lite React Spec

Optimized for Figma Make Environment

Purpose:
This document defines a practical subset of the QSOL development philosophy, adapted for Figma’s React-based runtime. Figma’s Make environment enforces React hydration and bundled dependencies—this spec minimizes overhead while preserving QSOL’s spirit: Small is Beautiful, Fast is Holy.


---

Core Principles

1. Lean React – write minimal, explicit components.


2. Static First – default to pre-rendered sections.


3. Explicit State – no phantom props or context chains.


4. Native Tokens – use Figma’s design tokens instead of custom CSS variables.


5. Measured Complexity – every dependency must earn its weight.




---

Performance Targets

Metric	Goal

Bundle size	≤ 400 KB gzipped
Time to Interactive	≤ 1.5 s
Component depth	≤ 3 levels
Hooks per component	≤ 3
Imported libraries	≤ 50 KB each



---

Build Rules

Entry Point: index.jsx

Theme: theme.css only; no CSS-in-JS.

Routing: None—use conditional rendering.

Memoization: Use useMemo, useCallback, and React.memo only where profiling proves value.

Imports: Tree-shake aggressively. No wildcard or default-export imports from libraries.

Async Work: Push non-critical logic to requestIdleCallback or delayed effects.



---

Styling

Map all visual elements to Figma token variables for color, spacing, and typography.

Keep gradients, shadows, and filters under 10 % of total elements.

Prefer inline token references over global CSS classes.

Avoid animation libraries—use CSS keyframes or React’s built-in transitions.



---

Deployment

Use ReactDOMServer.renderToStaticMarkup() for static HTML export.

Cache and compress all images before upload.

Disable rehydration for non-interactive components.

Validate final gzip size and load time before publication.



---

Meme Mode

“Meme Mode” is not a joke—it’s a stability hack.
Injecting light, static media or playful placeholder elements keeps Figma’s compiler from over-optimizing or re-hydrating fragments. A well-placed meme or humorous asset can anchor the render tree, preventing unwanted refactors and cache invalidations.
Think of it as quantum noise to stabilize the waveform: harmless chaos that preserves coherence.


---

Mythic Spec

> “All systems drift toward entropy; elegance resists.”



The Mythic Spec is the philosophical core of QSOL-Lite:

Every byte must justify its existence.

Code is architecture—clarity equals speed.

Tools are fallible; humor is armor.

A meme is a unit test for humanity.

When optimization becomes religion, remember: the gods of runtime demand tribute, not worship.


QSOL-Lite isn’t just a technical doctrine—it’s a reminder that the line between code and art, signal and noise, is where the myth lives.
