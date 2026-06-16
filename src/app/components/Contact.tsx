'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Clock, ArrowRight } from 'lucide-react'
import SafeStyle from './SafeStyle'

const contactItems = [
  {
    icon: Phone,
    label: 'Call Us',
    lines: ['0092-330-688 7888'],
    sub: 'Monday – Friday, 3pm – 2am PKT',
    href: 'tel:00923306887888',
  },
  {
    icon: Mail,
    label: 'Email Us',
    lines: ['info@nullatinternational.com'],
    sub: 'We reply within 24 hours',
    href: 'mailto:info@nultatinternationalgroup.com',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    lines: ['AliHasnain Plaza, 3rd Floor, Office #303', 'Ghouritown Phase 5, Islamabad, Pakistan'],
    sub: null,
    href: 'https://maps.google.com/?q=Ghouritown+Phase+5+Islamabad',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    lines: ['Mon – Fri: 3:00 pm – 2:00 am'],
    sub: 'Sat – Sun: Closed',
    href: null,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#f8faff',
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
              Reach Out
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
            Get In <span style={{ color: '#1e40af' }}>Touch</span>
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#64748b',
            lineHeight: 1.7,
            maxWidth: '480px',
          }}>
            Ready to work with us? Reach out and let's build something great together.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', backgroundColor: '#dbeafe' }}
          className="contact-grid"
        >
          {/* LEFT — contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', backgroundColor: '#dbeafe' }}
            className="contact-cards"
          >
            {contactItems.map((item) => {
              const Tag = item.href ? 'a' : 'div'
              return (
                <Tag
                  key={item.label}
                  {...(item.href ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div
                    style={{
                      backgroundColor: '#ffffff',
                      padding: '32px 28px',
                      height: '100%',
                      transition: 'background-color 0.2s',
                      cursor: item.href ? 'pointer' : 'default',
                    }}
                    onMouseEnter={e => {
                      if (item.href) (e.currentTarget as HTMLDivElement).style.backgroundColor = '#eff6ff'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLDivElement).style.backgroundColor = '#ffffff'
                    }}
                  >
                    {/* Icon */}
                    <div style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: '#dbeafe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}>
                      <item.icon size={18} style={{ color: '#1e40af' }} />
                    </div>

                    {/* Label */}
                    <div style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#93c5fd',
                      marginBottom: '8px',
                    }}>
                      {item.label}
                    </div>

                    {/* Lines */}
                    {item.lines.map((line, i) => (
                      <p key={i} style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#1e3a8a',
                        lineHeight: 1.5,
                        marginBottom: '2px',
                      }}>
                        {line}
                      </p>
                    ))}

                    {/* Sub */}
                    {item.sub && (
                      <p style={{
                        fontSize: '12px',
                        color: '#94a3b8',
                        marginTop: '6px',
                        lineHeight: 1.5,
                      }}>
                        {item.sub}
                      </p>
                    )}
                  </div>
                </Tag>
              )
            })}
          </motion.div>

          {/* RIGHT — CTA block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              backgroundColor: '#1e3a8a',
              padding: '56px 52px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
            className="contact-cta"
          >
            {/* Diagonal pattern */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 28px)',
            }} />

            {/* Blue accent line top */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: '#1e40af' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#93c5fd',
                marginBottom: '20px',
              }}>
                Let's Talk
              </div>

              <h3 style={{
                fontSize: 'clamp(26px, 3vw, 36px)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '20px',
              }}>
                Ready to grow your business with us?
              </h3>

              <p style={{
                fontSize: '15px',
                color: '#93c5fd',
                lineHeight: 1.75,
                marginBottom: '40px',
                maxWidth: '380px',
              }}>
                We're available around the clock across all time zones. Drop us a message or give us a call — we'll get back to you within 24 hours.
              </p>

              {/* CTA buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '280px' }}>
                <a
                  href="mailto:info@nullatinternational.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#1e40af',
                    color: '#ffffff',
                    padding: '14px 20px',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    border: '2px solid #1e40af',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1e40af')}
                >
                  Send an Email
                  <ArrowRight size={14} />
                </a>

                <a
                  href="tel:00923306887888"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    padding: '14px 20px',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    border: '2px solid rgba(255,255,255,0.25)',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
                >
                  Call Us Now
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <SafeStyle>
        {`
        @media (max-width: 860px) {
            .contact-grid {
                grid-template-columns: 1fr !important;
                }
                .contact-cards {
                    grid-template-columns: 1fr 1fr !important;
                    }
                    .contact-cta {
                        padding: 40px 28px !important;
                        }
                        }
                        @media (max-width: 480px) {
                            .contact-cards {
                                grid-template-columns: 1fr !important;
                                }
                                }
                                `}
                                </SafeStyle>
    </section>
  )
}
