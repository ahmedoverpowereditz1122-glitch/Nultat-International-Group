// components/ClientLayout.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import { usePathname } from 'next/navigation'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Check if current page is real estate service
  const isRealEstateActive = pathname === '/services/real-estate'

  return (
    <>
      <Navbar isRealEstateActive={isRealEstateActive} />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  )
}