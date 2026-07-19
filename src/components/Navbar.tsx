import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { navLinks, personalInfo } from '@/constants/data'

// Top navigation bar. Turns into a glass panel once the page is
// scrolled, and collapses into a hamburger menu below the md breakpoint.
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track which section is currently in view so the nav link can be
  // highlighted, giving people a sense of where they are on the page.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function handleLinkClick(href: string) {
    setIsOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-16 sm:h-20">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-display font-semibold text-lg text-ink-primary"
        >
          Sanket<span className="text-signal-teal">.</span>Lodhe
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleLinkClick(link.href)}
                className={`font-body text-sm transition-colors ${
                  activeSection === link.href
                    ? 'text-signal-teal'
                    : 'text-ink-muted hover:text-ink-primary'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-base-border px-4 py-2 text-sm text-ink-primary hover:border-signal-teal hover:text-signal-teal transition-colors"
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        {/* Mobile hamburger toggle */}
        <button
          className="md:hidden text-ink-primary"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden glass border-t border-base-border"
          >
            <ul className="container-px py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className={`font-body text-base ${
                      activeSection === link.href ? 'text-signal-teal' : 'text-ink-muted'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-base-border px-4 py-2 text-sm text-ink-primary"
                >
                  <Download size={15} />
                  Download Resume
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-ink-muted text-sm">
                  GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-ink-muted text-sm">
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
