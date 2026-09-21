# App screenshots

Captures are 1080 x 2400 (9:20), which is exactly the aspect ratio of the phone
frame in `components/screenshot.tsx` - so nothing is cropped. Keep new ones at
that size.

| File                | Where it appears           |
| ------------------- | -------------------------- |
| `home.png`          | Hero, centre phone         |
| `discover.png`      | Hero, left phone           |
| `plan-chat.png`     | Hero right phone + step 03 |
| `create-plan.png`   | "How it works", step 01    |
| `nearby-map.png`    | "How it works", step 02    |
| `moments.png`       | "How it works", step 04    |
| `notifications.png` | Reminders section          |

Every slot is wired. To swap a capture, drop the new file in at the same name.

Notes:

- A frame with a real `src` drops the drawn notch, since the capture already
  includes the device status bar.
- `WideShot` (16:10) is available in `components/screenshot.tsx` for a tablet or
  landscape crop. Nothing uses it right now - every current capture is a phone.
- The app icon lives at `public/app-icon.png` (and `app/icon.png` /
  `app/apple-icon.png`), copied from `../social_os/assets/icon/`.
