'use client'

import { motion } from 'framer-motion'
import SafeStyle from './SafeStyle'

const teamMembers = [
  {
    name: 'Hamad Abbasi',
    position: 'Chairman & Founder',
    image: '/hamad.JPG',
    bio: 'Visionary leader with extensive experience in business development and customer service excellence.',
    initials: 'HA',
  },
  {
    name: 'Faraz Khattak',
    position: 'Director Operations',
    image: '/faraz.JPG',
    bio: 'Expert in operational management and team leadership with a proven track record across global clients.',
    initials: 'FK',
  },
  {
    name: 'Muhammad Salman',
    position: 'Manager Administration',
    image: '/salman.JPG',
    bio: 'Dedicated administration professional ensuring smooth day-to-day operations and organizational efficiency.',
    initials: 'MS',
  },
  {
  name: 'Muhammad Sami',
  position: 'Manager Operations',
  image: '/sami.JPG',
  bio: 'Skilled operations professional committed to delivering seamless processes and outstanding service.',
  initials: 'MS',
},
]

export default function Team() {
  return (
    <section
      id="team"
      style={{
        backgroundColor: '#ffffff',
        padding: '96px 0',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '64px' }}
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
              The People Behind It
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
            Our <span style={{ color: '#1e40af' }}>Leadership</span>
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#64748b',
            lineHeight: 1.7,
            maxWidth: '480px',
          }}>
            Meet the dedicated professionals driving excellence at Nultat International Group.
          </p>
        </motion.div>

        {/* Cards grid - changed to 2 columns */}
        <div
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2px',
            backgroundColor: '#dbeafe',
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              style={{ backgroundColor: '#ffffff' }}
            >
              <div
                className="team-card"
                style={{ transition: 'background-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#eff6ff')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ffffff')}
              >
                {/* Avatar block */}
                <div style={{
                  position: 'relative',
                  height: '300px',
                  backgroundColor: '#0f1f4d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                  {/* Subtle diagonal stripe pattern */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 24px)',
                  }} />

                  {/* Index label top-right */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    color: '#93c5fd',
                    textTransform: 'uppercase',
                    zIndex: 3,
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Image with contain so full photo is visible */}
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center bottom',
                        position: 'absolute',
                        inset: 0,
                        zIndex: 1,
                        padding: '12px 0 0 0',
                      }}
                      onError={e => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '88px',
                      height: '88px',
                      border: '2px solid rgba(96,165,250,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      <span style={{
                        fontSize: '28px',
                        fontWeight: 800,
                        color: '#ffffff',
                        letterSpacing: '-0.02em',
                      }}>
                        {member.initials}
                      </span>
                    </div>
                  )}

                  {/* Bottom blue accent bar */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    backgroundColor: '#1e40af',
                    zIndex: 2,
                  }} />
                </div>

                {/* Content */}
                <div style={{ padding: '28px 32px 32px' }}>
                  <h3 style={{
                    fontSize: '19px',
                    fontWeight: 800,
                    color: '#1e3a8a',
                    letterSpacing: '-0.02em',
                    marginBottom: '4px',
                  }}>
                    {member.name}
                  </h3>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <span style={{ width: '16px', height: '1px', backgroundColor: '#1e40af', display: 'inline-block' }} />
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#1e40af',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}>
                      {member.position}
                    </span>
                  </div>

                  <p style={{
                    fontSize: '14px',
                    color: '#64748b',
                    lineHeight: 1.75,
                    marginBottom: '0',
                  }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SafeStyle>
        {`
        .team-card {
          background-color: #ffffff;
          height: 100%;
        }
        @media (max-width: 900px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
        }
        `}
      </SafeStyle>
    </section>
  )
}
