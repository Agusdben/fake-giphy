import React, { useEffect, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { Gifs } from '../../components/Gifs'
import useGifs from '../../hooks/useGifs'
import useObserver from '../../hooks/useObserver'

export const SearchGif = () => {
  const { keyword, rating = 'g' } = useParams()
  const { gifs, notFound, setPage } = useGifs({ keyword, rating })
  const observe = useRef()
  const isVisible = useObserver(observe)

  const title = ` Results of "${keyword.replace(/\+/g, ' ').trim()}"`

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage(currentPage => currentPage + 1),
      1000),
    [isVisible])

  useEffect(() => {
    if (isVisible) {
      debounceHandleNextPage()
    }
  }, [isVisible])

  return (
    <section className='search-gif'>
      <h2 className='title title--sticky'><FontAwesomeIcon icon={faSquarePollHorizontal} /> {title}</h2>
      {gifs.length > 0 &&
        <article>
          <Gifs gifs={gifs} />
        </article>}
      {notFound && <h3>No results for this search</h3>}
      <div id='visor' ref={observe} />
    </section>
  )
}
