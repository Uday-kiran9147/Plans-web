# App screenshots

Captures are 1080 × 2400 (9:20), which is exactly the aspect ratio of the phone
frame in `components/screenshot.tsx` — so nothing is cropped. Keep new ones at
that size.

| File                | Where it appears                   | Status      |
| ------------------- | ---------------------------------- | ----------- |
| `home.png`          | Hero, centre phone                 | wired       |
| `discover.png`      | Hero, left phone                   | wired       |
| `plan-chat.png`     | Hero right phone + step 03         | wired       |
| `create-plan.png`   | "How it works", step 01            | wired       |
| `nearby-map.png`    | "How it works", step 02            | wired       |
| `notifications.png` | Reminders section                  | wired       |
| `moments.png`       | "How it works", step 04            | **missing** |

`moments.png` is the last one. It still renders a labelled placeholder; to wire
it up, set `src` on step 04 in `app/page.tsx` (`steps[3].shot`).

Notes:

- A frame with a real `src` drops the drawn notch, since the capture already
  includes the device status bar.
- `WideShot` (16:10) is available in `components/screenshot.tsx` for a tablet or
  landscape crop. Nothing uses it right now — every current capture is a phone.
