@AGENTS.md

# Asees Passport & Visa Services

Marketing site for a Brampton, Ontario passport/visa/immigration consultancy. Four static pages plus one contact-form API route that emails the business via Gmail SMTP.

## Tech stack

- **Next.js 16.2.6** (App Router) — see warning in `AGENTS.md`; APIs and conventions may differ from older Next.js versions. Read `node_modules/next/dist/docs/` before changing framework-level code.
- **React 19.2.4** + **React DOM 19.2.4**
- **TypeScript 5** (strict mode, `@/*` path alias maps to repo root)
- **Tailwind CSS 4** via `@tailwindcss/postcss` — no `tailwind.config.*`; theme tokens live in `app/globals.css` under `@theme inline`
- **Framer Motion 12** for animations
- **lucide-react** for icons
- **Nodemailer 8** with Gmail service for the contact form

## Commands

```bash
npm run dev    # next dev (http://localhost:3000)
npm run build  # next build
npm run start  # next start (after build)
npm run lint   # eslint (flat config in eslint.config.mjs)
```

There is no test runner configured.

## Layout

```
app/
  layout.tsx          # Root layout: Geist font, Navbar, Footer, metadata
  page.tsx            # Home (hero, services grid, why-choose, stats, CTA)
  globals.css         # Tailwind import + custom utilities (see below)
  services/page.tsx   # Categorised service catalogue
  about/page.tsx      # Story, values, team
  contact/page.tsx    # "use client" form + business info + map iframe
  api/contact/route.ts# POST handler — validates, sends email via nodemailer
components/
  Navbar.tsx          # Sticky, scroll-aware, mobile hamburger ("use client")
  Footer.tsx          # Server component
  AnimateIn.tsx       # whileInView fade/slide wrapper ("use client")
  Card3D.tsx          # Mouse-tracking 3D tilt wrapper ("use client")
  FloatingOrbs.tsx    # Decorative animated blurred orbs ("use client")
public/               # Static SVGs only (no app imagery here)
```

Page routes: `/`, `/services`, `/about`, `/contact`. Contact form posts to `/api/contact`.

## Conventions

### Server vs client components
Pages are server components by default. Anything using hooks, `onClick`, or Framer Motion is a client component (`"use client"` at the top). Today that's `Navbar`, `AnimateIn`, `Card3D`, `FloatingOrbs`, and `app/contact/page.tsx`.

### Styling
- Tailwind utility classes inline; no CSS Modules.
- Theme is dark-first: `bg-slate-950`, `bg-[#030712]`, white text, cyan-400 accents, violet/blue gradients.
- Reusable looks live in `app/globals.css`:
  - `.mesh-bg` — multi-radial-gradient hero background
  - `.glass-card`, `.glass-card-light` — backdrop-blur frosted cards
  - `.pattern-dots`, `.pattern-dots-dark` — dot-pattern overlays
  - `.glow-cyan`, `.glow-cyan-sm` — cyan box-shadow glow
  - `.gradient-text` — cyan→blue→violet text gradient
  - `.gradient-border` — pseudo-element gradient ring
  - `.animate-float`, `.animate-float-slow`, `.animate-float-delay`
- Use these classes instead of reinventing the effect; keep new pages visually consistent.

### Animation pattern
Wrap sections in `<AnimateIn delay={...} direction="up|left|right|fade">` for scroll-in reveals. Wrap interactive cards in `<Card3D>` for hover tilt. Sprinkle `<FloatingOrbs />` inside `relative` sections that want ambient motion.

### Icons and content
- Icons come from `lucide-react`. Note: this project pins `lucide-react ^1.16.0` — the exported icon set/API may differ from the more common 0.x line. Check imports against the installed package before assuming an icon name exists.
- Page-level content (services, values, hours, reviews) is defined as plain arrays at the top of each page file and mapped over in JSX. Edit content there rather than introducing a CMS or JSON files.

### Imports
Use the `@/` alias for cross-directory imports (e.g. `@/components/Navbar`). Relative imports only within the same directory.

### Images
External images must use a hostname listed in `next.config.ts` → `images.remotePatterns`. Currently only `images.unsplash.com` is allowed; add new hosts there before using them with `next/image`.

## Contact form / email

`app/api/contact/route.ts` reads `GMAIL_USER` and `GMAIL_APP_PASSWORD` from the environment and sends a styled HTML email to `aseespvs@gmail.com`. Required fields: `name`, `phone`. Optional: `email`, `service`, `message`.

- `.env*` is gitignored — never commit credentials.
- For local testing, create `.env.local` with both vars set to a Gmail account + app password.
- The route currently has no rate limiting, captcha, or HTML escaping on user-supplied fields — keep that in mind when changing it.

## Business details that recur in copy

- Address: 30 Intermodal Dr #3, Brampton, ON L6T 5K1
- Phone: (905) 616-1739 (linked as `tel:9056161739`)
- Hours: Mon–Fri 10–7, Sat 10–5, Sun by appointment
- Inbox: aseespvs@gmail.com

If any of these change, update them everywhere — they're hard-coded across `page.tsx`, `services/page.tsx`, `about/page.tsx`, `contact/page.tsx`, `Navbar.tsx`, and `Footer.tsx`.

## Workflow notes

- Single `main` branch on GitHub at `pogime05/asees-visa-services`. Feature work happens on `claude/*` branches.
- No CI configured; lint locally before pushing.
- No tests — when changing UI, run `npm run dev` and verify visually.
