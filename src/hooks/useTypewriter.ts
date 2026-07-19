import { useEffect, useState } from 'react'

// Cycles through a list of strings, typing and deleting each one in turn.
// Used in the hero to rotate through role descriptions. Kept dependency-free
// (no external typewriter library) since the effect is simple enough to
// own directly and easier to make accessible this way.
export function useTypewriter(words: string[], typingSpeedMs = 60, pauseMs = 1800): string {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]

    // Decide how long to wait before the next character change
    const speed = isDeleting ? typingSpeedMs / 2 : typingSpeedMs

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, displayText.length + 1)
        setDisplayText(next)
        if (next === currentWord) {
          // Full word typed, pause before deleting
          setTimeout(() => setIsDeleting(true), pauseMs)
        }
      } else {
        const next = currentWord.slice(0, displayText.length - 1)
        setDisplayText(next)
        if (next === '') {
          setIsDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex, words, typingSpeedMs, pauseMs])

  return displayText
}
