# zappale.github.io

The official website of **Zappale** — a keyboard-first launcher for macOS.

Live at:

- https://zappale.com (custom domain, Cloudflare Pages)
- https://zappale.pages.dev (Cloudflare Pages)
- https://zappale.github.io (GitHub Pages)

## Stack

- Pure static site: HTML + CSS + vanilla JS, no build step, no dependencies
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) and [Inter](https://fonts.google.com/specimen/Inter), self-hosted in `assets/fonts/` (no third-party font CDN)
- Hero illustration generated with GPT Image 2, served as WebP with a JPEG fallback
- Design language: warm paper (`#FAF6EF`), ink serif display, one orange accent (`#D9531E`) — "field manual" edition, mobile-first responsive

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
