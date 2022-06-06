import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Gif } from '../../components/Gif'
import { getOneGif } from '../../Redux/gifs'

export const GifDescription = () => {
  const [gif, setGif] = useState(null)
  const { id } = useParams()
  const gifs = useSelector(store => store.gifs)
  const dispatch = useDispatch()

  useEffect(() => {
    // if not have the gif in memory, we can search it
    if (gifs.length === 0) {
      dispatch(getOneGif(id))
    } else { // if the gif is in memory, we cant filter it by their id
      const gif = gifs.find(gif => gif.id === id)
      setGif(gif)
    }
  }, [id, gifs])

  return (
    <main>
      {gif && <>
        <h2>here is the GIF</h2>
        <h3>{gif.title}</h3>
        <Gif gif={gif} />
      </>}
    </main>
  )
}
