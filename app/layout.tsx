import Link from 'next/link'
import 'styles/globals.css'
import 'styles/atropos.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="bg-gradient-to-r from-purple to-purple-light text-dark">
        <div className="flex bg-dark p-4 items-center justify-center w-full shadow-md shadow-black">
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
