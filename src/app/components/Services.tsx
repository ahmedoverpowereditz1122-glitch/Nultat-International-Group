'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Headphones,
  TrendingUp,
  Code,
  Phone,
  Briefcase,
  Building2,
  Brain,
  ArrowRight
} from 'lucide-react'
import SafeStyle from './SafeStyle'

const services = [
  {
    id: 'customer-services',
    title: 'Customer Services',
    icon: Headphones,
    description: 'Software Renewals, Cold Calling, Lead Gen, Live Chat, E-mail Handling, Accounting, Virtual Assistant, CRM, Collections, Data Entry',
  },
  {
    id: 'sales-marketing',
    title: 'Sales & Marketing',
    icon: TrendingUp,
    description: 'Business Development, Lead Gen, Client Services, Sales Support, Inside & Outside Sales, B2B & B2C Online Selling, Digital Marketing',
  },
  {
    id: 'web-development',
    title: 'Mobile & Web Development',
    icon: Code,
    description: 'Expert in Android application & web development. Responsive design for all mobile resolutions and sizes.',
  },
  {
    id: 'bpo-services',
    title: 'BPO Services',
    icon: Phone,
    description: 'Inbound-Outbound call centre, Telecom, HealthCare, IT, Automobiles, Banking, Lead Survey, Insurance, Mortgage & Law Firms.',
  },
  {
    id: 'business-management',
    title: 'Business Management',
    icon: Briefcase,
    description: 'Administration, Budget, Business & Conflict Management, Financial Data Interpretation, Process Improvements, Project Management',
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    icon: Building2,
    description: 'Working with Keller Williams, Remax, Century 21, Grey Properties, Cosmo International. Expertise in listing & investment appointments.',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Services',
    icon: Brain,
    description: 'Process Automation, Predictive Analytics, AI Chatbots, Machine Learning Integration, Decision Support Systems, Customer Experience Enhancement, Actionable Business Insights',
  },
]

export default function Services() {
  return (
    <section
      id="services"
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
              What We Offer
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
            Our <span style={{ color: '#1e40af' }}>Services</span>
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#64748b',
            lineHeight: 1.7,
            maxWidth: '520px',
          }}>
            Comprehensive solutions tailored to your business needs — delivered with precision, professionalism, and around-the-clock commitment.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          backgroundColor: '#dbeafe',
        }}
          className="services-grid"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              style={{ backgroundColor: '#ffffff', position: 'relative' }}
            >
              <Link
                href={`/services/${service.id}`}
                style={{ textDecoration: 'none', display: 'block', height: '100%' }}
              >
                <div
                  className="service-card"
                  style={{
                    padding: '36px 32px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'background-color 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = '#eff6ff'
                    const icon = (e.currentTarget as HTMLDivElement).querySelector('.icon-box') as HTMLDivElement
                    if (icon) icon.style.backgroundColor = '#1e40af'
                    const iconSvg = icon?.querySelector('svg') as SVGElement
                    if (iconSvg) iconSvg.style.color = '#ffffff'
                    const arrow = (e.currentTarget as HTMLDivElement).querySelector('.arrow-link') as HTMLDivElement
                    if (arrow) arrow.style.gap = '12px'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.backgroundColor = '#ffffff'
                    const icon = (e.currentTarget as HTMLDivElement).querySelector('.icon-box') as HTMLDivElement
                    if (icon) icon.style.backgroundColor = '#dbeafe'
                    const iconSvg = icon?.querySelector('svg') as SVGElement
                    if (iconSvg) iconSvg.style.color = '#1e40af'
                    const arrow = (e.currentTarget as HTMLDivElement).querySelector('.arrow-link') as HTMLDivElement
                    if (arrow) arrow.style.gap = '8px'
                  }}
                >
                  {/* Icon */}
                  <div
                    className="icon-box"
                    style={{
                      width: '52px',
                      height: '52px',
                      backgroundColor: '#dbeafe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      transition: 'background-color 0.2s',
                      flexShrink: 0,
                    }}
                  >
                    <service.icon
                      size={22}
                      style={{ color: '#1e40af', transition: 'color 0.2s' }}
                    />
                  </div>

                  {/* Index label */}
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#93c5fd',
                    marginBottom: '8px',
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#1e3a8a',
                    letterSpacing: '-0.02em',
                    marginBottom: '12px',
                    lineHeight: 1.2,
                  }}>
                    {service.title}
                  </h3>

                  <p style={{
                    fontSize: '14px',
                    color: '#64748b',
                    lineHeight: 1.75,
                    flexGrow: 1,
                    marginBottom: '24px',
                  }}>
                    {service.description}
                  </p>

                  {/* Learn more */}
                  <div
                    className="arrow-link"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#1e40af',
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      transition: 'gap 0.2s',
                    }}
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <SafeStyle>
        {`
        .services-grid > div:last-child {
          grid-column: 2 / span 1;
        }

        @media (max-width: 900px) {
            .services-grid {
                grid-template-columns: repeat(2, 1fr) !important;
                }
            .services-grid > div:last-child {
                grid-column: 1 / span 2;
                }
                }
                @media (max-width: 560px) {
                    .services-grid {
                        grid-template-columns: 1fr !important;
                        }
                    .services-grid > div:last-child {
                        grid-column: 1;
                        }
                        }
                        `}
                        </SafeStyle>
    </section>
  )
}
