import { useEffect, useState } from 'react'

const useObserver = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false)
  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting),
    {
      rootMargin: '200px'
    }
  )

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current)
    }
  }, [ref.current, setIntersecting])

  return isIntersecting
}

export default useObserver
