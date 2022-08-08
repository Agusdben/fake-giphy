import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'

import './ReturnToTop.css'

export const ReturnToTop = () => {
  const scrollToTopRef = useRef()
  const location = useLocation()
  const returnToTop = (options) => window.scrollTo({ top: 0, left: 0, ...options })

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollMaxY = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (window.scrollY === scrollMaxY && location) {
        scrollToTopRef.current.classList.add('return-to-top--bottom')
      } else {
        scrollToTopRef.current.classList.remove('return-to-top--bottom')
      }
    })
  }, [])

  useEffect(() => {
    returnToTop()
  }, [location])

  return (
    <button ref={scrollToTopRef} className='return-to-top grid-center' onClick={() => returnToTop({ behavior: 'smooth' })}>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  )
}
