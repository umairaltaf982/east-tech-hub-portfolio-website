# East Tech Hub — website

Marketing site for East Tech Hub, built with **Next.js 15 (App Router) + TypeScript**.
Static by design: no database, no admin portal, no server state.

---

## Run it locally

You need **Node.js 18.18 or newer** (Node 20 or 22 recommended).

```bash
cd east_tech_hub_website
npm install
npm run dev
```

Then open **http://localhost:3000**.

Production check:

```bash
npm run build
npm start
```

---

## What is in here

```
app/
  layout.tsx           header, footer, WhatsApp button, fonts, Organization schema
  page.tsx             homepage
  globals.css          the entire design system (tokens at the top)
  about/               about + coverage + onboarding
  services/            index and the four department pages
  team/                roster and one profile page per person
  blog/                index and one page per article
  careers/             open roles; Apply opens an email to info@easttechhub.com
  contact/             enquiry form, contact details, desk hours
  schedule/            call-booking form
  privacy/ terms/      legal templates — have these reviewed
  not-found.tsx        branded 404
  sitemap.ts robots.ts generated automatically
components/            Header, Footer, EnquiryForm, Icons, Reveal, shared sections
lib/
  site.ts              phone, email, address, socials, stats, client marks
  services.ts          the four departments and everything on their pages
  team.ts              the seven team members
  content.ts           blog posts, testimonials, case studies, industries, jobs
public/images/         all photography and both logo variants
```

**All the words live in `lib/`.** To change copy, edit a data file — you should
rarely need to touch a page component.

---

## Design system

Tokens are the `:root` block at the top of `app/globals.css`.

| Token | Value | Used for |
|---|---|---|
| `--ink` | `#0E1B2E` | body text |
| `--navy` | `#16305C` | headings, dark surfaces |
| `--azure` | `#0F84C9` | primary accent, buttons, links |
| `--azure-lt` / `--azure-dk` | `#2FA8E4` / `#0C6BA6` | gradient ends |
| `--soft` | `#5A6A82` | secondary text |

Typeface: **Manrope**, self-hosted through `next/font` (no external request, no layout shift).

The layout is the hybrid you picked: a full-bleed photographic hero with a dark
scrim and fitted text, and light-glass everything else — floating pill navigation,
frosted panels on a soft blue gradient, rounded photo cards.

---

## Things to change before you go live

1. **Client marks.** `lib/site.ts` → `clientMarks` currently holds six invented
   placeholder names. Replace them with real clients you have written permission
   to name, or delete the array and the strip disappears.
2. **Case studies.** `lib/content.ts` → `cases`. Written anonymised by sector and
   country. Swap in named clients if you have sign-off.
3. **Team photos.** Drop a photo at `public/images/team/<slug>.jpg` and set the
   `photo` field for that person in `lib/team.ts`. Until then a branded initials
   tile is shown.
4. **Domain.** `lib/site.ts` → `url`. This feeds metadata, sitemap and robots.
5. **Legal pages.** `app/privacy` and `app/terms` are starting templates. Have
   them reviewed.

---

## Forms

Both forms work with **no backend**: they validate, then open the visitor's email
client with everything filled in, addressed to `info@easttechhub.com`.

To deliver submissions automatically instead, create a free endpoint at
[Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) and add it
to `.env.local`:

```
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

No other change needed — `components/EnquiryForm.tsx` posts to it when it is set.

---

## Push to GitHub

```bash
cd east_tech_hub_website
git init
git add .
git commit -m "East Tech Hub website"
git branch -M main
git remote add origin https://github.com/<your-account>/east-tech-hub-website.git
git push -u origin main
```

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
2. Vercel detects Next.js — leave every build setting on its default.
3. If you added `NEXT_PUBLIC_FORM_ENDPOINT`, add it under **Settings → Environment Variables**.
4. Deploy, then add `easttechhub.com` under **Settings → Domains** and follow the DNS instructions.

Every push to `main` redeploys automatically.

---

## Notes

- Images use `next/image`, so they are served as AVIF/WebP at the right size.
- The hero image is marked `priority` — it is the Largest Contentful Paint element.
- Content is visible without JavaScript; the scroll fade-in is progressive enhancement
  and is disabled for anyone with reduced-motion turned on.
- There is no database, no login and no admin panel, by design.

## Photography credit

Photographs are from [Unsplash](https://unsplash.com) under the Unsplash licence
(free for commercial use, no attribution required). Replace them with photographs
of your own floor and team when you have them — it will do more for credibility
than anything else on this list.

---

## Troubleshooting

### `Cannot find module './124.js'` (or any `.next/server/chunks/*.js`)

The `.next` folder holds output from a **dev** run and a **production** build at the
same time. Next reads a manifest from one and looks for a chunk in the other.

```bash
npm run clean     # removes .next
npm run dev       # or: npm run build && npm start
```

Never run `next dev` and `next build` against the same `.next` without clearing it
in between. `npm run rebuild` does the clear and the build in one step.

### A page looks empty until I reload

Fixed in this version. The scroll fade-in now re-runs on every client-side
navigation, only hides content that is below the fold, and has a four-second
failsafe — so a page can never be left blank.
# east-tech-hub-portfolio-website
