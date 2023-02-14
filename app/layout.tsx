import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&family=Ms+Madi&family=Oswald:wght@200;300;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-body text-dark">
        <div className="flex bg-purple p-4 items-center">
          <img src="/logo-light.svg" className="h-8 mx-4" />
          <h1 className="font-serif font-bold text-body tracking-wider text-xl">
            Padrinhos
          </h1>
        </div>

        {children}
      </body>
    </html>
  )
}
