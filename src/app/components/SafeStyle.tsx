// components/SafeStyle.tsx
'use client'

export default function SafeStyle({ children }: { children: string }) {
  return <style suppressHydrationWarning>{children}</style>
}