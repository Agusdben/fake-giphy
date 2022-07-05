import React from 'react'
import { Gifs } from '../../components/Gifs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'
import useTrendingGifs from '../../hooks/useTrendingGifs'
import GifsLastSearch from '../../components/GifsLastSearch'
import useUser from '../../hooks/useUser'

export const Home = () => {
  const { trendingGifs } = useTrendingGifs()
  const { lastSearch } = useUser()
  return (
    <section>
      <h2 className='title title--sticky'>
        <FontAwesomeIcon icon={faSquarePollHorizontal} /> Trending gifs
      </h2>
      {trendingGifs && <Gifs gifs={trendingGifs} />}
      {lastSearch && <GifsLastSearch lastSearch={lastSearch} />}
    </section>
  )
}
