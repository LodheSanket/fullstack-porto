import { useState, type FormEvent } from 'react'
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { personalInfo } from '@/constants/data'
import SectionReveal from './SectionReveal'

// Contact info cards shown next to the form
const contactMethods = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/sanket-lodhe', href: personalInfo.linkedin },
  { icon: Github, label: 'GitHub', value: 'github.com', href: personalInfo.github },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: undefined },
]

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // There is no backend for this site, so the form hands the message
    // off to the visitor's own mail client instead of posting it
    // somewhere. This keeps the deployment fully static while still
    // letting people reach out with a prefilled message.
    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="contact" className="container-px py-24 sm:py-32">
      <SectionReveal>
        <p className="section-eyebrow mb-3">contact</p>
        <h2 className="section-heading">Let's build something</h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          {personalInfo.availability}. Reach out directly or send a message below.
        </p>
      </SectionReveal>

      <div className="mt-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
        {/* Contact info cards */}
        <SectionReveal delay={0.1}>
          <div className="space-y-4">
            {contactMethods.map((method) => {
              const Icon = method.icon
              const content = (
                <div className="glass rounded-xl p-4 flex items-center gap-4 hover:border-signal-teal/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-base-raised border border-base-border flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-signal-teal" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-ink-faint">{method.label}</p>
                    <p className="text-sm text-ink-primary truncate">{method.value}</p>
                  </div>
                </div>
              )
              return method.href ? (
                <a key={method.label} href={method.href} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={method.label}>{content}</div>
              )
            })}
          </div>
        </SectionReveal>

        {/* Contact form */}
        <SectionReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs text-ink-faint mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg bg-base-raised/60 border border-base-border px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint outline-none focus:border-signal-teal"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-ink-faint mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg bg-base-raised/60 border border-base-border px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint outline-none focus:border-signal-teal"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-ink-faint mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg bg-base-raised/60 border border-base-border px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint outline-none focus:border-signal-teal resize-none"
                placeholder="What are you looking to build?"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-signal-gradient px-6 py-3 text-sm font-medium text-base hover:brightness-110 transition-all hover:-translate-y-0.5"
            >
              {submitted ? <CheckCircle2 size={16} /> : <Send size={16} />}
              {submitted ? 'Opening your mail client...' : 'Send Message'}
            </button>
          </form>
        </SectionReveal>
      </div>
    </section>
  )
}
