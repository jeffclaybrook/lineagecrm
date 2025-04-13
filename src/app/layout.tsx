import type { Metadata } from "next"
import { Mulish } from "next/font/google"
import { ReactNode } from "react"
import Footer from "@/components/footer"
import "./globals.css"

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "LineageCRM",
  description: "Capture, track, and analyze lead data in one integrated platform, ensuring that every customer interaction is meaningful and productive.",
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${mulish.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}