import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ModalProvider } from '@/components/providers/modal-provider'

// const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KomiCate',
  description: 'Communication app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/komicon.png" type="image/png"/>
        </head>
        <body className={cn(
          "bg-white dark:bg-[#313338]"
        )}>
          <ThemeProvider 
            attribute="class" 
            defaultTheme="dark" 
            enableSystem={false}
            storageKey="discord-theme"
          >
              <ModalProvider />
              {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
