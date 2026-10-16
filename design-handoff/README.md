# Handoff: 1805 Photography website

## Overview
A seven-page, wedding-first marketing site for 1805 Photography (Manmeet Mandair), a Punjabi, Sikh and Indian wedding + family photographer in Surrey / the Fraser Valley, BC. It replaces a Pixieset template. Goals: wedding searchers see weddings first, every service has a working inquiry path, prices and direct contact are visible, and galleries read as a business portfolio.

## About the design files
`1805 Website.dc.html` is a **design reference built in HTML** (open it in a browser; `support.js` must sit beside it). It is a prototype of intended look and behaviour, not production code. Recreate it in the target stack (recommended if starting fresh: Astro or Next.js static site, deployed on Vercel/Netlify; images via a CDN with responsive `srcset`). All pages live in one file and switch via in-page state; in production each page is its own route.

## Fidelity
**High fidelity.** Colours, type, spacing, copy and interactions are final, except items marked TBC (see "Open items").

## Routes
| Route | Page | Primary CTA → |
|---|---|---|
| `/` | Home | Inquire about your wedding → `/contact?type=wedding` |
| `/weddings` | Weddings | Check my availability → `/contact?type=wedding` |
| `/engagements-proposals` | Engagements & Proposals | Plan your session → `/contact?type=engagement` |
| `/maternity-family` | Maternity & Family | Book a session → `/contact?type=family` |
| `/stories` | Stories (gallery index) | — |
| `/about` | About | Let's connect → `/contact` |
| `/contact` | Contact | Send message |

Holiday Minis buttons → `/contact?type=holiday-minis` (or the Pixieset booking URL `https://1805photography.pixieset.com/booking/holiday-minis` if she keeps Pixieset booking).

## Design tokens
**Colours**
- Page background `#F7F3EE` (warm off-white)
- Secondary background `#EDE4D8` (sand) — intro strips, testimonial band, alternating rows, form fields, contact sidebar
- Text `#1F1A17` (warm near-black); also dark section + footer background
- Muted text `#5A4F47`; muted text on dark `#D9CFC3`; footer copyright `#A89C90`
- Accent `#8B1E2D` (lehenga red) — primary buttons, eyebrows on light bg, seasonal block; hover `#741826`
- Gold `#B8893B` — pull-quote marks only. On dark/photo backgrounds use lighter gold `#E3C27F` for eyebrows (contrast); on red use `#F2D9A8`
- Hero scrim: `linear-gradient(to top, rgba(20,15,12,.85) 0%, rgba(20,15,12,.3) 50%, rgba(20,15,12,.1) 72%, rgba(20,15,12,.5) 100%)` (top darkening keeps the nav legible). Centred CTA images use a flat `rgba(20,15,12,.5)` overlay.

**Type** (Google Fonts)
- Headlines: Cormorant Garamond 500 (600 for logo/labels), italic 400/500 for subheads and quotes
- Body/UI: Instrument Sans 400/500/600
- Hero H1: `clamp(52px, 8vw, 96px)`, line-height .98
- Section H2: `clamp(40px, 4.4vw, 56px)`, line-height 1–1.02
- Hero subhead: italic serif `clamp(21px, 2.2vw, 26px)`, lh 1.35, max-width ~620px
- Large serif paragraphs (intro strip, callouts): `clamp(28px, 3–3.6vw, 38–46px)`, lh 1.22–1.3
- Body: 18px / 1.65–1.75; small body 16–17px
- Eyebrow: 12px, uppercase, letter-spacing .22em, weight 600
- Buttons + text links: 13px, uppercase, letter-spacing .18em, weight 600, `white-space: nowrap`
- Nav links: 12px uppercase, .18em, weight 500

**Spacing**
- Horizontal page padding: `clamp(20px, 5vw, 72px)`
- Section vertical padding: `clamp(80px, 10vw, 140px)`
- Text column max width ~560–760px (≈60 characters a line)

**Shape**
- Border radius 2px on buttons/inputs. No borders, no shadows, no hairline dividers anywhere (hard rule from the brief). Separation comes from background shifts (off-white / sand / near-black).

## Components
- **Header**: absolutely positioned over each hero, white text. Left: wordmark "1805" (serif 34px, 600) + "PHOTOGRAPHY" (11px, .28em). Right: nav (Weddings, Engagements, Maternity & Family, Stories, About) + solid red "Inquire" button (padding 12×22). Active page: 2px `#E3C27F` underline. Wraps to two rows on narrow screens. Heroes have `padding-top: clamp(150px,18vw,190px)` so the content never collides with the header. **Swap the wordmark for her real logo** (Pixieset asset: `https://images-pw.pixieset.com/profile/210894/75afdb6a7604ac50d97b89b1a2e95bc338a7b18508117b7aba2e5db0b36916d8.png`; needs a light/reversed version for dark heroes).
- **Primary button** (the only button style): `#8B1E2D` bg, `#F7F3EE` text, padding 18×30, radius 2. On red backgrounds it inverts (off-white bg, red text).
- **Text link**: no box; underline, offset 8px, thickness 1.5px; red on light, off-white on dark.
- **Hero**: full-bleed photo, `object-fit: cover`, min-height 90–94vh (64–72vh on Stories/Contact), content bottom-left: eyebrow → H1 → italic subhead → CTA.
- **Service lane** (Home): full-width row, image `flex: 1 1 560px`, min-height `clamp(380px,48vw,640px)`, bleeding to the page edge; text `flex: 1 1 360px`, max 620px. Alternates sides (rows 1 and 3 image left, row 2 image right). Stacks image-on-top on mobile. Contains number eyebrow (01/02/03), H2, body, "from $TBC" line (12px tracked, muted), text link.
- **Offset split** (Philosophy, About story, Weddings approach): 4:5 portrait image beside a text column that starts `clamp(0px, 7–9vw, 100–120px)` below the image top.
- **Dark callout split** (Weddings makeup-artist, Maternity mom callout): near-black section, image half + serif paragraph half.
- **Featured stories grid**: `repeat(auto-fit, minmax(340px,1fr))`, first tile spans 2 rows (masonry feel). Tile: image, red eyebrow category, serif 28px caption.
- **Testimonial carousel** (Home): sand band, gold “ mark (96px), italic serif quote `clamp(28px,3.4vw,42px)`, name (13px tracked), prev/next square buttons (48×48, near-black) + "1 / 3" counter. No stars or avatars.
- **Seasonal banner** (Home): wide image offset right, solid red block absolutely positioned over its left edge (max-width min(500px, 88%)), with eyebrow, H2, body, price/date line, inverted button. Toggleable (seasonal).
- **List rows** (Weddings coverage, Maternity session types): stacked full-width rows alternating sand / transparent; serif label (30–40px) + description + optional "from" price.
- **Horizontal gallery strip** (Weddings): overflow-x scroll, scroll-snap, images height `clamp(360px,44vw,560px)`, mixed 2:3 and 3:2.
- **FAQ accordion** (Weddings): sand section, white-ish (`#F7F3EE`) items, serif 26px question, red +/– toggle, one open at a time.
- **Stories filter**: tab buttons (sand bg; active = near-black bg, off-white text) + card grid `repeat(auto-fill, minmax(420px,1fr))`, 4:5 images.
- **Contact form**: fields on sand bg, no borders, radius 2, 16px padding, 17px text; labels 12px uppercase tracked. Grid `repeat(auto-fit, minmax(260px,1fr))`; message textarea spans full width. Sidebar (sand) with Email, Phone/WhatsApp, Instagram, Studio.
- **Footer**: near-black, logo + service area line, Explore / Contact / Instagram columns, copyright.
- **Sticky mobile CTA**: on Weddings, Engagements and Maternity & Family below 760px wide — fixed bottom bar (near-black) with full-width red button (min-height 52px) using that page's CTA; respects safe-area inset.

## Interactions & behaviour
- Every inquiry button opens Contact with **Type of shoot pre-selected** (`?type=` param → select value). Types: Wedding, Engagement, Proposal, Maternity, Family, Holiday Minis, Other.
- Page navigation scrolls to top.
- Testimonial carousel: prev/next cycles (wraps). Optional autoplay not required.
- FAQ: click toggles; opening one closes others.
- Stories filter: All, Weddings, Engagements & Proposals, Mehndi & Pre-wedding, Maternity & Family.
- Form: required Full name + Email (type=email). On submit show the confirmation panel ("Thank you. Your message is in." / "I'll be in touch within 24 to 48 hours with availability."). Wire to a real form backend (Formspree, Netlify Forms, or her CRM e.g. HoneyBook/Dubsado) and send a copy to her email.
- Hover: primary button darkens to `#741826`.
- Responsive: everything is fluid (flex-wrap / grid auto-fit / clamp). No fixed-width text boxes.

## Content
All final copy is in the HTML file — use it verbatim. Testimonials are her real Love Notes quotes, lightly trimmed. Full versions: https://www.1805photography.com/testimonials/

## Assets
All photos are her own, currently hotlinked from Pixieset (`https://images-pw.pixieset.com/site/2k8eLx/...-1500.jpg`). For production: get final full-res exports, generate responsive sizes (WebP/AVIF), hero under 300KB, lazy-load below the fold. Alt text is written per image in the HTML; reuse it. Image map:
- Home hero: `lworE5/DSCF7607` (bride, red lehenga, curtains)
- Home philosophy: `owXL7n/8T5A4295` (Manmeet, brown blazer)
- Home closing CTA: `4nqjJ1/DSCF1267` (couple on stone steps)
- Weddings hero: `698Yq3/DSCF7519-Copy1` (B&W night kiss)
- Weddings approach: `698dkO/DSCF2723` (groom, forest)
- Weddings makeup callout: `XqybjR/DSCF7375` (bride dressed, golden light)
- Gallery strip: `OYMdq5/DSCF1791`, `alDLnQ/DSCF5480`, `0ayelk/DSCF5277` + above
- Engagements hero: `yVypzJ/DSCF6630` (pickup truck)
- Proposal callout: `xqrDYr/DSCF1055` (beach, candles)
- Maternity hero: `RzqWKM/DSCF8166` (lake)
- Family block: `wkjlX4/DSCF1489` (autumn family)
- About hero: `r9Pp1D/8T5A4154`; About story: `r9PKne/8T5A4965`
- Contact hero: `6AbZEj/DSCF6442-Copy1`
- Stories card, Komal & Kirat: `VbvEdy/DSCF5293`

## SEO / technical (carry over from the audit)
- Keep her existing page titles and meta descriptions (they're well targeted), e.g. "Vancouver Punjabi & Indian Wedding Photographer | 1805 Photography".
- Add LocalBusiness / ProfessionalService JSON-LD (name, Surrey BC, service area, phone, email, sameAs Instagram + Google Business Profile).
- Holiday Minis section must be indexable and show price/dates in HTML, not JS-only.
- Instagram link: `https://www.instagram.com/1805.photography` (the current site's footer link is broken).
- Each Stories card links to its full gallery page (Pixieset client gallery or a native gallery page). Plan for at least 8 galleries.

## Open items (TBC from client)
- Starting prices: weddings, engagements/proposals, maternity, family, seasonal minis
- Holiday Minis price and dates
- Business email and phone/WhatsApp
- Confirm Punjabi + English spoken (About page)
- Family-of-four testimonial attribution (mislabelled on current site)
- Real logo file (light version for dark backgrounds)
- Stories captions were drafted by the designer — confirm with client

## Files
- `1805 Website.dc.html` — full design reference, all 7 pages (open in a browser; page switches via nav)
- `support.js` — runtime needed to open the reference file locally
