# Mini Design System

## Usage

### Fonts

Ensure you have these fonts set in the root layout file.

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
    variable: "--font-roboto",
    subsets: ["latin"],
})

export default function RootLayout() {
    return (
        <html lang="en" className={`${rubik.variable} ${spaceGrotesk.variable} ${robotoMono.variable} h-full antialiased`}>
            ...
        </html>
    )
}
```
