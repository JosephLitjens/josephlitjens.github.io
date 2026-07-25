# Portfolio Site

Static multi-page site — no build step, no backend, no framework. Open `index.html` directly in a browser to preview, or run a local server (`python3 -m http.server`) from this folder for the most accurate preview since videos/relative paths behave better over http:// than file://.

## Structure

```
index.html              Home page (About, Experience, Skills, Education, project cards, Contact)
style.css                Shared styles for every page
script.js                 Shared behavior (nav dropdown, mobile menu, scroll reveal)
projects/
  shutter.html            01 — HXN Endstation Shutter (BNL)
  toltransform.html        02 — TolTransform
  linear-stage.html        03 — Linear Stage Module
  robotics.html             04 — Robotics coursework projects
  lhr.html                   05 — Liquid Handling Robot
  hull-mold.html              06 — Senior design hull mold
  other.html                    07 — Rack, rotation stage, PID lab, heat transfer
assets/
  shared/                  Personal photos used on the home page
  <project>/               Images + videos for each project page, referenced
                            by the matching HTML file
```

## Reworking it

Everything is plain HTML/CSS — no templating, so each page is self-contained and safe to edit directly:

- **Change text/images on one page** → edit that page's `.html` file directly. Nothing else depends on it.
- **Change the nav or add an 8th project** → the same `<nav>...</nav>` and `<ul class="nav-dropdown">` block is repeated at the top of every page (including `index.html`). Update it in each file, or ask Claude to do a find-and-replace across all 8 pages in one pass.
- **Change colors/fonts/spacing sitewide** → edit the `:root` variables and component classes in `style.css`. All 8 pages pull from this one file.
- **Reorder projects** → update the `project-grid` cards in `index.html` and the numbering in the nav dropdown (both are just numbered list items, easy to reorder).
- **Add a new photo/video to an existing page** → drop the file in the matching `assets/<project>/` folder, then add an `<img>` or `<video>` tag referencing it (copy an existing `<figure>` block as a template).

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `josephlitjens.github.io` for a root domain, or any name for a project page).
2. Push this whole `portfolio-site` folder's contents to the repo's default branch.
3. In the repo: **Settings → Pages → Source** → select the branch and `/ (root)`.
4. Save. GitHub will publish at `https://<username>.github.io/<repo-name>/` (or just `https://<username>.github.io/` if the repo is named `<username>.github.io`).

## Notes

- OG/social-preview tags assume the site is deployed at `https://josephlitjens.github.io/`. If it ends up at a different URL (e.g. a project page like `.../portfolio/`), update the `og:url` and `og:image` values in each page's `<head>`.
- `assets/linear-stage/circuit.png` and `assets/other/rotstage-fea-deform.png` were replaced by compressed `.jpg` versions; the originals are kept on disk but excluded from git via `.gitignore`.

- All videos are pre-converted to H.264 `.mp4` for broad browser support.
- The MOXA I/O photo on the Shutter page has the internal network IP labels blacked out before publishing.
- ASML project work is intentionally not shown as a case study (proprietary IP) — it's referenced only briefly, by title and dates, in the Experience section.
- The Experience section deliberately does not repeat resume bullets — it's context only. The real depth lives on the project pages, written as process narrative rather than resume language.
