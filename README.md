# 1805 Photography website

A 7-page static website built from the design handoff in `design-handoff/`.
It's plain HTML, CSS and a little JavaScript, with **no build step and nothing to install**.

## Files

| File | What it is |
|---|---|
| `index.html` | Home |
| `weddings.html` | Weddings |
| `engagements-proposals.html` | Engagements & Proposals |
| `maternity-family.html` | Maternity & Family |
| `stories.html` | Stories (gallery index) |
| `about.html` | About |
| `contact.html` | Contact form |
| `css/styles.css` | All the styling (colours are at the top) |
| `js/main.js` | Testimonial carousel, FAQ, Stories filter, contact form |
| `design-handoff/` | The original design files, for reference only |

## Preview it

- **Easiest:** double-click `index.html` to open it in your browser.
- **Closer to the real thing:** in this folder, run `python3 -m http.server`,
  then open http://localhost:8000

The contact form only really sends once the site is deployed on Netlify (see below).

## Common edits

- **Text:** open the page's `.html` file, find the sentence and change it.
- **Testimonials on the Home page:** edit the `QUOTES` list at the top of `js/main.js`.
- **Colours:** change the values in `:root` at the top of `css/styles.css`.
- **Hide the Holiday Minis promo:** delete the `<section>` marked
  `SEASONAL` in `index.html` and `maternity-family.html`.
- **Header/footer:** they're copied into every page, so change all 7 files.

## Deploy (Netlify, free)

1. Sign in at netlify.com → "Add new site" → "Import from GitHub" → pick this repo.
2. Leave the build command empty and set the publish directory to `/`.
3. The contact form works automatically. Submissions appear under **Forms** in
   Netlify, where you can turn on email notifications to Manmeet.

## Still TBC (search the files for "TBC" or "TODO")

- Starting prices, Holiday Minis price and dates
- Business email and phone (contact page, footer, and the JSON-LD in `index.html`)
- Real logo file (currently a text wordmark)
- A link for each Stories card to its full gallery
- Confirm "Punjabi and English" and the "family of four" testimonial name
- Photos are hotlinked from Pixieset. Later, swap them for optimised local copies.
