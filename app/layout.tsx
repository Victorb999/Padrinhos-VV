import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />

      <body className="bg-body text-dark">
        <div className="flex bg-purple h-14 p-4 items-center">
          <h1>PADRINHOS</h1>
        </div>

        {children}
      </body>
    </html>
  )
}
