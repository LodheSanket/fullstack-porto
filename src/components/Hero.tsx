import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react'
import { personalInfo } from '@/constants/data'
import { useTypewriter } from '@/hooks/useTypewriter'
import ParticleBackground from './ParticleBackground'

// Roles rotate through the typewriter. These are drawn straight from
// the resume's frameworks and summary, not invented job titles.
const rotatingRoles = [
  'Full-Stack Software Engineer',
  'Django + DRF Developer',
  'FastAPI Backend Engineer',
  'React & Angular Developer',
]

export default function Hero() {
  const typedRole = useTypewriter(rotatingRoles, 55, 1600)

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <ParticleBackground />
      {/* Fades the particle canvas into the page background near the bottom
          so it never competes with the section below it */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-grid-fade pointer-events-none" />

      <div className="container-px relative w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Left column: name, rotating role, summary, CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-eyebrow mb-5">available for full-stack roles</p>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink-primary">
            {personalInfo.name}
          </h1>

          {/* Fixed-height wrapper stops layout shift as the typed text changes length */}
          <div className="mt-4 h-8 sm:h-9">
            <p className="font-mono text-lg sm:text-xl text-signal-teal">
              {typedRole}
              <span className="animate-blink">|</span>
            </p>
          </div>

          <p className="mt-6 max-w-xl text-ink-muted text-base sm:text-lg leading-relaxed">
            {personalInfo.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-signal-gradient px-6 py-3 text-sm font-medium text-base shadow-glow hover:brightness-110 transition-all hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 rounded-full border border-base-border px-6 py-3 text-sm font-medium text-ink-primary hover:border-signal-teal hover:text-signal-teal transition-all hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-ink-muted hover:text-signal-teal transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-ink-muted hover:text-signal-teal transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right column: the signature terminal panel. This is the one bold,
            memorable element on the page, styled like a real API log so it
            ties directly to the backend work described in the resume rather
            than being a decorative gradient blob. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass-raised rounded-2xl shadow-glass overflow-hidden animate-float">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-base-border">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-ink-faint">
                production_metrics.log
              </span>
            </div>

            <div className="p-5 font-mono text-sm space-y-3">
              <p className="text-ink-faint">
                <span className="text-signal-teal">$</span> curl /api/v1/engineer/status
              </p>
              <p className="text-ink-muted">
                {'{'}
                <br />
                &nbsp;&nbsp;
                <span className="text-signal-indigo">"status"</span>:{' '}
                <span className="text-signal-teal">"online"</span>,
                <br />
                &nbsp;&nbsp;
                <span className="text-signal-indigo">"role"</span>:{' '}
                <span className="text-signal-teal">"Full-Stack Developer"</span>,
                <br />
                &nbsp;&nbsp;
                <span className="text-signal-indigo">"stack"</span>: [
                <span className="text-signal-teal">"Django"</span>,{' '}
                <span className="text-signal-teal">"FastAPI"</span>,{' '}
                <span className="text-signal-teal">"React"</span>]
                <br />
                {'}'}
              </p>

              {/* Real stat readouts, pulled from resume bullet points */}
              {/* <div className="pt-3 border-t border-base-border grid grid-cols-2 gap-4">
                {statCounters.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-ink-primary text-xl font-semibold">
                      {stat.value}
                      {stat.suffix}
                    </p>
                    <p className="text-ink-faint text-[11px] leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* Small floating badge for a bit of depth behind the panel */}
          {/* <div className="hidden sm:flex absolute -bottom-5 -left-5 glass rounded-xl px-4 py-3 items-center gap-2 shadow-glass">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-signal-teal" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-signal-teal" />
            </span>
            <span className="font-mono text-xs text-ink-muted">100K+ req/day handled</span>
          </div> */}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  )
}
