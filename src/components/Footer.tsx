import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { personalInfo } from '@/constants/data'

export default function Footer() {
  const year = new Date().getFullYear()

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-base-border">
      <div className="container-px py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-mono text-xs text-ink-faint">
          © {year} {personalInfo.name}.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-muted hover:text-signal-teal transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted hover:text-signal-teal transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="text-ink-muted hover:text-signal-teal transition-colors"
          >
            <Mail size={18} />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="ml-2 w-9 h-9 rounded-full border border-base-border flex items-center justify-center text-ink-muted hover:border-signal-teal hover:text-signal-teal transition-colors"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
