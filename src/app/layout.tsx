import '@/style/globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Alex Salerno's Site",
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  )
}
