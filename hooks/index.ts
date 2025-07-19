import { useEffect } from 'react'

export function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])

  return ref
}

export function useEscapeKey<T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: () => void
) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (ref.current && event.key === 'Escape') {
        callback()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [ref, callback])
  return ref
}
