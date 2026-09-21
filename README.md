# Plans - marketing site

Next.js 15 (App Router) + Tailwind v4 landing page, privacy policy and terms for
the Plans app. Lives beside the Flutter app in `../social_os` and shares its
brand palette (`lib/theme.dart`) and app icon (`assets/icon/`).

```bash
npm install
npm run dev     # http://localhost:3100
npm run build
npm start
```

Do not run `npm run build` while `npm run dev` is live - they share `.next`, and
the build wipes it out from under the dev server.

## Routes

| Route                  | Source                    |
| ---------------------- | ------------------------- |
| `/`                    | `app/page.tsx`            |
| `/privacy`             | `app/privacy/page.tsx`    |
| `/terms`               | `app/terms/page.tsx`      |
| 404                    | `app/not-found.tsx`       |
| `/opengraph-image`     | `app/opengraph-image.tsx` |
| `/robots.txt`          | `app/robots.ts`           |
| `/sitemap.xml`         | `app/sitemap.ts`          |
| `/manifest.webmanifest`| `app/manifest.ts`         |
| `/icon.png`, `/apple-icon.png` | `app/icon.png`, `app/apple-icon.png` |

The link-preview card is generated at build time from `app/opengraph-image.tsx`
(1200 x 630) and reused for Twitter. The landing page also emits JSON-LD for
`SoftwareApplication` and the FAQ.

## Screenshots

Captures live in `public/screenshots/` at 1080 x 2400 and every slot is wired -
see `public/screenshots/README.md`. To point a frame at a different file:

```tsx
<PhoneShot src="/screenshots/home.png" label="Home" />
```

Placeholder and real image share the same frame and aspect ratio, so nothing in
the layout moves when you swap them in.

## Things to change before launch

- `components/site.ts` - `url` is set to `https://plans-web.vercel.app`. Point it
  at the real domain; it drives canonical URLs, OG image URLs, robots and sitemap.
- `app/privacy/page.tsx`, `app/terms/page.tsx` - the `[bracketed]` entity name,
  registered address and liability cap; then a legal review. Once those are
  filled in, drop `<TemplateNotice />` from both pages.
- `app/page.tsx` -> `Download` - the signup form posts to `mailto:` today; point
  `action` at a real endpoint.
- Store buttons in `Download` - swap the "coming soon" chips for real App Store
  and Play links.

## Icons

No icon library. Everything is hand-written SVG in `components/icons.tsx`, drawn
on a 24x24 grid and inheriting `currentColor`. Add new ones there.

The small `LogoMark` in the header and footer is a drawn "P" mark, not the app
icon - the real icon has the word "Plans" in it, which turns to mush at 32px and
duplicates the wordmark beside it. The real icon is used where it has room: the
favicon, the web manifest and the download CTA.
