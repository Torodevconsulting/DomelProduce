import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import CookiePolicy from "@/components/cookie-policy"
import GoogleAnalytics from "@/components/google-analytics"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Domel Produce - Fresh Produce Exports from Peru",
  description: "Premium exporter of Peruvian avocados, mangoes, grapes, lemons, tangerines and more.",
  icons: {
    icon: '/favicon.ico',
    // You can also add other sizes if needed
    apple: '/apple-touch-icon.png',
    favicon16:'/favicon-16x16.png',
    favicon32:'/favicon-32x32.png',
    chrome512:'/android-chrome-512x512.png',
    chrome192:'/android-chrome-192x192.png',

  },
  generator: 'ToroDevelopmentConsulting',
  keywords: [
    "Peruvian produce", "fresh fruit export", "avocado export", "mango export", 
    "grape export", "Peruvian agriculture", "premium fruit", "fresh produce", 
    "Domel Produce", "fruit exporter Peru", "quality produce", "sustainable farming", 
    "organic produce", "local produce", "Peruvian produce", "avocado exporter", "mango exporter",
    "grape exporter", "Peruvian agriculture", "premium fruit", "fresh produce", "Domel Produce", "Beans Exporter", "Citrus Exporter", "Tangerines Exporter", "Lemons Exporter", "Peruvian produce", "avocado exporter", "mango exporter", "grape exporter", "Peruvian agriculture", "premium fruit", "fresh produce", "Domel Produce", "Beans Exporter", "Citrus Exporter", "Tangerines Exporter", "Lemons Exporter", "Productos peruanos", "exportación de fruta fresca", "exportación de aguacate", "exportación de mango",
    "exportación de uva", "agricultura peruana", "fruta premium", "productos frescos",
    "Domel Produce", "exportador de fruta Perú", "productos de calidad", "agricultura sostenible",
    "productos orgánicos", "productos locales", "productos peruanos", "exportador de aguacate", "exportador de mango",
    "exportador de uva", "agricultura peruana", "fruta premium", "productos frescos", "Domel Produce", "Exportador de Frijoles", "Exportador de Cítricos", "Exportador de Mandarinas", "Exportador de Limones", "productos peruanos", "exportador de aguacate", "exportador de mango", "exportador de uva", "agricultura peruana", "fruta premium", "productos frescos", "Domel Produce", "Exportador de Frijoles", "Exportador de Cítricos", "Exportador de Mandarinas", "Exportador de Limones"
  ],
  openGraph: {
    title: "Domel Produce - Premium Peruvian Fruit Exporter",
    description: "Exporting the finest Peruvian avocados, mangoes, grapes, and citrus fruits to global markets.",
    url: "https://domelproduce.com",
    siteName: "Domel Produce",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false}>
          <Navbar />
          {children}
          <CookiePolicy />
          <GoogleAnalytics />
          <Analytics /> {/* Added Vercel Analytics component */}
        </ThemeProvider>
      </body>
    </html>
  )
}