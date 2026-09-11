# Zebas Bake — Premium Bakery Website

Mobile-first React + Vite + Tailwind + Framer Motion implementation inspired by the supplied Zebas Bake poster.

## Quick start

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Important: WhatsApp number

Open `src/main.jsx` and change only this variable:

```js
const WHATSAPP_NUMBER = "91XXXXXXXXXX";
```

Use the number in international format without `+`, spaces, or dashes.

## Brand assets

The `public/images` folder contains crops made from the supplied Zebas Bake reference poster. Replace these with original product photography when available.

## Notes

- The 3D dessert section intentionally uses lightweight CSS 3D transforms instead of a heavy WebGL scene to protect mobile performance.
- The cake imagery currently uses remote Unsplash images as temporary visual placeholders; replace them with the bakery's own photos before production.
- The testimonials are presentation examples from the supplied brief, not verified customer reviews. Replace with real reviews before publishing.
- Instagram is configured as `@zebasbake` from the supplied brief.
