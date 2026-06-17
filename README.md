# El Nadjah Study Abroad Explorer

Internal tool for El Nadjah Agency DC agents — search, compare, and reference Italian universities and the Algeria study visa process.

## Dev
```
npm install
npm run dev
```

## Build
```
npm run build
```

## Pages

| Route | Description |
|---|---|
| `/` | University Explorer — search, filter, sort 25 universities |
| `/university/:id` | Full university detail with all sections |
| `/compare` | Side-by-side comparison of up to 4 universities |
| `/match` | Profile Matcher — get personalised university recommendations |
| `/process` | General process guide — groups, 10-step path, Italian system |
| `/visa` | Algeria study visa guide — deadlines, fees, document checklist |

## Adding a new university
1. Create `src/data/universities/<id>.ts` conforming to the `University` interface in `src/data/schema.ts`
2. Set `status: "complete"` and populate all relevant sections
3. Import and add to the array in `src/data/index.ts`
4. The university will appear immediately in Explorer, Compare, and Profile Matcher

## Updating visa/process content
Edit `src/data/general/visa.ts` or `src/data/general/process.ts` (typed content objects used by the Visa and GeneralProcess pages).

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS v4 (via @tailwindcss/vite)
- react-router-dom v6
- lucide-react icons
- Google Fonts: Playfair Display + Raleway
- All data bundled as typed TS files — no backend required
