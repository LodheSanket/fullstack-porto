import { motion } from 'framer-motion'
import { skillCategories } from '@/constants/data'
import { staggerContainer, fadeUp, revealViewport } from '@/utils/motionVariants'
import SectionReveal from './SectionReveal'

// Skills are shown as badges rather than progress bars. The resume does
// not give numeric proficiency levels for each skill, and inventing a
// percentage would be making up data that was not actually provided.
export default function Skills() {
  return (
    <section id="skills" className="container-px py-24 sm:py-32">
      <SectionReveal>
        <p className="section-eyebrow mb-3">skills</p>
        <h2 className="section-heading">Tools of the trade</h2>
        <p className="mt-4 max-w-2xl text-ink-muted">
          Grouped the way they show up in real projects: languages and frameworks for building,
          data stores for persistence, and the tooling that keeps it all shipping.
        </p>
      </SectionReveal>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer}
        className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skillCategories.map((group) => (
          <motion.div
            key={group.category}
            variants={fadeUp}
            className="glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-glow transition-all duration-300"
          >
            <h3 className="font-display text-sm uppercase tracking-wide text-signal-teal mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs rounded-full border border-base-border bg-base-raised/60 px-3 py-1.5 text-ink-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
