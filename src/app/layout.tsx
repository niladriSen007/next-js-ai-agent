import ConvexClientProvider from "@/provider/ConvexClientProvider"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { NavigationProvider } from "@/provider/NavigationProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <NavigationProvider>
      <ConvexClientProvider>
        <html lang="en" >
          <body className="bg-gradient-to-br from-slate-900 to-slate-950 text-white">{children}</body>
        </html>
      </ConvexClientProvider>
    </NavigationProvider>
  )
}
