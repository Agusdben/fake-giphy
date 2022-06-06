import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Gifs } from '../../components/Gifs'
import { getTrendingGifs } from '../../Redux/gifs'

export const Home = () => {
  const trendingGifs = useSelector(store => store.gifs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrendingGifs())
  }, [])

  return (
    <main>
      <h1>Trending gifs</h1>
      <Gifs gifs={trendingGifs}/>
    </main>
  )
}
