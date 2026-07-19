import { personalInfo, quickFacts, statCounters } from '@/constants/data'
import { useCountUp } from '@/hooks/useCountUp'
import SectionReveal from './SectionReveal'

// A single animated counter card. Kept as its own component so each one
// gets its own IntersectionObserver instance from useCountUp.
function CounterCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: animatedValue } = useCountUp(value)

  return (
    <div ref={ref} className="glass rounded-xl p-5 text-center">
      <p className="font-display text-3xl sm:text-4xl font-semibold text-ink-primary">
        {animatedValue}
        <span className="text-signal-teal">{suffix}</span>
      </p>
      <p className="mt-1 text-xs text-ink-muted leading-snug">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="container-px py-24 sm:py-32">
      <SectionReveal>
        <p className="section-eyebrow mb-3">about</p>
        <h2 className="section-heading">Backend-minded, full-stack in practice</h2>
      </SectionReveal>

      <div className="mt-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-14">
        <SectionReveal delay={0.1}>
          <p className="text-ink-muted text-base sm:text-lg leading-relaxed">
            {personalInfo.summary}
          </p>

          {/* Quick facts grid */}
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="glass rounded-xl p-4">
                <p className="text-xs uppercase tracking-wide text-ink-faint">{fact.label}</p>
                <p className="mt-1 font-medium text-ink-primary">{fact.value}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Animated counters pulled directly from resume metrics */}
        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {statCounters.map((stat) => (
              <CounterCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
