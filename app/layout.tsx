import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'TWS Liquid Chef',
  description: 'Premium mixology for corporate events, weddings & private celebrations'
}

export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
