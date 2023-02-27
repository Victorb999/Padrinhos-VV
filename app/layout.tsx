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
        <div>
          <Link
            href="/"
            className="flex flex-row p-4 items-center justify-center w-full "
          >
            <img
              src="/logo-dark.svg"
              className="h-12 inline mr-2 md:mr-4"
              alt="casamento victor e vanessa"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-dark tracking-wider text-xl md:text-3xl mr-4">
                Casamento
              </span>
              <span className="font-cursive font-bold text-dark tracking-wider text-xl md:text-2xl mr-4">
                Victor e Vanessa
              </span>
            </div>
          </Link>
        </div>
        {children}
      </body>
    </html>
  )
}
