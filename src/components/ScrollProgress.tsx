import { useScrollProgress } from '@/hooks/useScrollProgress'

// Thin gradient bar fixed to the very top of the page that fills as the
// user scrolls, giving a quiet sense of "how much is left" on a long page.
export default function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent">
      <div
        className="h-full bg-signal-gradient transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
