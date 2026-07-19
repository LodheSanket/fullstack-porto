import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/constants/data'
import SectionReveal from './SectionReveal'
import type { ProjectEntry } from '@/types'

function ProjectCard({ project }: { project: ProjectEntry }) {
  return (
    <div className="glass rounded-2xl p-6 sm:p-8 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-glow hover:border-signal-teal/30 transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg sm:text-xl font-semibold text-ink-primary">
          {project.title}
        </h3>
        {project.featured && (
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide text-signal-teal border border-signal-teal/40 rounded-full px-2 py-1">
            featured
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-ink-muted leading-relaxed">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] rounded-full bg-base-raised/70 border border-base-border px-2.5 py-1 text-ink-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2 flex-1">
        {project.contribution.slice(0, 3).map((point) => (
          <li key={point} className="flex gap-2.5 text-sm text-ink-muted leading-relaxed">
            <span className="text-signal-indigo mt-1.5">-</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-base-border px-4 py-2 text-xs text-ink-primary hover:border-signal-teal hover:text-signal-teal transition-colors"
          >
            <Github size={14} />
            Code
          </a>
        ) : (
          <span
            className="inline-flex items-center gap-2 rounded-full border border-base-border px-4 py-2 text-xs text-ink-faint cursor-not-allowed"
            title="Repository is private"
          >
            <Github size={14} />
            Private repo
          </span>
        )}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-signal-gradient px-4 py-2 text-xs font-medium text-base hover:brightness-110 transition-all"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        ) : (
          <span
            className="inline-flex items-center gap-2 rounded-full border border-base-border px-4 py-2 text-xs text-ink-faint cursor-not-allowed"
            title="Not publicly deployed"
          >
            <ExternalLink size={14} />
            No public demo
          </span>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="container-px py-24 sm:py-32">
      <SectionReveal>
        <p className="section-eyebrow mb-3">projects</p>
        <h2 className="section-heading">Systems built, not just demos</h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          A mix of production systems and personal builds, spanning real-time tracking,
          geospatial analytics, and financial dashboards.
        </p>
      </SectionReveal>

      <div className="mt-12 grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <SectionReveal key={project.title} delay={(i % 2) * 0.08}>
            <ProjectCard project={project} />
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
