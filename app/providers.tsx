"use client"

import Appbar from "@/components/ui/appbar1"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ClerkProvider } from "@clerk/nextjs"

export default function Provider({ children }: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider 
      appearance={{
        layout: {
          unsafe_disableDevelopmentModeWarnings: true,
        },
      }}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Appbar />
        {children}
      </ThemeProvider>
    </ClerkProvider>
  )
}
