import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import useFavorite from '../../hooks/useFavorite'
import './Gif.css'

const Gif = ({ gif, isLink = true }) => {
  const { url } = gif.images.downsized_medium
  const className = isLink ? 'gif gif--link colorful-item' : 'gif gif--description'
  const { title } = gif
  const { favorites } = useUser()
  const { handleFavorite } = useFavorite()

  return (
    <picture className={className}>
      <img loading='lazy' className={isLink ? 'img-fit-cover' : 'img-fit-contain'} src={url} alt={title} />
      {isLink && <Link className='gif__link' to={`/gif/description/${gif.id}`} />}
      <span className='gif__title'>{gif.title}</span>
      {isLink &&
        <button className='gif__favorite' onClick={() => handleFavorite(gif.id)}>
          {favorites.includes(gif.id)
            ? <FontAwesomeIcon style={{ color: 'var(--color-primary)' }} icon={faStar} />
            : <FontAwesomeIcon icon={faRegularStar} />}
        </button>}
    </picture>
  )
}

export default React.memo(Gif)
