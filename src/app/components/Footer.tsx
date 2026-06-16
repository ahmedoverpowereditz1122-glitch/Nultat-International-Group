'use client'

import Link from 'next/link'
import { FaLinkedin, FaFacebook, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaUpwork } from 'react-icons/fa6'
import SafeStyle from './SafeStyle'

const quickLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Our Team', href: '#team' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
]

const services = [
  { name: 'Customer Services', href: '/services/customer-services' },
  { name: 'Sales & Marketing', href: '/services/sales-marketing' },
  { name: 'BPO Services', href: '/services/bpo-services' },
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Real Estate', href: '/services/real-estate' },
]

const socials = [
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaUpwork, href: '#', label: 'Upwork' },
]

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0a0f28',
      color: '#ffffff',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Top accent line */}
      <div style={{ height: '3px', background: 'linear-gradient(to right, #1e3a8a, #1e40af, #3b82f6, #1e40af, #1e3a8a)' }} />

      {/* Main content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px 32px 0' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '2px', backgroundColor: 'rgba(30,64,175,0.15)', marginBottom: '2px' }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div style={{ backgroundColor: '#0a0f28', padding: '0 48px 48px 0' }} className="footer-brand">
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                fontSize: '26px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: '4px',
              }}>
                Nultat
              </div>
              <div style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#93c5fd',
              }}>
                International Group
              </div>
            </div>

            <div style={{ width: '40px', height: '2px', backgroundColor: '#1e40af', marginBottom: '20px' }} />

            <p style={{
              fontSize: '14px',
              color: '#64748b',
              lineHeight: 1.8,
              maxWidth: '280px',
              marginBottom: '32px',
            }}>
              Adding value in services through professional excellence, motivated teams, and around-the-clock client commitment.
            </p>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: '38px',
                    height: '38px',
                    border: '1px solid rgba(30,64,175,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#64748b',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#1e40af'
                    e.currentTarget.style.borderColor = '#1e40af'
                    e.currentTarget.style.color = '#ffffff'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.borderColor = 'rgba(30,64,175,0.4)'
                    e.currentTarget.style.color = '#64748b'
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ backgroundColor: '#0a0f28', padding: '0 0 48px 40px', borderLeft: '1px solid rgba(30,64,175,0.15)' }} className="footer-col">
            <div style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#1e40af',
              marginBottom: '24px',
            }}>
              Quick Links
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map(link => (
                <li key={link.name} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '12px', height: '1px', backgroundColor: '#1e40af', display: 'inline-block', flexShrink: 0 }} />
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '14px',
                      color: '#64748b',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      fontWeight: 500,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#93c5fd')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div style={{ backgroundColor: '#0a0f28', padding: '0 0 48px 40px', borderLeft: '1px solid rgba(30,64,175,0.15)' }} className="footer-col">
            <div style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#1e40af',
              marginBottom: '24px',
            }}>
              Services
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {services.map(s => (
                <li key={s.name} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '12px', height: '1px', backgroundColor: '#1e40af', display: 'inline-block', flexShrink: 0 }} />
                  <Link
                    href={s.href}
                    style={{
                      fontSize: '14px',
                      color: '#64748b',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      fontWeight: 500,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#93c5fd')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={{ backgroundColor: '#0a0f28', padding: '0 0 48px 40px', borderLeft: '1px solid rgba(30,64,175,0.15)' }} className="footer-col">
            <div style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#1e40af',
              marginBottom: '24px',
            }}>
              Contact
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li>
                <a href="tel:00923306887888" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', textDecoration: 'none' }}>
                  <FaPhone size={13} style={{ color: '#1e40af', marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5 }}>0092-330-688 7888</span>
                </a>
              </li>
              <li>
                <a href="mailto:example@gmail.com" style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', textDecoration: 'none' }}>
                  <MdEmail size={14} style={{ color: '#1e40af', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5 }}>info@nullatinternational.com</span>
                </a>
              </li>
              <li>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <FaMapMarkerAlt size={13} style={{ color: '#1e40af', marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
                    AliHasnain Plaza, 3rd Floor,<br />Office #303, Ghouritown Phase 5,<br />Islamabad, Pakistan
                  </span>
                </div>
              </li>
              <li style={{ paddingTop: '4px' }}>
                <div style={{
                  borderLeft: '2px solid #1e40af',
                  paddingLeft: '12px',
                }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: '#93c5fd', marginBottom: '2px' }}>Working Hours</div>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>Mon – Fri: 3pm – 2am</div>
                  <div style={{ fontSize: '13px', color: '#475569' }}>Sat – Sun: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(30,64,175,0.2)',
          padding: '24px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
            &copy; {new Date().getFullYear()} Nultat International Group. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', color: '#334155', margin: 0, letterSpacing: '0.05em' }}>
            Islamabad, Pakistan
          </p>
        </div>
      </div>

      <SafeStyle>
        {`
        @media (max-width: 1024px) {
            .footer-grid {
                grid-template-columns: 1fr 1fr !important;
                }
                .footer-brand {
                    padding-right: 0 !important;
                    padding-bottom: 40px !important;
                    }
                    }
                    @media (max-width: 600px) {
                        .footer-grid {
                            grid-template-columns: 1fr !important;
          }
          .footer-col {
            padding-left: 0 !important;
            border-left: none !important;
            border-top: 1px solid rgba(30,64,175,0.15) !important;
            padding-top: 32px !important;
            }
            }
            `}
            </SafeStyle>
    </footer>
  )
}
