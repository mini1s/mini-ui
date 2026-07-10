# Mini Design System

## Setup

### Installation

```
npm install @minisquare/mini-ui
```

### Fonts

Ensure you have these fonts set up.

`layout.tsx`

```tsx
import { Rubik, Space_Grotesk, Roboto_Mono } from "next/font/google"

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
})

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
})

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
})

export default function RootLayout() {
    return (
        <html
            lang="en"
            className={`${rubik.variable} ${spaceGrotesk.variable} ${robotoMono.variable} h-full antialiased`}
        >
            ...
        </html>
    )
}
```

`globals.css`

```css
@import "tailwindcss";
@import "@minisquare/mini-ui/theme.css";
@import "@minisquare/mini-ui/button.css";
@import "@minisquare/mini-ui/card.css";
@source "../../node_modules/@minisquare/mini-ui/dist";

@theme {
    --font-rubik: var(--font-rubik);
    --font-space-grotesk: var(--font-space-grotesk);
    --font-roboto-mono: var(--font-roboto-mono);
}
```
