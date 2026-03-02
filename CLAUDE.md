# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

This is a static Astro site for Koo's Wigs & Design, a hair salon in Wheaton, MD.

**Page structure:** All pages use `BaseLayout.astro`, which wraps content with `Header`, `Footer`, global CSS (`global.css`), and the hamburger menu script (`menu.js`). Pages pass a `pageTitle` prop to `BaseLayout`.

**Navigation:** The hamburger menu (`Hamburger.astro` + `menu.js`) is currently commented out in `Header.astro`. Nav links are hidden by default and revealed via the `.expanded` class toggled by `menu.js`.

**Multi-page layout:** `index.astro` composes the homepage from section components (`Hero`, `Visiting`, `Products`, `Careers`). Additional pages (`about`, `faq`, `contact`) exist but use `BaseLayout` directly.

**Business info:** Address, phone number `(301) 933-4522`, and hours live in both `Footer.astro` and `Visiting.astro`. Keep these in sync if they change.

**Color Palette**
This is the color palette for the website. Ink Black #0d1b2a. Prussian Blue #1b263b. Dusk Blue #415a77. Lavender Grey #778da9. Alabaster Grey #e0e1dd.