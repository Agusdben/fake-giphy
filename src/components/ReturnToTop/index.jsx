import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './ReturnToTop.css'

export const ReturnToTop = () => {
  const location = useLocation()
  const returnToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  useEffect(() => {
    returnToTop()
  }, [location])

  return (
    <button className='return-to-top grid-center' onClick={returnToTop}>↑</button>
  )
}
