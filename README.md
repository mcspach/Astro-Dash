# Astro-Dash-Boilerplate

Astro + TypeScript boilerplate for dashboard-style projects, configured for GitHub Pages and ready for future API integration.

## Stack

- Astro (static output)
- TypeScript (simple setup)
- Bootstrap via SCSS source import
- npm package manager

## Project structure

```text
src/
  components/
  layouts/
  lib/
    api/
  pages/
  styles/
```

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Styling

Bootstrap is loaded from SCSS source so you can layer custom styles cleanly:

- `src/styles/_variables.scss` for Bootstrap variable overrides
- `src/styles/bootstrap.scss` for Bootstrap import
- `src/styles/custom.scss` for project-specific styles
- `src/styles/global.scss` for style load order (Bootstrap first, custom second)

## Future API integration scaffold

Use `src/lib/api/` for endpoint constants and shared fetch helpers:

- `endpoints.ts` for API route constants
- `http.ts` for typed request helpers

## GitHub Pages deployment

A GitHub Actions workflow is included at:

- `.github/workflows/deploy.yml`

Astro is configured in `astro.config.mjs` with a practical project-site default:

- `site: "https://mcspach.github.io"`
- `base: "/Astro-Dash/"`

If this repo is deployed as a user/org site instead of a project site, update `site` and `base` accordingly.
