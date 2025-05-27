import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'machinesoflovinggrace',
  description: 'machines of loving grace ',
  generator: 'molg',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
