Act as a senior frontend engineer and UI/UX designer specializing in Nuxt 3, Vue 3, TypeScript, and high-performance web applications.

Your task is to architect and build a production-ready personal portfolio website with exceptional UX, clean architecture, and optimized performance.

━━━━━━━━━━━━━━━━━━━
🎯 OBJECTIVE
━━━━━━━━━━━━━━━━━━━
Design and implement a visually striking, fully responsive portfolio that showcases:

- Projects
- Skills
- Professional identity

The result must be:

- Production-ready
- Highly performant (Core Web Vitals optimized)
- Accessible (WCAG 2.1 AA)
- Scalable (CMS-ready structure)

━━━━━━━━━━━━━━━━━━━
🛠️ TECH STACK
━━━━━━━━━━━━━━━━━━━

- Framework: Nuxt 3 (latest stable)
- Language: TypeScript (strict mode, no `any`)
- Styling: Tailwind CSS + CSS variables (design tokens)
- Content: @nuxt/content v3 (MD/MDX)
- Images: @nuxt/image
- Animations: @vueuse/motion (preferred) or GSAP if justified
- SEO: @nuxtjs/seo
- State: Vue composables only (no external state libs)
- Tooling:
  - pnpm
  - ESLint (flat config)
  - Prettier
  - Optional: Husky + lint-staged

━━━━━━━━━━━━━━━━━━━
🎨 DESIGN SYSTEM
━━━━━━━━━━━━━━━━━━━

- Style: Modern, minimalist with bold accents
- Layout: Grid-based, consistent spacing scale
- Typography:
  - Primary: Inter
  - Secondary: Space Grotesk
- Theming:
  - Dark + Light mode
  - System preference detection
  - CSS variables for colors, spacing, radius
- UI Effects:
  - Subtle gradients
  - Glassmorphism (used sparingly)
  - Hover lift + motion feedback
  - Skeleton loaders for async content

━━━━━━━━━━━━━━━━━━━
🏗️ FEATURES
━━━━━━━━━━━━━━━━━━━

1. Hero Section
   - Name, role, tagline
   - CTA (View Projects, Contact)
   - Scroll indicator with animation

2. About Section
   - Short bio (realistic content)
   - Avatar/photo
   - Resume download link

3. Skills Section
   - Categorized (Frontend, Backend, Tools)
   - Icons + proficiency indicators

4. Projects Section
   - Filterable grid (by tech/category)
   - Each project includes:
     - Optimized image
     - Title, description
     - Tech stack tags
     - GitHub + Live demo links
     - Expandable modal/details

5. Blog / Case Studies
   - Powered by MDX
   - Reading time
   - Tags
   - Prev/Next navigation

6. Contact Section
   - Form with validation
   - Netlify Forms OR Resend (choose and justify)
   - Spam protection (honeypot or captcha-lite)

7. Global UI
   - Sticky navbar (blur backdrop)
   - Footer
   - Theme toggle
   - Smooth scrolling
   - Custom 404 page

━━━━━━━━━━━━━━━━━━━
⚡ PERFORMANCE & SEO
━━━━━━━━━━━━━━━━━━━

- SSR enabled
- Route-level caching via Nitro
- Code splitting + dynamic imports
- Lazy loading images/components
- Core Web Vitals targets:
  - LCP < 2.5s
  - CLS < 0.1
  - INP < 200ms

SEO Requirements:

- useSeoMeta on all pages
- Open Graph + Twitter cards
- sitemap.xml + robots.txt
- JSON-LD schema (Person, Project, BlogPosting)

━━━━━━━━━━━━━━━━━━━
📦 DELIVERY WORKFLOW
━━━━━━━━━━━━━━━━━━━
IMPORTANT: Work in phases. Do NOT skip or merge phases.

Wait for confirmation before continuing.

Phase 1:

- Project setup
- nuxt.config.ts
- Tailwind setup
- TypeScript config
- ESLint + Prettier
- Folder architecture
- Base layout (app.vue + default layout)
- Theme system (dark/light toggle + composable)

Phase 2:

- Core reusable components:
  - Navbar
  - Footer
  - ThemeToggle
  - Button
  - Card
  - Badge
  - Section wrapper

Phase 3:

- Page implementation:
  - Home (Hero, About, Skills, Projects preview)
  - Projects page
  - Blog page
  - Contact page

Phase 4:

- Animations & interactions
- Page transitions
- Accessibility improvements

Phase 5:

- SEO implementation
- Performance optimization
- Form integration
- Deployment guide (Vercel / Netlify / Nitro)

━━━━━━━━━━━━━━━━━━━
📝 OUTPUT RULES
━━━━━━━━━━━━━━━━━━━

- Provide exact terminal commands when needed
- Use realistic mock data (developer persona)
- All code must be:
  - Fully typed
  - Composition API
  - Clean and modular
- Explain key decisions briefly (no long essays)
- Use best practices for scalability and maintainability
- If anything is unclear, ask questions BEFORE coding

━━━━━━━━━━━━━━━━━━━
🚫 CONSTRAINTS
━━━━━━━━━━━━━━━━━━━

- No placeholder lorem ipsum
- No `any` types
- No unused dependencies
- Avoid overengineering
- Keep bundle size minimal

━━━━━━━━━━━━━━━━━━━

Begin with Phase 1 only.
Stop after completing it and wait for confirmation.
