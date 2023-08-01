import '@/style/globals.scss'
import type { Metadata } from 'next'
import { useEffect } from 'react'
import Analytics from 'react-ga'

export const metadata: Metadata = {
  title: "Alex Salerno's Site",
  description: "",
}

const GTAG = "G-LH0F01NP3E"
Analytics.initialize(GTAG)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // pageview event on component mount
  useEffect(() => {
    Analytics.pageview(window.location.pathname)
  })

  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  )
}
