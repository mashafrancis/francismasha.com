import { JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = localFont({
  src: [
    {
      path: "../assets/fonts/CircularText-Light.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/CircularText-Book.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/CircularStd-Medium.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/CircularStd-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/CircularStd-Black.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

// Font files can be collocated inside `pages`
export const fontHeading = localFont({
  src: "../assets/fonts/CircularStd-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-heading",
});

export const fontBody = Source_Serif_4({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
});

export const fontMono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

// import { Geist as FontSans, Geist_Mono as FontMono } from "next/font/google";
//
// export const fontSans = FontSans({
//   weight: ["400", "500", "600"],
//   display: "swap",
//   subsets: ["latin"],
//   variable: "--font-sans",
// });
//
// export const fontMono = FontMono({
//   weight: ["400", "500", "600"],
//   display: "swap",
//   subsets: ["latin"],
//   variable: "--font-mono",
// });
