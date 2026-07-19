import { GraduationCap } from 'lucide-react'
import { education } from '@/constants/data'
import SectionReveal from './SectionReveal'

export default function Education() {
  return (
    <section id="education" className="container-px py-24 sm:py-32">
      <SectionReveal>
        <p className="section-eyebrow mb-3">education</p>
        <h2 className="section-heading">Foundation</h2>
      </SectionReveal>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {education.map((entry) => (
          <SectionReveal key={entry.institution}>
            <div className="glass rounded-2xl p-6 sm:p-8 h-full hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-base-raised border border-base-border flex items-center justify-center">
                <GraduationCap size={20} className="text-signal-teal" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink-primary">
                {entry.institution}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">{entry.degree}</p>
              <div className="mt-4 flex items-center justify-between font-mono text-xs text-ink-faint">
                <span>{entry.location}</span>
                <span>{entry.duration}</span>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
