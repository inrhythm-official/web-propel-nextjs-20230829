import '../node_modules/bootstrap/dist/css/bootstrap.css'

export const metadata = {
  title: 'ReadersList',
  description: 'A code along application to learn Next.js.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
