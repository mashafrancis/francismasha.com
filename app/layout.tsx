import type { Metadata } from 'next'

import type { ReactNode } from 'react'

import Footer from '@/components/Footer'
import { Grid } from '@/components/Grid'
import LayoutNavigation from '@/components/LayoutNavigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import '@/css/fonts.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import clsx from 'clsx'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import './global.css'
import { OpenpanelProvider } from '@openpanel/nextjs'

const title = 'Masha Portfolio'
const description = 'A software engineer learning'

export const metadata: Metadata = {
  metadataBase: new URL('https://safaricomobservability.com/'),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  manifest: '/manifest.json',
  keywords: [
    'Monitoring',
    'Open Source app analytics',
    'safaricom',
    'safaricom observability',
  ],
  icons: {
    icon: '/static/favicons/favicon.ico',
    shortcut: '/static/favicons/favicon-16x16.png',
    apple: '/static/favicons/apple-touch-icon.png',
  },
  appleWebApp: {
    title,
    capable: true,
    statusBarStyle: 'black-translucent',
    startupImage: ['/apple-touch-icon.png'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(
        'scroll-smooth bg-white text-black dark:bg-[#111010] dark:text-white antialiased',
        // fontSans.variable,
        GeistMono.variable,
        GeistSans.variable,
      )}
    >
      <OpenpanelProvider
        clientId={process.env.OPENPANEL_CLIENT_ID}
        trackScreenViews={true}
        trackAttributes={true}
        trackOutgoingLinks={true}
        // If you have a user id, you can pass it here to identify the user
        // profileId={'123'}
      />
      <body className="duration-400 bg-white text-black antialiased transition dark:bg-gray-800 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <LayoutNavigation />
            <main className="mb-8 flex-1">
              <Grid>
                <div className="col-span-full mb-auto px-4 sm:px-6 lg:col-span-8 lg:col-start-3 xl:px-0">
                  {children}
                </div>
              </Grid>
            </main>
            <Footer />
          </div>
          {/*<Analytics />*/}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
