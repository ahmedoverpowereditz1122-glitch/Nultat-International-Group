'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, MessageCircle, Bot } from 'lucide-react'

const OPENAI_API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY || ''

const SYSTEM_PROMPT = `You are a helpful assistant for Nultat International Group — a professional services company based in Islamabad, Pakistan. 

COMPANY OVERVIEW:
- Established in 2014, headquartered in Islamabad, Pakistan
- A results-driven professional services firm delivering top-tier customer engagement, sales, and operations support
- 10+ years in operation, 50+ global clients, 100% delivery rate, 24/7 client coverage
- Single-window partner handling lead generation, live chat, cold calling, telesales, invoicing, collections, and backend support across all time zones
- Known for quality, transparency, and client satisfaction

SERVICES (6 Core Areas):
1. Customer Services – Software renewals, cold calling, lead gen, live chat, email handling, accounting, virtual assistant, CRM, collections, data entry
2. Sales & Marketing – Business development, lead gen, client services, sales support, inside/outside sales, B2B/B2C online selling, digital marketing
3. Mobile & Web Development – Android apps, web development, responsive design for all mobile resolutions and sizes
4. BPO Services – Inbound/outbound call center for Telecom, Healthcare, IT, Automobiles, Banking, Lead Survey, Insurance, Mortgage, Law Firms
5. Business Management – Administration, budget, business & conflict management, financial data interpretation, process improvements, project management
6. Real Estate – Working with Keller Williams, Remax, Century 21, Grey Properties, Cosmo International. Expertise in listing & investment appointments
7. AI Solutions (bonus) – Process automation, predictive analytics, AI chatbots, ML integration, decision support, customer experience enhancement

LEADERSHIP TEAM:
- Hamad Abbasi – Chairman & Founder
- Faraz Khattak – Director Operations
- Muhammad Salman – Manager Administration
- Muhammad Sami – Manager Operations

CONTACT INFO:
- Phone: 0092-330-688 7888
- Email: info@nullatinternational.com
- Address: AliHasnain Plaza, 3rd Floor, Office #303, Ghouritown Phase 5, Islamabad, Pakistan
- Hours: Mon–Fri 3pm–2am PKT, Sat–Sun closed

TONE: Be friendly, professional, and concise. Answer questions about services, leadership, company history, and contact details. Guide visitors to the right service and encourage them to get in touch via email, phone, or contact form. If asked something outside Nultat's scope, politely redirect.

Keep responses short and helpful — 2-4 sentences max unless detailed info is needed.`

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hi! 👋 I\'m Nultat\'s virtual assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setLoading(true)

    if (!OPENAI_API_KEY) {
      setMessages([...updated, {
        role: 'assistant',
        content: '⚠️ No API key attached yet. Please configure your OpenAI API key to enable the chatbot.'
      }])
      setLoading(false)
      return
    }

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...updated.map(m => ({ role: m.role, content: m.content })),
          ],
          max_tokens: 300,
          temperature: 0.7,
        }),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error?.message || 'API error')

      const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not get a response.'
      setMessages([...updated, { role: 'assistant', content: reply }])
    } catch (err: any) {
      setMessages([...updated, {
        role: 'assistant',
        content: `Sorry, something went wrong. Please try again or contact us directly at our email. (${err.message})`
      }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.22 }}
            style={{
              position: 'fixed',
              bottom: '100px',
              right: '32px',
              zIndex: 998,
              width: '360px',
              maxWidth: 'calc(100vw - 48px)',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.18)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Bot size={18} color="#ffffff" />
                </div>
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '14px', lineHeight: 1.2 }}>
                    Nultat Assistant
                  </div>
                  <div style={{ color: '#93c5fd', fontSize: '11px', fontWeight: 500 }}>
                    ● Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', padding: '4px' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              minHeight: '300px',
              maxHeight: '380px',
              backgroundColor: '#f8faff',
            }}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  }}
                >
                  <div style={{
                    maxWidth: '80%',
                    padding: '10px 14px',
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    backgroundColor: msg.role === 'user' ? '#1e40af' : '#ffffff',
                    color: msg.role === 'user' ? '#ffffff' : '#1e293b',
                    fontSize: '13.5px',
                    lineHeight: 1.6,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                    border: msg.role === 'assistant' ? '1px solid #e2e8f0' : 'none',
                    whiteSpace: 'pre-wrap',
                  }}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{
                    padding: '10px 16px',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px 16px 16px 4px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                    display: 'flex', gap: '4px', alignItems: 'center',
                  }}>
                    {[0, 1, 2].map(i => (
                      <span key={i} style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        backgroundColor: '#94a3b8',
                        animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                        display: 'inline-block',
                      }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div style={{
              padding: '12px 16px',
              borderTop: '1px solid #e2e8f0',
              backgroundColor: '#ffffff',
              display: 'flex',
              gap: '8px',
              alignItems: 'flex-end',
            }}>
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Type a message..."
                rows={1}
                style={{
                  flex: 1,
                  resize: 'none',
                  border: '1px solid #dbeafe',
                  borderRadius: '10px',
                  padding: '10px 14px',
                  fontSize: '13.5px',
                  color: '#1e293b',
                  outline: 'none',
                  fontFamily: 'inherit',
                  lineHeight: 1.5,
                  backgroundColor: '#f8faff',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = '#1e40af')}
                onBlur={e => (e.currentTarget.style.borderColor = '#dbeafe')}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                style={{
                  width: '40px', height: '40px',
                  borderRadius: '10px',
                  backgroundColor: input.trim() && !loading ? '#1e40af' : '#dbeafe',
                  border: 'none',
                  cursor: input.trim() && !loading ? 'pointer' : 'not-allowed',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background-color 0.2s',
                  flexShrink: 0,
                }}
              >
                <Send size={16} color={input.trim() && !loading ? '#ffffff' : '#93c5fd'} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        onClick={() => setOpen(o => !o)}
        title="Chat with us"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 999,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(30,64,175,0.5)',
        }}
        whileHover={{ scale: 1.1, boxShadow: '0 6px 28px rgba(30,64,175,0.65)' }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X size={22} color="#ffffff" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle size={22} color="#ffffff" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Unread dot */}
        {!open && (
          <span style={{
            position: 'absolute', top: '6px', right: '6px',
            width: '10px', height: '10px', borderRadius: '50%',
            backgroundColor: '#ef4444',
            border: '2px solid white',
          }} />
        )}
      </motion.button>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  )
}
