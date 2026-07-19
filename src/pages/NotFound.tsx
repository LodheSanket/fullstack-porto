import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Simple 404 page, styled to match the terminal/log aesthetic used in
// the hero rather than a generic "oops" illustration.
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center container-px">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-8 sm:p-10 max-w-md text-center"
      >
        <p className="font-mono text-signal-teal text-sm">HTTP 404</p>
        <h1 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-ink-primary">
          Route not found
        </h1>
        <p className="mt-3 text-sm text-ink-muted">
          The page you asked for isn't part of this build. It might have moved, or the
          link might just be wrong.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-signal-gradient px-5 py-2.5 text-sm font-medium text-base hover:brightness-110 transition-all"
        >
          Back to home
        </Link>
      </motion.div>
    </div>
  )
}
