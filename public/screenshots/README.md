# App screenshots

Drop the real captures here, then point the components at them.

| Suggested file      | Where it appears                  | Ideal size (px) |
| ------------------- | --------------------------------- | --------------- |
| `home.png`          | Hero, centre phone                | 1170 × 2532     |
| `discover.png`      | Hero, left phone                  | 1170 × 2532     |
| `plan-chat.png`     | Hero, right phone                 | 1170 × 2532     |
| `create-plan.png`   | "How it works", step 1            | 1170 × 2532     |
| `nearby-map.png`    | "How it works", step 2            | 1170 × 2532     |
| `moments.png`       | "How it works", step 4            | 1170 × 2532     |
| `notifications.png` | Notifications section (wide crop) | 1600 × 1000     |

Wiring one up:

```tsx
<PhoneShot src="/screenshots/home.png" label="Home" />
```

Leave `src` off and the frame keeps showing the labelled placeholder — the
layout is identical either way, so nothing shifts when you swap them in.
