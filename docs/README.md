# Silhouette / Signal

An interactive, static research showcase for **Impact of Silhouette Feature Representation on Gait Analysis**, an unpublished University of Ghana undergraduate project (2024).

## Preview locally

No build step or dependencies are required.

```bash
cd "Gait Analysis/showcase"
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Before publishing

1. Confirm that `app.js` points to `https://github.com/Dillion101/gait-analysis`.
2. Check the spelling and preferred presentation of every contributor's name.
3. Keep the unpublished/non-peer-reviewed disclosure visible.
4. Do not publish the large datasets unless their licence permits redistribution. The showcase only contains 17 small derived sample images for demonstration.

## Deploy free

### GitHub Pages

Move this folder's contents to the repository root (or configure Pages to serve a `/docs` folder), then enable **Settings → Pages → Deploy from a branch**.

### Netlify or Vercel

Import the repository and set this folder as the project/root directory. There is no build command; the output directory is `.`.

## Research framing

All numbers on the site are transcribed from the extraction workbook, submitted final documentation, and saved notebook outputs. Claims are deliberately scoped to the project's CASIA-B normal-walking-condition protocol. The Enhanced GaitSTAR value is presented as a separate experiment and is not described as a peer-reviewed state-of-the-art result. The site also discloses that later confidence-distribution plots in that notebook use simulated values.
