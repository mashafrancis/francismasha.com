import localFont from 'next/font/local'

export const fontSans = localFont({
  src: [
    {
      path: '../assets/fonts/personal-regular.woff2',
      weight: '400',
      style: 'light',
    },
    {
      path: '../assets/fonts/personal-regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/personal-medium.woff2',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../assets/fonts/personal-medium.woff2',
      weight: '600',
      style: 'medium',
    },
    {
      path: '../assets/fonts/personal-medium.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-sans',
})
