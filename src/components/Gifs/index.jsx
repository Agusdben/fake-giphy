import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTrendingGifs } from '../../Redux/gifs'
import { Gif } from '../Gif'

export const Gifs = () => {
  const trendingGifs = useSelector(store => store.gifs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrendingGifs())
  }, [])

  return (
    <section style={{columns: 'auto'}}>
      {trendingGifs && <>
        {
          trendingGifs.map(gif => {
            const gifURL = gif.images.fixed_height.url
            return <Gif key={gif.id} gif={gifURL} />
          })
        }
      </>}
    </section>
  )
}
