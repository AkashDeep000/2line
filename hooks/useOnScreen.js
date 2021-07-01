import { useState, useEffect } from 'react'

const useOnScreen = (ref, rootMargin) => {
  if (rootMargin === undefined) {
    rootMargin = 0;
  }
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    , { rootMargin })

    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, [])

  return isIntersecting
}

export default useOnScreen