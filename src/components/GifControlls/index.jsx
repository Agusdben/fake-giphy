import { useState } from 'react'
import { faShare, faStar, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useUser from '../../hooks/useUser'
import useFavorite from '../../hooks/useFavorite'

const GifControlls = ({ gif }) => {
  const [successCopied, setsuccessCopies] = useState(false)
  const { favorites } = useUser()
  const { handleFavorite } = useFavorite()

  const handleShare = async () => {
    navigator.clipboard.writeText(gif.images.downsized_medium.url).then(() => {
      setsuccessCopies(true)
    })
  }

  return (
    <>
      <button className='gif-description__button gif-description__share' onClick={handleShare}>
        {successCopied
          ? <FontAwesomeIcon icon={faCheck} />
          : <FontAwesomeIcon icon={faShare} />}
        <span>{successCopied ? 'Copied!' : 'share'}</span>
      </button>

      <button className='gif-description__button gif-description__favorite' onClick={() => handleFavorite(gif.id)}>
        {favorites.includes(gif.id)
          ? <FontAwesomeIcon icon={faStar} />
          : <FontAwesomeIcon icon={faRegularStar} />}
        <span>{favorites.includes(gif.id) ? 'Remove' : 'Add'}</span>
      </button>
    </>
  )
}

export default GifControlls
