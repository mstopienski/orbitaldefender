# Sibox Game Studio – GitHub Pages site

Plain HTML + CSS, no build step and no frameworks. All paths are relative, so it works both in a
`login.github.io` repo and in a project repo (`login.github.io/repo-name/`).

## Files
- `index.html` – home page (entry point)
- `orbital-defender.html` – OrbitalDefender game page
- `rift-runners.html` – mock-up of a future game (rename/edit it or delete it)
- `studio.html` – about the studio
- `css/style.css`, `js/site.js` – shared styles and a tiny script (screenshot lightbox)
- `assets/` – logo (SVG), game icon, screenshots, enemy sprites, Exo 2 font (OFL license)

## Replacing images
Drop your own files with the same names into `assets/img/`:
`screenshot-1.png` … `screenshot-6.png` (OrbitalDefender), `preview-1.png` … `preview-3.png` (Rift Runners).

## Search the code for these comments
`CHANGE` (e-mail, Google Play link, texts) and `REPLACE` (images).

## Publishing
Repo → Settings → Pages → Deploy from a branch → `main` / `(root)`.
