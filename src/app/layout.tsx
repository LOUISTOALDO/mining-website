import './globals.css'

export const metadata = {
  title: 'Mining AI Solutions',
  description: 'Advanced AI solutions for mining operations and equipment monitoring',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
