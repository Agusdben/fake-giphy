import { faShare, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  }, [id, rating])

  return (
    <section className='gif-description'>
      {loading && <Loader />}
      {!loading &&
        <>
          <article className='gif-description__contianer'>

            <div className='gif-description__user'>
              {gif.user && <UserCard user={gif.user} />}
              {!gif.user && <UserCard user={defaultUser} />}
            </div>

            <Gif gif={gif} isLink={false} />

            <div className='gif-description__controlls'>
              <div>
                <button><FontAwesomeIcon icon={faShare} /> </button>
                <span>Share</span>
              </div>
              <div>
                <button><FontAwesomeIcon icon={faStar} /></button>
                <span>Favorite</span>
              </div>
            </div>

          </article>
          <RelatedGifs gif={gif} rating={rating} />
        </>}
      {!gif === 0 && <>Not Found</>}
    </section>
  )
}
