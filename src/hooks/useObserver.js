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
    if (ref) {
      observer.observe(ref.current)
    }
    return () => { observer.disconnect() } // disconnect when component is unmounted
  }, [])

  return isIntersecting
}

export default useObserver
