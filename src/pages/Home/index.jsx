import React from 'react'
import { Gifs } from '../../components/Gifs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'
import useTrendingGifs from '../../hooks/useTrendingGifs'
import useUser from '../../hooks/useUser'
import useGifs from '../../hooks/useGifs'
import Loader from '../../components/Loader'

export const Home = () => {
  const { trendingGifs } = useTrendingGifs()
  const { lastSearch, favoriteGifs, isStartingApp } = useUser()

  const { gifs: gifsLastSearch } = useGifs({ ...lastSearch })

  return (
    <section>
      {isStartingApp && <Loader />}
      {
        trendingGifs &&
          <article>
            <h2 className='title title--sticky'>
              <FontAwesomeIcon icon={faSquarePollHorizontal} /> Trending gif's
            </h2>
            <Gifs gifs={trendingGifs} />
          </article>
      }

      {
        gifsLastSearch &&
          <article>
            <h2 className='title title--sticky'>
              <FontAwesomeIcon icon={faSquarePollHorizontal} /> Last Search "{lastSearch.keyword}"
            </h2>
            <Gifs gifs={gifsLastSearch} />
          </article>
      }

      {
        favoriteGifs &&
          <article>
            <h2 className='title title--sticky'>
              <FontAwesomeIcon icon={faSquarePollHorizontal} /> My favorites
            </h2>
            <Gifs gifs={favoriteGifs} />
          </article>
      }

    </section>
  )
}
