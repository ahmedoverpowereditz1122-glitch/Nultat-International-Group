'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  { id: 1, name: 'Client 1', logo: '/idera.png' },
  { id: 2, name: 'Client 2', logo: '/omc.png' },
  { id: 3, name: 'Client 3', logo: '/kwlogo.png' },
  { id: 4, name: 'Client 4', logo: '/alliancelogo.png' },
  { id: 5, name: 'Client 5', logo: '/tcp.png' },
  { id: 6, name: 'Client 6', logo: '/primus.png' },
  { id: 7, name: 'Client 7', logo: '/berry.png' },
  { id: 8, name: 'Client 8', logo: '/century.png' },
]

export default function Clients() {
  return (
    <section
      style={{
        backgroundColor: '#f8faff',
        padding: '96px 0',
        fontFamily: "'Inter', sans-serif",
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
            <span style={{ display: 'inline-block', width: '40px', height: '2px', backgroundColor: '#1e40af' }} />
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#1e40af',
            }}>
              Trusted By
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: 800,
            color: '#1e3a8a',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}>
            Our <span style={{ color: '#1e40af' }}>Clients</span>
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#64748b',
            lineHeight: 1.7,
            maxWidth: '400px',
          }}>
            Trusted by industry leaders and growing businesses worldwide.
          </p>
        </motion.div>
      </div>

      {/* Ticker — full bleed */}
      <div style={{ position: 'relative' }}>
        {/* Left fade */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(to right, #f8faff, transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: 'linear-gradient(to left, #f8faff, transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }} />

        {/* Top & bottom border lines */}
        <div style={{ borderTop: '1px solid #dbeafe', borderBottom: '1px solid #dbeafe', padding: '0' }}>
          <div style={{ overflow: 'hidden', padding: '28px 0' }}>
            <motion.div
              style={{ display: 'flex', gap: '2px' }}
              animate={{ x: [0, -(clients.length * 202)] }}
              transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            >
              {[...clients, ...clients, ...clients].map((client, idx) => (
                <div
                  key={`${client.id}-${idx}`}
                  style={{
                    flexShrink: 0,
                    width: '200px',
                    height: '88px',
                    backgroundColor: '#ffffff',
                    borderLeft: '1px solid #dbeafe',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px 24px',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#eff6ff')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ffffff')}
                >
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      style={{ objectFit: 'contain', filter: 'grayscale(100%) opacity(0.6)', transition: 'filter 0.2s' }}
                      onMouseEnter={e => ((e.target as HTMLImageElement).style.filter = 'grayscale(0%) opacity(1)')}
                      onMouseLeave={e => ((e.target as HTMLImageElement).style.filter = 'grayscale(100%) opacity(0.6)')}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ maxWidth: '1200px', margin: '56px auto 0', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            borderTop: '1px solid #dbeafe',
            borderBottom: '1px solid #dbeafe',
          }}
          className="clients-stats"
        >
          {[
            { value: '50+', label: 'Clients Served' },
            { value: '10+', label: 'Years of Trust' },
            { value: '100%', label: 'Retention Rate' },
          ].map((stat, i, arr) => (
            <div
              key={stat.label}
              style={{
                padding: '32px 0',
                textAlign: 'center',
                borderRight: i < arr.length - 1 ? '1px solid #dbeafe' : 'none',
              }}
            >
              <div style={{
                fontSize: '36px',
                fontWeight: 800,
                color: '#1e3a8a',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: '6px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#94a3b8',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}