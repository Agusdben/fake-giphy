import debounce from 'just-debounce-it'
import React, { useEffect, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Gifs } from '../../components/Gifs'
import useGifs from '../../hooks/useGifs'
import useObserver from '../../hooks/useObserver'

import './SearchGif.css'

export const SearchGif = () => {
  const { keyword } = useParams()
  const { gifs, notFound, setPage } = useGifs(keyword)
  const observe = useRef()
  const isVisible = useObserver(observe)
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
      <h2 className='search-gif__title title'>Results of "{keyword.replace(/\+/g, ' ').trim()}"</h2>
      {gifs.length > 0 &&
        <article>
          <Gifs gifs={gifs} />
        </article>}
      {notFound && <h3>No results for this search</h3>}
      <div id='visor' ref={observe} />
    </section>
  )
}
