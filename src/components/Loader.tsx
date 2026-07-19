import { motion, AnimatePresence } from 'framer-motion'

interface LoaderProps {
  isLoading: boolean
}

// Simple full screen loader shown for a brief moment on first load.
// It fades out on its own once App.tsx flips isLoading to false.
export default function Loader({ isLoading }: LoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-base"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-4">
            <div className="font-mono text-signal-teal text-sm tracking-widest">
              <span>booting_portfolio</span>
              <span className="animate-blink">_</span>
            </div>
            <div className="w-40 h-[2px] bg-base-border overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-signal-gradient"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
