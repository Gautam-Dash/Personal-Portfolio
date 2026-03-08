import type { Metadata } from 'next'
import { Navigation } from '@/components'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gautam Dash - AI Engineer & Backend Developer',
  description:
    'Portfolio of Gautam Dash, an AI Engineer and Backend Developer specializing in scalable AI-powered applications, distributed systems, and RAG-based intelligent systems.',
  keywords: [
    'Gautam Dash',
    'AI Engineer',
    'Backend Developer',
    'Python Developer',
    'RAG Systems',
    'FastAPI',
    'Machine Learning',
  ],
  authors: [{ name: 'Gautam Dash', url: 'https://gautamdash.dev' }],
  openGraph: {
    title: 'Gautam Dash - AI Engineer & Backend Developer',
    description:
      'Results-driven Software Engineer specializing in scalable AI-powered applications and distributed systems.',
    type: 'website',
    url: 'https://gautamdash.dev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gautam Dash Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gautam Dash - AI Engineer & Backend Developer',
    description:
      'Results-driven Software Engineer specializing in scalable AI-powered applications and distributed systems.',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%236366f1'>GD</text></svg>" />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
