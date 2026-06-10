import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Cairo, Geist_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/language-context'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { ToastProvider } from '@/components/toast'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const cairo = Cairo({ variable: '--font-cairo', subsets: ['arabic', 'latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'سيزر دايت | Caesar Diet - وجبات دايت صحية في أبها',
  description:
    'Caesar Diet (سيزر دايت) - مطعم وجبات دايت صحية في أبها. كيتو، لو كارب، وأنظمة السعرات. Healthy diet meals in Abha, Saudi Arabia.',
  generator: 'v0.app',
  keywords: ['Caesar Diet', 'سيزر دايت', 'diet meals Abha', 'healthy food', 'keto', 'low carb', 'وجبات صحية'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${cairo.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <ToastProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <FloatingWhatsApp />
          </ToastProvider>
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
