# venusvavadiya.github.io

My personal site and resume, built with [Hakyll](https://jaspervdj.be/hakyll/) and hosted on [GitHub Pages](https://venusvavadiya.github.io).

## Tech stack

- [Hakyll](https://jaspervdj.be/hakyll/) for the static site
- [Pandoc](https://pandoc.org/) to turn markdown into HTML, with `Ext_fenced_divs` enabled in [`site.hs`](site.hs)
- [Tailwind](https://tailwindcss.com/) preflight from a CDN, with the rest of the styling in [`css/style.css`](css/style.css)
- [Inter](https://fonts.google.com/specimen/Inter) for the font
- Cabal project defined in [`venusvavadiya-github-io.cabal`](venusvavadiya-github-io.cabal)

## Prerequisites

You'll need [GHC](https://www.haskell.org/ghc/) and [Cabal](https://www.haskell.org/cabal/), and [GHCup](https://www.haskell.org/ghcup/) is the easiest way to get both.

## Build & develop

```bash
cabal build
cabal exec site build
```

A couple more commands worth knowing:

- `cabal exec site watch`: rebuilds on save and serves at `http://localhost:8000`
- `cabal exec site clean`: clears the cache and the `generated/` output

## Project structure

- [`content/index.md`](content/index.md): page content
- [`templates/default.html`](templates/default.html): HTML shell
- [`css/style.css`](css/style.css): styles
- [`site.hs`](site.hs): build rules
- [`generated/`](generated/): the built output that gets deployed, so don't edit it by hand
- [`.github/workflows/static.yml`](.github/workflows/static.yml): the GitHub Pages workflow
- [`venus-vavadiya-resume.pdf`](venus-vavadiya-resume.pdf): PDF resume

## Editing content

All content lives in [`content/index.md`](content/index.md), with the layout composed from Pandoc fenced divs: `.container` wraps the page, `.intro` holds the header, and `.experiences` contains a series of `.experience` blocks. Each experience block follows the same shape: a `###` title, a `<small>` line with the company and dates, an italic one-liner about the company, a few bullet points, and a closing `Technologies:` line.

## Deployment

Pushing to `main` runs [`.github/workflows/static.yml`](.github/workflows/static.yml), which uploads `generated/` to GitHub Pages.

One thing to remember: CI doesn't run the build. Run `cabal exec site build` locally and commit `generated/`, otherwise your changes won't show up live.
