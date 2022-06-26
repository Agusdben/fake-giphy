import { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import Trendings from '../trendings'

import './TrendingSearches.css'

export const TrendingSearches = () => {
  const [toggleTrendings, setToggleTrendings] = useState(false)
  const trendingsRef = useRef()
  const btnRef = useRef()

  useEffect(() => {
    const screenWidth = window.innerWidth
    if (screenWidth > 1024) {
      setToggleTrendings(true)
      trendingsRef.current.classList.add('trendings--expanded')
      btnRef.current.classList.add('btn--rotate')
    }
  }, [])

  const handleToggleTrendings = () => {
    setToggleTrendings(!toggleTrendings)
    const $trendings = trendingsRef.current
    const $button = btnRef.current
    !toggleTrendings ? $trendings.classList.add('trendings--expanded') : $trendings.classList.remove('trendings--expanded')
    !toggleTrendings ? $button.classList.add('btn--rotate') : $button.classList.remove('btn--rotate')
  }

  return (
    <section className='trending-searches'>

      <header className='trendings-searches__header'>
        <h2 className='title'>Trending Searches</h2>
        <button onClick={handleToggleTrendings} ref={btnRef}><FontAwesomeIcon icon={faCaretRight} /></button>
      </header>

      <article className='trending-searches__trendings' ref={trendingsRef}>
        <Trendings />
      </article>

    </section>
  )
}
