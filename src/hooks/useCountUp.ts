import { useEffect, useRef, useState } from 'react'

// Animates a number counting up from 0 to a target value once the
// element becomes visible in the viewport. Runs only once per element.
export function useCountUp(target: number, durationMs = 1500) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          const startTime = performance.now()

          function step(now: number) {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / durationMs, 1)
            // Ease-out cubic for a natural deceleration into the final number
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, durationMs])

  return { ref, value }
}
