import { faShare, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Gif from '../../components/Gif'
import Loader from '../../components/Loader'
import RelatedGifs from '../../components/RelatedGifs'
import UserCard from '../../components/UserCard'
import useUser from '../../hooks/useUser'
import gifsServices from '../../services/gifs'

import './GifDescription.css'
import useFavorite from '../../hooks/useFavorite'

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
  const { favorites } = useUser()
  const { handleFavorite } = useFavorite()

  useEffect(() => {
    const getGifbyId = async () => {
      setLoading(true)
      const gif = await gifsServices.getOneGif({ id, rating })
      setGif(gif)
      setLoading(false)
    }
    getGifbyId()
  }, [id, rating])

  const handleShare = () => { }

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
              <button className='gif-description__button' onClick={handleShare}>
                <FontAwesomeIcon icon={faShare} />
              </button>

              <button className='gif-description__button' onClick={() => handleFavorite(gif.id)}>
                {favorites.includes(gif.id)
                  ? <FontAwesomeIcon icon={faStar} />
                  : <FontAwesomeIcon icon={faRegularStar} />}
              </button>
            </div>

          </article>
          <RelatedGifs gif={gif} rating={rating} />
        </>}
    </section>
  )
}
