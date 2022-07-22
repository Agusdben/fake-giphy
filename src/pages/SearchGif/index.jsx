import React, { useEffect, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { Gifs } from '../../components/Gifs'
import useGifs from '../../hooks/useGifs'
import useObserver from '../../hooks/useObserver'
import Loader from '../../components/Loader'

import './SearchGif.css'

export const SearchGif = () => {
  const { keyword, rating, lang } = useParams()
  const { gifs, notFound, incrementPage, loading, loadingNextPage } = useGifs({ keyword, rating, lang })
  const observe = useRef()
  const isVisible = useObserver(observe)

  const title = ` GIFs of "${keyword.replace(/\+/g, ' ').trim()}"`

  const debounceHandleNextPage = useCallback(
    debounce(() => incrementPage(),
      1500),
    [isVisible])

  useEffect(() => {
    if (isVisible && !loading) {
      debounceHandleNextPage()
    }
  }, [isVisible])

  return (
    <section className='search-gif'>
      {loading && <Loader />}
      <div>
        <h2 className='title title--sticky'><FontAwesomeIcon icon={faSquarePollHorizontal} /> {title}</h2>
        {!loading &&
          <>
            {!notFound
              ? <Gifs gifs={gifs} />
              : <h3>No results for this search</h3>}
          </>}
      </div>
      <div id='visor' ref={observe} />
      {loadingNextPage &&
        <div className='search-gif__loading-next'>
          <Loader />
        </div>}
    </section>
  )
}
