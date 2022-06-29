import { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import Trendings from '../trendings'

import './TrendingSearches.css'

export const TrendingSearches = () => {
  const trendingsRef = useRef()
  const btnRef = useRef()

  useEffect(() => {
    const screenWidth = window.innerWidth
    if (screenWidth > 1024) {
      trendingsRef.current.classList.add('trendings--expanded')
      btnRef.current.style.display = 'none'
    }
  }, [])

  const handleToggleTrendings = () => {
    const $trendings = trendingsRef.current
    const $button = btnRef.current
    $trendings.classList.toggle('trendings--expanded')
    $button.classList.toggle('btn--rotate')
  }

  return (
    <section className='trending-searches'>

      <header className='trendings-searches__header'>
        <h2 className='title'><FontAwesomeIcon icon={faArrowTrendUp} /> Trendings</h2>
        <button onClick={handleToggleTrendings} ref={btnRef}><FontAwesomeIcon icon={faCaretRight} /></button>
      </header>

      <article className='trending-searches__trendings' ref={trendingsRef}>
        <Trendings />
      </article>

    </section>
  )
}
