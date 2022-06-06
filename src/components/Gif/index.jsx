import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export const Gif = ({ gif }) => {
  const gifElment = useRef(null)
  const url = gif.images.fixed_height.url
  const id = gif.id
  return (
    <Link to={`/gif/description/${id}`} ref={gifElment} id={id}>
      <img src={url} className='gif' />
    </Link>
  )
}
