# Plans — marketing site

Next.js 15 (App Router) + Tailwind v4 landing page, privacy policy and terms for
the Plans app. Lives beside the Flutter app in `../social_os` and shares its
brand palette (`lib/theme.dart`).

```bash
npm install
npm run dev     # http://localhost:3100
npm run build
npm start
```

## Pages

| Route      | File                  |
| ---------- | --------------------- |
| `/`        | `app/page.tsx`        |
| `/privacy` | `app/privacy/page.tsx`|
| `/terms`   | `app/terms/page.tsx`  |

## Screenshots

Every app screenshot on the site is a placeholder frame right now. Drop real
captures into `public/screenshots/` (see the table in
`public/screenshots/README.md`) and pass the path:

```tsx
<PhoneShot src="/screenshots/home.png" label="Home" />
```

Placeholder and real image share the same frame and aspect ratio, so nothing in
the layout moves when you swap them in.

## Things to change before launch

- `components/site.ts` — name, domain, support/privacy emails, effective dates.
- `app/privacy/page.tsx`, `app/terms/page.tsx` — the `[bracketed]` entity name,
  registered address and liability cap; then a legal review.
- `app/page.tsx` → `Download` — the signup form posts to `mailto:` today; point
  `action` at a real endpoint.
- Store buttons in `Download` — swap the "coming soon" chips for real App Store
  and Play links.
- `public/icon.svg` — replace with the shipping app icon, and add an
  `app/opengraph-image.png` for link previews.

## Icons

No icon library. Everything is hand-written SVG in `components/icons.tsx`,
drawn on a 24×24 grid and inheriting `currentColor`. Add new ones there.
