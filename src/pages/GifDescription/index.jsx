import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Gif from '../../components/Gif'
import gifsServices from '../../services/gifs'

export const GifDescription = () => {
  const [loading, setLoading] = useState(true)
  const [gif, setGif] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getGifbyId = async () => {
      setLoading(true)
      const gif = await gifsServices.getOneGif(id)
      setGif(gif)
      setLoading(false)
    }
    getGifbyId()
  }, [id])

  return (
    <section>
      {loading && <>CARGANDO</>}
      {!loading &&
        <article>
          <h2>{gif.title}</h2>
          <Gif gif={gif} isLink={false} />
        </article>}
      {!gif && <>Not Found</>}
    </section>
  )
}
