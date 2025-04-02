import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import CookiePolicy from "@/components/cookie-policy"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Domel Produce - Fresh Quality Produce from Peru",
  description: "Premium exporter of Peruvian avocados, mangoes, grapes, lemons, tangerines and more. High-quality fresh produce for global markets.",
  generator: 'ToroDevelopmentConsulting',
  keywords: [
    "Peruvian produce", "fresh fruit export", "avocado export", "mango export", 
    "grape export", "Peruvian agriculture", "premium fruit", "fresh produce", 
    "Domel Produce", "fruit exporter Peru", "quality produce", "sustainable farming", 
    "organic produce", "local produce", "Peruvian produce", "avocado exporter", "mango exporter",
    "grape exporter", "Peruvian agriculture", "premium fruit", "fresh produce", "Domel Produce", "Beans Exporter", "Citrus Exporter", "Tangerines Exporter", "Lemons Exporter", "Peruvian produce", "avocado exporter", "mango exporter", "grape exporter", "Peruvian agriculture", "premium fruit", "fresh produce", "Domel Produce", "Beans Exporter", "Citrus Exporter", "Tangerines Exporter", "Lemons Exporter"
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
        </ThemeProvider>
      </body>
    </html>
  )
}