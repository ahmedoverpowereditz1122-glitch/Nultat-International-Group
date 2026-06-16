'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock, GraduationCap, Briefcase, ArrowRight } from 'lucide-react'
import SafeStyle from './SafeStyle'

const jobOpenings = [
  {
    title: 'Real Estate Lead Gen / Appointment Setting Specialist',
    description: 'We are looking for motivated individuals (Male/Female) who can work with us on our ongoing projects of property management in the USA/Canadian market.',
    icon: MapPin,
    tag: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    title: 'Customer Service Representative (German Speaking)',
    description: 'We are looking for a rockstar (Male/Female) who can read, write, and speak German fluently with excellent communication skills.',
    icon: Clock,
    tag: 'Language',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
  },
  {
    title: 'Customer Service Representative (Spanish Speaking)',
    description: 'We are looking for a rockstar (Male/Female) who can read, write, and speak Spanish fluently with excellent communication skills.',
    icon: Clock,
    tag: 'Language',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
  },
  {
    title: 'Customer Retention Representative',
    description: 'Highly proficient English speaker, graduate-level education required with at least 2 years of experience in cold calling or customer services.',
    icon: GraduationCap,
    tag: 'Customer Success',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
  },
  {
    title: 'Full Stack Developer',
    description: 'Proficient in MongoDB, Angular, Node.js, Ember.js & MySQL. Build scalable applications for our growing suite of client solutions.',
    icon: Briefcase,
    tag: 'Engineering',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
  },
]

const APPLY_EMAIL = 'info@nultatinternationalgroup.com'

export default function Careers() {
  return (
    <section
      id="careers"
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
              Now Hiring
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
            Join Our <span style={{ color: '#1e40af' }}>Team</span>
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#64748b',
            lineHeight: 1.7,
            maxWidth: '480px',
          }}>
            Build your career with a dynamic, results-driven organization committed to excellence.
          </p>
        </motion.div>

        {/* Job listings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', backgroundColor: '#dbeafe' }}>
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              style={{ backgroundColor: '#ffffff' }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: index % 2 === 0 ? '420px 1fr' : '1fr 420px',
                  minHeight: '280px',
                }}
                className="career-row"
              >
                {/* Image */}
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    order: index % 2 === 0 ? 0 : 1,
                    minHeight: '240px',
                  }}
                  className="career-img"
                >
                  <Image
                    src={job.image}
                    alt={job.title}
                    fill
                    style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    className="career-photo"
                  />
                  {/* Blue overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(30,58,138,0.55) 0%, rgba(30,64,175,0.2) 100%)',
                  }} />
                  {/* Tag badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    backgroundColor: '#1e40af',
                    color: '#ffffff',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    padding: '6px 14px',
                  }}>
                    {job.tag}
                  </div>
                  {/* Index */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    color: 'rgba(255,255,255,0.7)',
                    textTransform: 'uppercase',
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '40px 44px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    order: index % 2 === 0 ? 1 : 0,
                    borderLeft: index % 2 === 0 ? 'none' : '1px solid #dbeafe',
                    borderRight: index % 2 === 0 ? '1px solid #dbeafe' : 'none',
                  }}
                  className="career-content"
                >
                  {/* Icon + title */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: '#dbeafe',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      <job.icon size={18} style={{ color: '#1e40af' }} />
                    </div>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#1e3a8a',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.25,
                    }}>
                      {job.title}
                    </h3>
                  </div>

                  <p style={{
                    fontSize: '15px',
                    color: '#64748b',
                    lineHeight: 1.75,
                    marginBottom: '28px',
                    maxWidth: '480px',
                  }}>
                    {job.description}
                  </p>

                  <a
                    href={`mailto:${APPLY_EMAIL}?subject=Application: ${encodeURIComponent(job.title)}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      backgroundColor: '#1e40af',
                      color: '#ffffff',
                      padding: '12px 28px',
                      fontWeight: 700,
                      fontSize: '13px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      border: '2px solid #1e40af',
                      transition: 'background-color 0.2s',
                      alignSelf: 'flex-start',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1e3a8a')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1e40af')}
                  >
                    Apply Now
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SafeStyle>
        {`
        .career-photo:hover {
            transform: scale(1.04);
            }
            @media (max-width: 860px) {
                .career-row {
                    grid-template-columns: 1fr !important;
                    }
                    .career-img {
                        order: 0 !important;
                        min-height: 220px !important;
                        }
          .career-content {
            order: 1 !important;
            border-left: none !important;
            border-right: none !important;
            border-top: 1px solid #dbeafe !important;
            padding: 28px 24px !important;
            }
            }
            `}
            </SafeStyle>
    </section>
  )
}
