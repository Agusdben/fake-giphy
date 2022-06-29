import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'
import './ReturnToTop.css'

export const ReturnToTop = () => {
  const location = useLocation()
  const returnToTop = (options) => window.scrollTo({ top: 0, left: 0, ...options })
  useEffect(() => {
    returnToTop()
  }, [location])

  return (
    <button className='return-to-top grid-center' onClick={() => returnToTop({ behavior: 'smooth' })}>
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  )
}
