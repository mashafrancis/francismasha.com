import { Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const fontSans = localFont({
  src: [
    {
      path: '../assets/fonts/CircularText-Light.woff2',
      weight: '400',
      style: 'light',
    },
    {
      path: '../assets/fonts/CircularText-Book.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CircularStd-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CircularStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/CircularStd-Black.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});

export const fontMono = Geist_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mono',
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
