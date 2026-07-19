import { Briefcase } from 'lucide-react'
import { experience } from '@/constants/data'
import SectionReveal from './SectionReveal'

// A vertical timeline. Built to support multiple entries even though
// the resume currently lists one role, so the layout doesn't need to
// change shape as the career history grows.
export default function Experience() {
  return (
    <section id="experience" className="container-px py-24 sm:py-32">
      <SectionReveal>
        <p className="section-eyebrow mb-3">experience</p>
        <h2 className="section-heading">Where the work happened</h2>
      </SectionReveal>

      <div className="mt-14 relative">
        {/* Vertical line connecting each entry */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-base-border hidden sm:block" />

        <div className="space-y-10">
          {experience.map((job) => (
            <SectionReveal key={job.company}>
              <div className="relative sm:pl-14">
                {/* Timeline marker */}
                <div className="hidden sm:flex absolute left-0 top-0 w-10 h-10 rounded-full bg-base-raised border border-signal-teal/40 items-center justify-center">
                  <Briefcase size={16} className="text-signal-teal" />
                </div>

                <div className="glass rounded-2xl p-6 sm:p-8 hover:border-signal-teal/30 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ink-primary">
                        {job.role}
                      </h3>
                      <p className="text-signal-teal font-medium mt-1">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-ink-muted">{job.duration}</p>
                      <p className="text-xs text-ink-faint mt-1">{job.location}</p>
                      {job.current && (
                        <span className="inline-flex items-center gap-1.5 mt-2 text-[11px] font-mono text-signal-teal">
                          <span className="w-1.5 h-1.5 rounded-full bg-signal-teal" />
                          current
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {job.responsibilities.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                        <span className="text-signal-teal mt-1.5">-</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] rounded-full bg-base-raised/70 border border-base-border px-3 py-1 text-ink-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
