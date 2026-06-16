'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Team', href: '/#team' },
  { name: 'Careers', href: '/#careers' },
  { name: 'Contact', href: '/#contact' },
]

const servicesList = [
  { name: 'Customer Services', href: '/services/customer-services' },
  { name: 'Sales & Marketing', href: '/services/sales-marketing' },
  { name: 'Mobile & Web Development', href: '/services/web-development' },
  { name: 'BPO Services', href: '/services/bpo-services' },
  { name: 'Business Management', href: '/services/business-management' },
  { name: 'Real Estate', href: '/services/real-estate' },
]

interface NavbarProps {
  isRealEstateActive?: boolean
}

export default function Navbar({ isRealEstateActive = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logoImage = isRealEstateActive ? '/real.png' : '/logo2.png'

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(10, 15, 40, 0.97)' : 'rgba(10, 15, 40, 1)',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30,64,175,0.3)' : '1px solid transparent',
      }}
    >
      {/* Top blue accent line */}
      <div style={{ height: '3px', background: 'linear-gradient(to right, #1e3a8a, #1e40af, #3b82f6, #1e40af, #1e3a8a)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ position: 'relative', height: '48px', width: '48px' }}>
              <Image
                src={logoImage}
                alt="Nultat International Group"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '22px',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}>
                {isRealEstateActive ? 'Estate - 27' : 'Nultat'}
              </span>
              {'\u00A0'}
              <span style={{
                color: '#93c5fd',
                fontSize: '10px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontWeight: 600,
                lineHeight: 1.2,
              }}>
                {isRealEstateActive ? 'Real Estate' : 'International Group'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: '32px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                style={{ textDecoration: 'none' }}
                className="nav-link"
              >
                <span style={{
                  color: '#e2e8f0',
                  fontWeight: 500,
                  fontSize: '14px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#60a5fa')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#e2e8f0')}
                >
                  {link.name}
                </span>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: servicesOpen ? '#60a5fa' : '#e2e8f0',
                  fontWeight: 500,
                  fontSize: '14px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s',
                  padding: 0,
                }}
              >
                Services
                <ChevronDown
                  size={14}
                  style={{
                    transition: 'transform 0.25s',
                    transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 16px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '260px',
                      backgroundColor: '#0a0f28',
                      border: '1px solid rgba(30,64,175,0.4)',
                      borderTop: '2px solid #1e40af',
                      padding: '8px 0',
                      zIndex: 99,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                    }}
                  >
                    {servicesList.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        style={{ textDecoration: 'none' }}
                      >
                        <div
                          style={{
                            padding: '10px 20px',
                            fontSize: '13px',
                            color: '#94a3b8',
                            fontWeight: 500,
                            transition: 'all 0.15s',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = 'rgba(30,64,175,0.15)'
                            e.currentTarget.style.color = '#60a5fa'
                            e.currentTarget.style.paddingLeft = '24px'
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'transparent'
                            e.currentTarget.style.color = '#94a3b8'
                            e.currentTarget.style.paddingLeft = '20px'
                          }}
                        >
                          <span style={{ width: '12px', height: '1px', backgroundColor: '#1e40af', flexShrink: 0, display: 'inline-block' }} />
                          {service.name}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <Link
              href="mailto:example@gmail.com"
              style={{
                backgroundColor: '#1e40af',
                color: '#ffffff',
                padding: '10px 24px',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                border: '2px solid #1e40af',
                transition: 'background-color 0.2s',
                display: 'inline-block',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1e3a8a')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1e40af')}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: '#0a0f28',
              borderTop: '1px solid rgba(30,64,175,0.3)',
              overflow: 'hidden',
            }}
            className="md:hidden"
          >
            <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ textDecoration: 'none' }}
                >
                  <div style={{
                    padding: '12px 0',
                    color: '#e2e8f0',
                    fontWeight: 500,
                    fontSize: '14px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid rgba(30,64,175,0.15)',
                  }}>
                    {link.name}
                  </div>
                </Link>
              ))}

              {/* Services mobile */}
              <div style={{ padding: '12px 0', borderBottom: '1px solid rgba(30,64,175,0.15)' }}>
                <div style={{
                  color: '#e2e8f0',
                  fontWeight: 500,
                  fontSize: '14px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}>
                  Services
                </div>
                <div style={{ paddingLeft: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {servicesList.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: '#93c5fd',
                        fontSize: '13px',
                        fontWeight: 500,
                      }}>
                        <span style={{ width: '12px', height: '1px', backgroundColor: '#1e40af', display: 'inline-block', flexShrink: 0 }} />
                        {service.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="mailto:example@gmail.com"
                onClick={() => setIsOpen(false)}
                style={{
                  backgroundColor: '#1e40af',
                  color: '#ffffff',
                  padding: '12px 24px',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'center',
                  marginTop: '12px',
                  border: '2px solid #1e40af',
                }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
