import type { Metadata } from 'next'

import type { ReactNode } from 'react'

import clsx from 'clsx'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import './global.css'
import { OpenpanelProvider } from '@openpanel/nextjs'
import { ViewTransitions } from 'next-view-transitions'

export const metadata: Metadata = {
  metadataBase: new URL('https://leerob.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Francis Masha',
    template: '%s | Francis Masha',
  },
  description: 'Frontend developer, optimist, community builder.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={clsx(
          'scroll-smooth bg-white text-black antialiased',
          // fontSans.variable,
          GeistMono.variable,
          GeistSans.variable,
        )}
      >
        <OpenpanelProvider
          clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID as string}
          trackScreenViews
          trackAttributes
          trackOutgoingLinks
        />
        <body className="antialiased tracking-tight">
          <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 bg-white text-gray-900">
            <main className="max-w-[60ch] mx-auto w-full space-y-6">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </ViewTransitions>
  )
}

function Footer() {
  const links = [
    { name: 'code', url: 'https://code.francismasha.com' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/francis-masha' },
    { name: 'github', url: 'https://github.com/mashafrancis' },
  ]

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}
