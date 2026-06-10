import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Sora, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
})

const sora = Sora({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://md-atif-shaikh.vercel.app'),
  title: {
    default: 'Md Atif Shaikh — Full Stack Developer',
    template: '%s · Md Atif Shaikh',
  },
  description:
    'Full Stack Developer with 2+ years of experience building scalable, real-time web and desktop applications with React, Next.js, Node.js, MongoDB, Redis, and AWS.',
  keywords: [
    'Md Atif Shaikh',
    'Full Stack Developer',
    'React Developer',
    'Next.js',
    'Node.js',
    'TypeScript',
    'MongoDB',
    'Software Engineer Portfolio',
  ],
  authors: [{ name: 'Md Atif Shaikh' }],
  creator: 'Md Atif Shaikh',
  openGraph: {
    type: 'website',
    title: 'Md Atif Shaikh — Full Stack Developer',
    description:
      'Full Stack Developer building scalable, real-time web and desktop applications.',
    siteName: 'Md Atif Shaikh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Atif Shaikh — Full Stack Developer',
    description:
      'Full Stack Developer building scalable, real-time web and desktop applications.',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
