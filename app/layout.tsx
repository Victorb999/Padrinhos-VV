import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />

      <body>
        <h1>PADRINHOS</h1>

        {children}
      </body>
    </html>
  )
}
