import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const bucklaneScript = localFont({
  src: '../public/fonts/BucklaneScript_PERSONAL_USE_ONLY.otf',
  variable: '--font-bucklane-script',
  display: 'swap',
})

const helloValentina = localFont({
  src: '../public/fonts/Hello Valentina.ttf',
  variable: '--font-hello-valentina',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JDP Experience',
  description: 'JDP Experience',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className={`${bucklaneScript.variable} ${helloValentina.variable}`}>{children}</body>
    </html>
  )
}
