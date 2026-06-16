'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
  Headphones,
  Bot,
  RefreshCw,
  Home,
  Phone,
  Users,
  MessageSquare,
  Mail,
  Calculator,
  MonitorSmartphone,
  Database,
  CreditCard,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const services = [
  {
    icon: Headphones,
    title: 'Customer Support Services',
    description:
      'We provide professional customer support services designed to assist clients with inquiries, technical issues, account management, and general assistance. Our team is dedicated to delivering fast, reliable, and personalized support to ensure a positive customer experience and long-term satisfaction.',
  },
  {
    icon: Bot,
    title: 'Artificial Intelligence (AI)',
    description:
      'We leverage AI-powered solutions to automate processes, improve customer interactions, analyze data, and drive smarter business decisions.',
  },
  {
    icon: RefreshCw,
    title: 'Software Renewals',
    description:
      'Our team manages software subscription renewals, license tracking, customer retention, and renewal campaigns to ensure uninterrupted service and maximize customer value.',
  },
  {
    icon: Home,
    title: 'Real Estate Support',
    description:
      'We assist real estate professionals with lead management, appointment scheduling, client communication, property research, and administrative support.',
  },
  {
    icon: Phone,
    title: 'Cold Calling',
    description:
      'Our experienced agents conduct professional outbound calls to identify prospects, generate interest, qualify leads, and schedule appointments for your sales team.',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description:
      'We help businesses grow by identifying and qualifying potential customers through targeted outreach, market research, and data-driven prospecting strategies.',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat Support',
    description:
      'We provide real-time customer assistance through live chat, ensuring prompt responses, increased customer engagement, and improved satisfaction.',
  },
  {
    icon: Mail,
    title: 'Email Handling',
    description:
      'Our team manages customer and business communications, responding to inquiries, organizing correspondence, and maintaining professional communication standards.',
  },
  {
    icon: Calculator,
    title: 'Accounting Support',
    description:
      'We offer administrative accounting services, including invoice processing, accounts receivable/payable support, bookkeeping assistance, and financial record management.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Virtual Assistant Services',
    description:
      'Our virtual assistants help streamline daily operations by handling administrative tasks, scheduling, data management, customer communication, and business support functions.',
  },
  {
    icon: Database,
    title: 'CRM Management (Salesforce & Zendesk)',
    description:
      'We manage and optimize CRM platforms, maintain customer records, track interactions, generate reports, and support sales and customer service operations using CRM tools.',
  },
  {
    icon: CreditCard,
    title: 'Collections Services',
    description:
      'We assist businesses with professional collections and payment follow-ups, helping improve cash flow while maintaining positive customer relationships.',
  },
  {
    icon: ClipboardList,
    title: 'Data Entry',
    description:
      'We provide accurate and efficient data entry services, ensuring information is properly organized, updated, and maintained across business systems and databases.',
  },
]

const whyUs = [
  'Skilled and experienced professionals',
  'Cost-effective business solutions',
  'Reliable and scalable support',
  'High-quality customer service',
  'Data security and confidentiality',
  'Customized services tailored to your business needs',
]

export default function CustomerServicesPage() {
  return (
    <>
      <Navbar />

      <main style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* ── HERO ── */}
        <section style={{
          backgroundColor: '#0a0f28',
          paddingTop: '140px',
          paddingBottom: '96px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 28px)',
          }} />
          <div style={{
            position: 'absolute', top: '-120px', right: '-120px',
            width: '480px', height: '480px',
            background: 'radial-gradient(circle, rgba(30,64,175,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '36px' }}
            >
              <Link href="/" style={{ fontSize: '12px', color: '#475569', textDecoration: 'none', fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#93c5fd')}
                onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
              >Home</Link>
              <span style={{ color: '#334155', fontSize: '12px' }}>/</span>
              <span style={{ fontSize: '12px', color: '#475569', fontWeight: 500 }}>Services</span>
              <span style={{ color: '#334155', fontSize: '12px' }}>/</span>
              <span style={{ fontSize: '12px', color: '#93c5fd', fontWeight: 600 }}>Customer Services</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}
            >
              <span style={{ display: 'inline-block', width: '40px', height: '2px', backgroundColor: '#1e40af' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1e40af' }}>
                Our Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{
                fontSize: 'clamp(36px, 6vw, 72px)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                marginBottom: '24px',
                maxWidth: '700px',
              }}
            >
              Customer <span style={{ color: '#60a5fa' }}>Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              style={{
                fontSize: '17px',
                color: '#94a3b8',
                lineHeight: 1.8,
                maxWidth: '580px',
                marginBottom: '40px',
              }}
            >
              Customer service is crucial because it enables businesses to establish strong relationships
              with customers and maintain a positive reputation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}
            >
              <Link
                href="#services"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: '#1e40af', color: '#ffffff',
                  padding: '13px 28px', fontWeight: 700, fontSize: '13px',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  textDecoration: 'none', border: '2px solid #1e40af', transition: 'background-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1e3a8a')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1e40af')}
              >
                View Services <ArrowRight size={14} />
              </Link>
              <Link
                href="mailto:info@nultatinternationalgroup.com"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: 'transparent', color: '#ffffff',
                  padding: '13px 28px', fontWeight: 700, fontSize: '13px',
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  textDecoration: 'none', border: '2px solid rgba(255,255,255,0.25)', transition: 'border-color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section id="services" style={{ backgroundColor: '#f8faff', padding: '96px 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '56px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <span style={{ display: 'inline-block', width: '40px', height: '2px', backgroundColor: '#1e40af' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1e40af' }}>
                  What We Cover
                </span>
              </div>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#1e3a8a',
                letterSpacing: '-0.03em', lineHeight: 1.1,
              }}>
                Full-Spectrum Customer Support
              </h2>
            </motion.div>

            <div className="cs-grid">
              {services.map((svc, i) => {
                // Check if this is the last item (index 12)
                const isLast = i === services.length - 1
                return (
                  <motion.div
                    key={svc.title}
                    className={`cs-card ${isLast ? 'cs-card-full' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div
                      className="cs-card-inner"
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#eff6ff')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ffffff')}
                    >
                      <div style={{
                        width: '48px', height: '48px', backgroundColor: '#dbeafe',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: '20px', flexShrink: 0,
                      }}>
                        <svc.icon size={20} style={{ color: '#1e40af' }} />
                      </div>
                      <div style={{
                        fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em',
                        textTransform: 'uppercase', color: '#93c5fd', marginBottom: '8px',
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 style={{
                        fontSize: '16px', fontWeight: 700, color: '#1e3a8a',
                        letterSpacing: '-0.01em', lineHeight: 1.25, marginBottom: '10px',
                      }}>
                        {svc.title}
                      </h3>
                      <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.75, margin: 0 }}>
                        {svc.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section style={{ backgroundColor: '#ffffff', padding: '96px 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
            <div className="why-grid">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <span style={{ display: 'inline-block', width: '40px', height: '2px', backgroundColor: '#1e40af' }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1e40af' }}>
                    Why Us
                  </span>
                </div>
                <h2 style={{
                  fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#1e3a8a',
                  letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '20px',
                }}>
                  Why Choose <span style={{ color: '#1e40af' }}>Nultat?</span>
                </h2>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.8, marginBottom: '36px' }}>
                  Our goal is to help businesses increase productivity, improve customer experiences,
                  and achieve sustainable growth through professional outsourcing and support services.
                </p>
                <Link
                  href="mailto:info@nultatinternationalgroup.com"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    backgroundColor: '#1e40af', color: '#ffffff',
                    padding: '13px 28px', fontWeight: 700, fontSize: '13px',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    textDecoration: 'none', border: '2px solid #1e40af', transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1e3a8a')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1e40af')}
                >
                  Start Working With Us <ArrowRight size={14} />
                </Link>
              </motion.div>

              <motion.div
                className="why-cards"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {whyUs.map((point) => (
                  <div key={point} style={{ backgroundColor: '#f8faff', padding: '24px 20px' }}>
                    <CheckCircle2 size={18} style={{ color: '#1e40af', marginBottom: '10px' }} />
                    <p style={{ fontSize: '13.5px', fontWeight: 600, color: '#1e3a8a', lineHeight: 1.5, margin: 0 }}>
                      {point}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section style={{ backgroundColor: '#1e3a8a', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 28px)',
          }} />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', backgroundColor: '#1e40af' }} />

          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
            <div className="cta-row">
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#93c5fd', marginBottom: '12px' }}>
                  Ready to Get Started?
                </div>
                <h2 style={{
                  fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, color: '#ffffff',
                  letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '560px',
                }}>
                  Let's build your customer service operation together.
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  href="mailto:info@nultatinternationalgroup.com"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    backgroundColor: '#1e40af', color: '#ffffff',
                    padding: '14px 32px', fontWeight: 700, fontSize: '13px',
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    textDecoration: 'none', border: '2px solid #1e40af', transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1e40af')}
                >
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        /* ── SERVICES GRID ── */
        .cs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background-color: #dbeafe;
        }
        .cs-card {
          background-color: #ffffff;
        }
        .cs-card-full {
          grid-column: span 3;
        }
        .cs-card-inner {
          padding: 32px 28px;
          height: 100%;
          transition: background-color 0.2s;
          cursor: default;
          background-color: #ffffff;
          box-sizing: border-box;
        }

        /* ── WHY CHOOSE US ── */
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .why-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          background-color: #dbeafe;
        }

        /* ── CTA ROW ── */
        .cta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 32px;
        }

        /* ── TABLET (≤ 900px) ── */
        @media (max-width: 900px) {
          .cs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cs-card-full {
            grid-column: span 2;
          }
          .why-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        /* ── MOBILE (≤ 560px) ── */
        @media (max-width: 560px) {
          .cs-grid {
            grid-template-columns: 1fr;
          }
          .cs-card-full {
            grid-column: span 1;
          }
          .cs-card-inner {
            padding: 24px 20px;
          }
          .why-cards {
            grid-template-columns: 1fr;
          }
          .cta-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  )
}
