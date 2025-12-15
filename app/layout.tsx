import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/ui/Navigation'
import { PageTransition } from '@/components/ui/PageTransition'

export const metadata: Metadata = {
  title: 'Yang Zhenzhao - AI Engineer & Full-Stack Developer',
  description: 'Computer Engineering student at NUS specializing in AI/ML, full-stack development, and innovative tech solutions.',
  keywords: ['Yang Zhenzhao', 'AI Engineer', 'Full-Stack Developer', 'Computer Engineering', 'NUS', 'Machine Learning'],
  authors: [{ name: 'Yang Zhenzhao' }],
  openGraph: {
    title: 'Yang Zhenzhao - AI Engineer & Full-Stack Developer',
    description: 'Computer Engineering student at NUS specializing in AI/ML, full-stack development, and innovative tech solutions.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e1e2e',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-ctp-base text-ctp-text">
        <PageTransition />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
