# zappale.github.io

The official website of **Zappale** — a tiny, native macOS launcher.

Live at:

- https://zappale.pages.dev (Cloudflare Pages)
- https://zappale.github.io (GitHub Pages)

## Stack

- Pure static site: HTML + CSS + vanilla JS, no build step, no dependencies
- Fonts: [Geist](https://vercel.com/font), [Geist Mono](https://vercel.com/font) and [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) via Google Fonts
- Design language: white canvas, near-black ink, `#863BFF` purple accent, glass launcher palette

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
