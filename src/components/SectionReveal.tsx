import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp, revealViewport } from '@/utils/motionVariants'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

// Wraps any block of content with a fade-and-rise entrance animation
// that triggers once when it scrolls into view. Used throughout the
// page instead of repeating the same motion setup in every section.
export default function SectionReveal({ children, className, delay = 0 }: SectionRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
