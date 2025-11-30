import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "weShield – Women Safety Platform",
  description:
    "Empowering Women Through Smart Safety Technology. A comprehensive women's safety platform with real-time monitoring, SOS alerts, and intelligent protection features.",
  generator: "v0.app",
  icons: {
    // replaced theme-based icons with a single shield image in public/
    icon: [
      {
        url: "/shield.jpg",
        type: "image/jpeg",
      },
    ],
    apple: "/shield.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
