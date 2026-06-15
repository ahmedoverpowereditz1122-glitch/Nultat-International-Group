// app/page.tsx
'use client'

import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import Clients from './components/Clients'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import WhatsAppButton from './components/Whatsapp'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Clients />
      <Careers />
      <Contact />
      <Footer />

      {/* Floating widgets */}
      <WhatsAppButton />
      <Chatbot />
    </motion.main>
  )
}
