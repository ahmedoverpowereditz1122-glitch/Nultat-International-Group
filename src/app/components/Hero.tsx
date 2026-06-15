'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = ['Lead Generation', 'Chat Support', 'Telesales', 'Collections', 'Backend Ops']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/hero.jpg')` }}
        />
        {/* Layered gradient: deep blue-tinted left, fading right */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(105deg, rgba(15,23,60,0.95) 0%, rgba(30,58,138,0.82) 45%, rgba(15,23,60,0.45) 100%)'
        }} />
        {/* Subtle noise texture overlay for depth */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Vertical blue accent line — matches About's design language */}
      <div className="absolute left-0 top-0 bottom-0 z-10 hidden lg:block" style={{ width: '4px', background: 'linear-gradient(to bottom, transparent, #1e40af, transparent)' }} />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">

          {/* Eyebrow label — matches About's "Who We Are" tag */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}
          >
            <span style={{ display: 'inline-block', width: '40px', height: '2px', backgroundColor: '#1e40af' }} />
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#93c5fd',
            }}>
              Islamabad, Pakistan
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h1 style={{
              fontSize: 'clamp(42px, 8vw, 88px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}>
              Adding Value
              <span style={{ display: 'block', color: '#60a5fa' }}>
                in Services
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{
              fontSize: '17px',
              lineHeight: 1.8,
              color: '#cbd5e1',
              marginBottom: '40px',
              maxWidth: '560px',
              fontWeight: 400,
            }}
          >
            A professional, results-driven team delivering top-quality customer services — 
            your single-window partner for lead generation, telesales, chat support, and beyond.
          </motion.p>

          {/* CTA Buttons — sharp corners matching About theme */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}
          >
            <Link
              href="#services"
              style={{
                backgroundColor: '#1e40af',
                color: '#ffffff',
                padding: '14px 32px',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background-color 0.2s',
                border: '2px solid #1e40af',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1e3a8a')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1e40af')}
            >
              Explore Services
            </Link>
            <Link
              href="#contact"
              style={{
                backgroundColor: 'transparent',
                color: '#ffffff',
                padding: '14px 32px',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-block',
                border: '2px solid rgba(255,255,255,0.5)',
                transition: 'border-color 0.2s, background-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#ffffff'
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Service tags strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0', flexWrap: 'wrap' }}
          >
            {services.map((s, i) => (
              <span key={s} style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{
                  fontSize: '12px',
                  color: '#93c5fd',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  {s}
                </span>
                {i < services.length - 1 && (
                  <span style={{ width: '1px', height: '12px', backgroundColor: '#1e40af', margin: '0 14px', display: 'inline-block' }} />
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <div style={{
          width: '24px',
          height: '40px',
          border: '2px solid rgba(255,255,255,0.4)',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '6px',
        }}>
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ width: '3px', height: '8px', backgroundColor: '#60a5fa' }}
          />
        </div>
      </motion.div>
    </section>
  )
}