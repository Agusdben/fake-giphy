import React from 'react'
import { Link } from 'react-router-dom'

import './Gif.css'

const Gif = ({ gif, isLink = true }) => {
  const { url } = gif.images.original
  const className = isLink ? 'gif grid-center gif--link colorful-item' : 'gif gif--description colorful-item'
  const { title } = gif
  return (
    <picture className={className}>
      <img loading='lazy' src={url} alt={title} />
      {isLink && <Link className='gif__link' to={`/gif/description/${gif.id}`} />}
      <span className='gif__title'>{gif.title}</span>
    </picture>
  )
}

export default React.memo(Gif)
