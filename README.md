# Mayur Patel — Engineering Portfolio (Astro 5)

Modern, high-performance personal portfolio built with the **Astro Framework** showcasing software engineering projects across **Systems Programming (Go, C)**, **AI/ML (PyTorch, Deep Learning)**, and **Developer Tools**.

Live at: [https://mayur589.github.io/Portfolio/](https://mayur589.github.io/Portfolio/)

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / SSG, Zero JS by default)
- **Language**: TypeScript & Modular `.astro` components
- **Styling**: Vanilla CSS Design Tokens, Glassmorphism Bento Grid, Dark Obsidian & Amethyst Theme
- **Interactive Engine**: Client-side 60fps 2D HTML5 Canvas particle engine & magnetic custom cursor
- **Data Layer**: Strongly-typed data models in `src/data/` for projects, experience, skills, and education

---

## 📁 Project Structure

```
├── astro.config.mjs         # Astro project configuration
├── package.json             # Dependencies & build scripts
├── tsconfig.json            # TypeScript path aliases & strict configuration
├── public/                  # Static assets & favicons
└── src/
    ├── layouts/
    │   └── Layout.astro     # Master HTML shell, SEO metadata, ambient canvas & cursor
    ├── pages/
    │   └── index.astro      # Master single-page portfolio view
    ├── components/
    │   ├── Navbar.astro     # Floating glass capsule navigation
    │   ├── Hero.astro       # Status badge, display typography & chapter chips
    │   ├── Experience.astro # DRDO & Aspirenet internship timeline
    │   ├── Projects.astro   # Bento grid with real-time category filter tabs
    │   ├── Skills.astro     # Categorized skill matrices
    │   ├── Education.astro  # VIT Chennai degree & IBM DevOps certificate
    │   ├── Contact.astro    # Click-to-copy email badge & social links
    │   ├── Footer.astro     # Footer component
    │   ├── BackgroundCanvas.astro # 2D canvas particle canvas & glowing aura
    │   ├── CustomCursor.astro     # Dual-ring cursor & copy toast popup
    │   └── ProgressRail.astro     # Vertical scroll indicator rail
    ├── data/
    │   ├── profile.ts       # Author bio, headline & contact info
    │   ├── experience.ts    # Work history data
    │   ├── projects.ts      # Projects data & category definitions
    │   ├── skills.ts        # Skills grouped by category
    │   └── education.ts     # Education & certification data
    ├── styles/
    │   ├── tokens.css       # Design tokens & color palette
    │   ├── base.css         # Reset, typography & aura
    │   ├── layout.css       # Containers, hero, contact & footer
    │   ├── components.css   # Bento cards, filter tabs & skill pills
    │   └── global.css       # Master stylesheet entry point
    └── scripts/
        ├── particles.ts     # 2D canvas twinkling particle engine
        └── ui.ts            # Scroll spy, project filter & clipboard toast
```

---

## 🚀 Development & Build Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production static website (dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 👤 Author

**Mayur Patel**  
- GitHub: [@Mayur589](https://github.com/Mayur589)  
- LinkedIn: [mayur-patel-09142428b](https://www.linkedin.com/in/mayur-patel-09142428b)  
- Email: [mayurhpatel05@gmail.com](mailto:mayurhpatel05@gmail.com)
