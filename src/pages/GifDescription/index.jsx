import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Gif from '../../components/Gif'
import Loader from '../../components/Loader'
import RelatedGifs from '../../components/RelatedGifs'
import UserCard from '../../components/UserCard'
import gifsServices from '../../services/gifs'

import './GifDescription.css'

const defaultUser = {
  username: null,
  display_name: 'User not available',
  avatar_url: null,
  is_verified: false
}

export const GifDescription = () => {
  const [loading, setLoading] = useState(true)
  const [gif, setGif] = useState(null)
  const { id, rating } = useParams()

  useEffect(() => {
    const getGifbyId = async () => {
      setLoading(true)
      const gif = await gifsServices.getOneGif({ id, rating })
      setGif(gif)
      setLoading(false)
    }
    getGifbyId()
  }, [id])

  return (
    <section className='gif-description'>
      {loading && <Loader />}
      {!loading &&
        <>
          <article className='gif-description__gif'>
            {gif.user && <UserCard user={gif.user} />}
            {!gif.user && <UserCard user={defaultUser} />}
            <Gif gif={gif} isLink={false} />
          </article>
          <RelatedGifs gif={gif} rating={rating} />
        </>}
      {!gif === 0 && <>Not Found</>}
    </section>
  )
}
