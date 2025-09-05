# Canva → React Starter (Vite)

This project is pre-wired to take assets exported from Canva and map them into React components with design tokens.

## Quick Start

```bash
npm i
npm run dev
```

Then open the printed URL in your browser.

## Where to put your Canva exports

- **Logo & icons (SVG preferred):** `src/assets/svg/` (e.g., `logo.svg`, `icon-phone.svg`)
- **Hero/backgrounds (JPG/PNG/WebP):** `src/assets/img/` (e.g., `hero.jpg`)
- Replace the placeholders included in this repo (`hero.svg`, `logo.svg`).

## Design Tokens

Edit `src/styles/tokens.css` with your palette (HEX), font family/weights, spacing scale, and border radius to match your Canva design.

## Sections

- `Navbar.jsx` uses `logo.svg` and simple links.
- `Hero.jsx` uses a background image (placeholder `hero.svg`) and two buttons.
- Extend with your sections: Services, Testimonials, Footer, etc.

## Tips

- Export images from Canva at **2×** for crispness.
- Prefer **SVG** for logos/icons.
- Use JPG for photos (no transparency), PNG/WebP for transparent graphics.
- If your Canva font can't be used on the web, pick a close alternative from Google Fonts.
