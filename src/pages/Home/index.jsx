import React from 'react'
import { Gifs } from '../../components/Gifs'
import useTrendingGifs from '../../hooks/useTrendingGifs'

export const Home = () => {
  const { trendingGifs } = useTrendingGifs()

  return (
    <section>
      <h2 className='home__title title'>Trending gifs</h2>
      {trendingGifs && <Gifs gifs={trendingGifs} />}
    </section>
  )
}
