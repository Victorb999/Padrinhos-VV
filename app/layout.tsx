import Link from 'next/link'
import 'styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="bg-body text-dark">
        <div className="flex bg-purple p-4 items-center justify-center w-full">
          <Link href="/">
            <img
              src="/logo-light.svg"
              className="h-12 mx-4"
              alt="casamento victor e vanessa"
            />
          </Link>
        </div>
        {children}
      </body>
    </html>
  )
}
