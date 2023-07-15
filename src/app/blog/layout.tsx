import '@/style/blog.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Alex's Blog",
  description: "",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="blog-content">
        {children}
    </div>
  )
}
