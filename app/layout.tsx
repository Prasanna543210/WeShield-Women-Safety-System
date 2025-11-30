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
        <footer className="w-full mt-8 py-6 bg-transparent text-center text-sm text-gray-700 dark:text-gray-300">
          <span>
            We build a safer world, one smart step at a time.
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block ml-2 align-middle w-4 h-4 text-red-600"
              viewBox="0 0 24 24"
              fill="#ffffff"                /* white fill */
              stroke="currentColor"         /* red border via text-red-600 */
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.76 4.5 2.09C13.09 3.76 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
        </footer>
      </body>
    </html>
  )
}
