import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="max-width relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
