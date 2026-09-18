# zappale.github.io

The official website of **Zappale** — a keyboard-first launcher for macOS.

Live at:

- https://zappale.com / https://www.zappale.com (custom domain, Cloudflare Pages)
- https://zappale.github.io (GitHub Pages)

## Languages

- `/` — English
- `/zh/` — 简体中文
- `/ja/` — 日本語

Each page is fully translated (content, meta, `hreflang`, `og:locale`) and links
to its counterparts via the header language switcher. Pages are generated from a
single copy source (`gen-site.py`, kept outside the repo) and committed as plain
HTML — no build step at deploy time.

## Stack

- Pure static site: HTML + CSS + vanilla JS, no framework, no build step
- Design language inspired by transitions.dev: near-white canvas, white cards
  with hairline borders, blue accent (`#0073E5`), pill buttons, filter chips,
  system/light/dark appearance toggle
- Fonts: Inter + Roboto Mono, self-hosted in `assets/fonts/`
- Trilingual: EN / 中文 / 日本語 with hreflang and per-language OG tags
- OG share card rendered from HTML (`assets/og.jpg`)

## Development

It is all plain files. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

## Deployment

Every push to `main` deploys automatically via Cloudflare Pages
(framework preset: None, build command: none, output directory: `/`).

## License

MIT — see [LICENSE](LICENSE).
