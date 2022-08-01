import React from 'react'

import { useParams } from 'react-router-dom'

import Gif from '../../components/Gif'
import GifControlls from '../../components/GifControlls'
import Loader from '../../components/Loader'
import RelatedGifs from '../../components/RelatedGifs'
import UserCard from '../../components/UserCard'

import useSingleGif from '../../hooks/useSingleGif'

import './GifDescription.css'

const defaultUser = {
  username: null,
  display_name: 'User not available',
  avatar_url: null,
  is_verified: false
}

export const GifDescription = () => {
  const { id, rating } = useParams()
  const { gif, loading } = useSingleGif({ id })

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
              <GifControlls gif={gif} />
            </div>
          </article>

          <RelatedGifs gif={gif} rating={rating} />
        </>}
    </section>
  )
}
