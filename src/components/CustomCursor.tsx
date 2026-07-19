import { useEffect, useRef, useState } from 'react'

// A small dot plus a trailing ring that follows the pointer, replacing
// the native cursor on desktop only. Touch devices never see this,
// since there's no pointer to track and no benefit to hiding the
// native cursor there.
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse/trackpad)
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setIsDesktop(mq.matches)

    if (!mq.matches) return

    document.body.classList.add('custom-cursor-active')

    let ringX = 0
    let ringY = 0

    function handleMove(e: MouseEvent) {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }

      const target = e.target as HTMLElement
      setIsPointer(!!target.closest('a, button, [role="button"], input, textarea'))
    }

    // Ring trails behind the raw pointer position for a soft, weighted feel
    let animationFrame: number
    function animateRing(e: MouseEvent) {
      ringX += (e.clientX - ringX) * 0.15
      ringY += (e.clientY - ringY) * 0.15
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }
    }

    function loop(e: MouseEvent) {
      animateRing(e)
      animationFrame = requestAnimationFrame(() => loop(e))
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousemove', loop)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousemove', loop)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  if (!isDesktop) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-[100] w-1.5 h-1.5 rounded-full bg-signal-teal pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className={`fixed z-[100] rounded-full border pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-200 ${
          isPointer ? 'w-10 h-10 border-signal-teal' : 'w-7 h-7 border-ink-faint'
        }`}
      />
    </>
  )
}
