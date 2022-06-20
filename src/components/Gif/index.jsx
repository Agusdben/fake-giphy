import React from 'react'
import { Link } from 'react-router-dom'

import './Gif.css'

const Gif = ({ gif, isLink = true }) => {
  const { url } = gif.images.original
  const { title } = gif
  return (
    <picture className='gif grid-center'>
      <img loading='lazy' src={url} alt={title} />
      {isLink && <Link className='gif__link' to={`/gif/description/${gif.id}`} />}
    </picture>
  )
}

export default React.memo(Gif)
