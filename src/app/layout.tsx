import './globals.css'
import "@fontsource/poppins"
import Home from './home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welleplan',
  description: 'Welleplan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <Home children={children}></Home>
      </body>
    </html>
  )
}
