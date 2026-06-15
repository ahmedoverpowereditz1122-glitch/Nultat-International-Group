'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import {
  Smartphone,
  Monitor,
  Layout,
  Server,
  Code2,
  ShoppingCart,
  FileCode,
  Plug,
  Cloud,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'Mobile Application Development',
    description:
      'Designing, developing, testing, and maintaining mobile applications for Android and iOS platforms using native and cross-platform technologies.',
  },
  {
    icon: Monitor,
    title: 'Web Application Development',
    description:
      'Building responsive, scalable, and secure web applications, portals, and enterprise solutions tailored to your specific business requirements.',
  },
  {
    icon: Layout,
    title: 'Front-End Development',
    description:
      'Creating intuitive and user-friendly interfaces using modern frameworks and technologies to deliver exceptional user experiences across all devices.',
  },
  {
    icon: Server,
    title: 'Back-End Development',
    description:
      'Developing robust server-side applications, APIs, databases, and integrations that power web and mobile solutions at any scale.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description:
      'Managing the complete software development lifecycle, from UI/UX design and coding to deployment and ongoing maintenance.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Development',
    description:
      'Building online stores, payment gateway integrations, shopping carts, and customer management systems to power your digital sales.',
  },
  {
    icon: FileCode,
    title: 'CMS & Website Development',
    description:
      'Developing and customizing websites using content management systems and custom-built platforms tailored to your content needs.',
  },
  {
    icon: Plug,
    title: 'API Development & Integration',
    description:
      'Creating and integrating RESTful APIs, third-party services, payment solutions, cloud platforms, and enterprise systems seamlessly.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Deploying and managing applications on cloud infrastructure while implementing CI/CD pipelines, monitoring, and security best practices.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance & Maintenance',
    description:
      'Conducting testing, troubleshooting, performance optimization, security updates, and ongoing application support to keep your systems running smoothly.',
  },
]

const whyUs = [
  'Mobile and web application architecture',
  'UI/UX implementation expertise',
  'Database design and management',
  'Cloud deployment and infrastructure',
  'Security and performance optimization',
  'Agile development methodologies',
]

export default function MobileWebDevPage() {
  const cols = 3
  const remainder = services.length % cols

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
              <span style={{ fontSize: '12px', color: '#93c5fd', fontWeight: 600 }}>Mobile & Web Development</span>
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
              Mobile & Web <span style={{ color: '#60a5fa' }}>Development</span>
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
              We build high-performance, scalable mobile and web applications that power your business,
              delight your users, and drive real results.
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
                href="mailto:example@gmail.com"
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
                End-to-End Development Solutions
              </h2>
            </motion.div>

            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', backgroundColor: '#dbeafe' }}
              className="cs-grid"
            >
              {services.map((svc, i) => {
                const isLast = i === services.length - 1
                const spanCols = isLast && remainder !== 0 ? cols - remainder + 1 : 1
                return (
                  <motion.div
                    key={svc.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    style={{ backgroundColor: '#ffffff', gridColumn: spanCols > 1 ? `span ${spanCols}` : undefined }}
                  >
                    <div
                      style={{ padding: '32px 28px', height: '100%', transition: 'background-color 0.2s', cursor: 'default' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#eff6ff')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ffffff')}
                    >
                      <div style={{
                        width: '48px', height: '48px', backgroundColor: '#dbeafe',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px',
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
                      <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.75 }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="why-grid">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <span style={{ display: 'inline-block', width: '40px', height: '2px', backgroundColor: '#1e40af' }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1e40af' }}>Why Us</span>
                </div>
                <h2 style={{
                  fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#1e3a8a',
                  letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '20px',
                }}>
                  Why Choose <span style={{ color: '#1e40af' }}>Nultat?</span>
                </h2>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.8, marginBottom: '36px' }}>
                  Our development team delivers secure, scalable, and high-performance digital solutions
                  that streamline your operations and elevate your user experience.
                </p>
                <Link
                  href="mailto:example@gmail.com"
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
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', backgroundColor: '#dbeafe' }}
                className="why-cards"
              >
                {whyUs.map((point) => (
                  <div key={point} style={{ backgroundColor: '#f8faff', padding: '24px 20px' }}>
                    <CheckCircle2 size={18} style={{ color: '#1e40af', marginBottom: '10px' }} />
                    <p style={{ fontSize: '13.5px', fontWeight: 600, color: '#1e3a8a', lineHeight: 1.5 }}>{point}</p>
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }} className="cta-row">
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#93c5fd', marginBottom: '12px' }}>
                  Ready to Get Started?
                </div>
                <h2 style={{
                  fontSize: 'clamp(24px, 3.5vw, 38px)', fontWeight: 800, color: '#ffffff',
                  letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '560px',
                }}>
                  Let's build your next digital product together.
                </h2>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link
                  href="mailto:example@gmail.com"
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
        @media (max-width: 900px) {
          .cs-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .why-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .why-cards { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .why-cards { grid-template-columns: 1fr !important; }
          .cta-row { flex-direction: column !important; }
        }
      `}</style>
    </>
  )
}