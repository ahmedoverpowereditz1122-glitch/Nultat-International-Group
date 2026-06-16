'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SafeStyle from './SafeStyle'

const stats = [
  { value: '10+', label: 'Years in Operation' },
  { value: '24/7', label: 'Client Coverage' },
  { value: '50+', label: 'Global Clients' },
  { value: '100%', label: 'Delivery Rate' },
]

const capabilities = [
  'Lead Generation',
  'Chat Support',
  'Cold Calling & Telesales',
  'Invoicing & Collections',
  'Backend Troubleshooting',
  'Tech-Enabled Workflows',
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: '#f8faff',
        padding: '96px 0',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Section label */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            marginBottom: '64px',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: '40px',
              height: '2px',
              backgroundColor: '#1e40af',
            }}
          />
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#1e40af',
            }}
          >
            Who We Are
          </span>
        </motion.div>

        {/* Main grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '80px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* LEFT — Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            {/* Blue border frame offset */}
            <div
              style={{
                position: 'absolute',
                top: '-16px',
                left: '-16px',
                width: 'calc(100% - 40px)',
                height: 'calc(100% - 40px)',
                border: '2px solid #1e40af',
                zIndex: 0,
              }}
            />

            {/* Image */}
            <div
              style={{
                position: 'relative',
                height: '460px',
                overflow: 'hidden',
                zIndex: 1,
              }}
            >
              <Image
                src="/about1.avif"
                alt="Nultat International Group operations"
                fill
                style={{ objectFit: 'cover' }}
              />
              {/* Dark overlay for depth */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(30,58,138,0.55) 0%, transparent 60%)',
                }}
              />
            </div>

            {/* EST badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                backgroundColor: '#1e3a8a',
                padding: '20px 28px',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#93b4e8',
                  fontWeight: 700,
                  marginBottom: '4px',
                }}
              >
                Established
              </div>
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                2014
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Content column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ paddingTop: '8px' }}
          >
            <h2
              style={{
                fontSize: '42px',
                fontWeight: 800,
                color: '#1e3a8a',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '28px',
              }}
            >
              Nultat International
              <br />
              <span style={{ color: '#1e40af' }}>Group</span>
            </h2>

            {/* Blue rule */}
            <div
              style={{
                width: '48px',
                height: '3px',
                backgroundColor: '#1e40af',
                marginBottom: '28px',
              }}
            />

            <p
              style={{
                fontSize: '15.5px',
                lineHeight: 1.8,
                color: '#444',
                marginBottom: '20px',
              }}
            >
              Nultat International Group is a highly professional, result-oriented team of
              professionals based in Islamabad, Pakistan. We provide top-quality customer
              services through a skilled and motivated team, with each individual having a
              solid and proven track record in sales and customer services.
            </p>
            <p
              style={{
                fontSize: '15.5px',
                lineHeight: 1.8,
                color: '#444',
                marginBottom: '20px',
              }}
            >
              We offer a one-window operation for our clients in terms of lead generation,
              chat support, cold calling, telesales, invoicing, collections, and backend
              troubleshooting. Our team is a highly motivated and time-tested group of
              freelancers who have proven track records working with renowned and esteemed
              clients and organizations.
            </p>
            <p
              style={{
                fontSize: '15.5px',
                lineHeight: 1.8,
                color: '#444',
                marginBottom: '36px',
              }}
            >
              We understand that every client has particular needs, and we are ready to make
              the necessary adjustments to satisfy them. Our services are flexible per client
              requirements. With over 10 years in the business, we are comfortable working
              with European, Eastern, Pacific, and Central time zones. Nultat International
              is a group of tech-savvy professionals who can manage extra workload with a
              smiling face and positive attitude.
            </p>

            {/* Capabilities list */}
            <div
              style={{
                borderTop: '1px solid #dbeafe',
                paddingTop: '28px',
                marginBottom: '0',
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#888',
                  marginBottom: '16px',
                }}
              >
                Core Capabilities
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '10px 24px',
                }}
              >
                {capabilities.map((cap) => (
                  <div
                    key={cap}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      fontSize: '14px',
                      color: '#2D2D2D',
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: '16px',
                        height: '1px',
                        backgroundColor: '#1e40af',
                        flexShrink: 0,
                      }}
                    />
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            marginTop: '96px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid #dbeafe',
            borderBottom: '1px solid #dbeafe',
          }}
          className="stats-bar"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: '36px 0',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid #dbeafe' : 'none',
              }}
            >
              <div
                style={{
                  fontSize: '38px',
                  fontWeight: 800,
                  color: '#1e3a8a',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#888',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Responsive styles */}
      <SafeStyle>
        {`
        @media (max-width: 900px) {
            .about-grid {
                grid-template-columns: 1fr !important;
                gap: 80px !important;
                }
                .stats-bar {
                    grid-template-columns: repeat(2, 1fr) !important;
                    }
                    .stats-bar > div:nth-child(2) {
                        border-right: none !important;
                        }
                        .stats-bar > div:nth-child(1),
          .stats-bar > div:nth-child(2) {
            border-bottom: 1px solid #dbeafe;
          }
          }
          @media (max-width: 480px) {
            .stats-bar {
                grid-template-columns: 1fr 1fr !important;
                }
                }
                `}
                </SafeStyle>
    </section>
  )
}
