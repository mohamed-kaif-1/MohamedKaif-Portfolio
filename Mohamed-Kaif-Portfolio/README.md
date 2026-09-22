# Mohamed Kaif — complete local portfolio

This export contains the portfolio's HTML, CSS, JavaScript, animation libraries, images, fonts, 341-frame scroll sequence, selected portrait, and all nine current project-interface thumbnails. The site uses plain HTML/CSS/JavaScript; `dist` contains editable source files, not a compiled React app.

## Run on Windows

1. Extract this ZIP completely.
2. Ensure Node.js is installed (`node --version` in a terminal).
3. Open the `Mohamed-Kaif-Portfolio` folder.
4. Double-click `START_LOCAL.bat`.
5. Open **http://localhost:3000** if the browser does not open automatically.

Keep the terminal open. Press **Ctrl+C** to stop the server.

## Run from a terminal (all platforms)

Open a terminal inside this folder and run:

```sh
node server.mjs
```

Alternatively, run `npm start` or `npm run dev`. No `npm install` is required: the server uses only Node.js built-in modules, and the site's animation libraries are bundled.

If you use Python instead of Node.js:

```sh
python -m http.server 3000 --bind 127.0.0.1 --directory dist
```

On Windows, `py` may be used in place of `python`. On macOS/Linux, use `python3` when applicable.

## Pages

| Page | Local address | Source |
| --- | --- | --- |
| Home | http://localhost:3000/ | `dist/index.html` |
| Work | http://localhost:3000/works/ | `dist/works/index.html` |
| Info | http://localhost:3000/info/ | `dist/info/index.html` |
| Contact | http://localhost:3000/contact/ | `dist/contact/index.html` |

## Folder and code guide

| File or folder | Purpose |
| --- | --- |
| `server.mjs` | Local development HTTP server on port 3000 |
| `START_LOCAL.bat` | Windows launcher that starts the server and opens the browser |
| `package.json` | Optional npm start/dev shortcuts; no dependencies |
| `dist/index.html` | Home content, portrait, project list and galleries |
| `dist/works/index.html` | Work page markup |
| `dist/info/index.html` | About/Info content and portrait |
| `dist/contact/index.html` | Contact links and content |
| `dist/styles/` | Page layouts, typography, responsive styling and visual effects |
| `dist/js/index.js` | Home animation logic and project-detail content |
| `dist/js/works.js` | Work project data, covers and animations |
| `dist/js/info.js`, `dist/js/contact.js` | Info and Contact page behavior |
| `dist/js/i18n.js` | Text/language handling |
| `dist/js/core-renderer.js`, `dist/js/hero-project.js` | Hero/WebGL rendering |
| `dist/js/vendor/` | Bundled GSAP, ScrollTrigger and Lenis |
| `dist/assets/images/kaif/` | Portrait, current product previews and earlier project assets |
| `dist/assets/images/hero sequence/` | All 341 scroll-animation frames |
| `dist/assets/fonts/` | Bundled custom fonts |
| `dist/assets/favicon/` | Site icons |
| `scripts/create-project-previews.py` | Editable generator for the nine SVG interface previews |
| `docs/artwork-prompts.json` | Historical prompts for the earlier artwork |
| `DESIGN_NOTES.md` | Design attribution and project notes |

## Editing

- **Name, bio and contact:** edit the relevant HTML pages. Check `dist/js/i18n.js` if a language-specific string overrides visible text.
- **Project descriptions:** edit the `PROJECTS` data in `dist/js/index.js` and `dist/js/works.js`. Home project labels are also in `dist/index.html`.
- **Portrait:** replace `dist/assets/images/kaif/portrait-selected.png`, or change the image references in Home and Info.
- **Thumbnails:** edit the `*-product-preview.svg` files, or edit and run `python scripts/create-project-previews.py`. The generator uses only Python's standard library. These are labeled interface concepts with sample data, not screenshots of running products.
- **Layout and motion:** the original CSS and animation logic are preserved. Keep asset paths and project IDs consistent when editing them.
- Save changes and refresh your browser. There is no build step or automatic hot reload.

## Troubleshooting

- **Blank images or broken navigation:** extract the whole ZIP, start the server from this folder and use `http://localhost:3000`. Do not open HTML directly with a `file://` address, and do not serve the parent directory instead of `dist`.
- **Port 3000 already in use:** stop the other process, or use a different port. PowerShell: `$env:PORT=3001; node server.mjs`. Command Prompt: `set PORT=3001` followed by `node server.mjs`. macOS/Linux: `PORT=3001 node server.mjs`.
- **External font appearance:** Google Fonts' Inter stylesheet needs internet. Custom bundled fonts and animation libraries are local; external profile links also need internet.
- **Animation performance:** the portfolio includes a long image sequence and WebGL effects. Use a browser with hardware acceleration enabled.

This ZIP contains the portfolio frontend, not the source code of the separate projects featured inside it. No credentials or private hosting tokens are required. Original third-party notices and design attribution are retained; see `DESIGN_NOTES.md` and library file headers.
