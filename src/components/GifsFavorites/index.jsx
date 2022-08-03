import { Gifs } from '../Gifs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'
import { HOME_INDEX } from '../../helpers/indexes'
import useUser from '../../hooks/useUser'

const GifsFavorites = () => {
  const { favoriteGifs } = useUser()

  if (favoriteGifs) {
    return (
      <article id={HOME_INDEX.FAVORITE_GIFS}>
        <h2 className='title title--sticky'><FontAwesomeIcon icon={faSquarePollHorizontal} /> My favorites</h2>
        <Gifs gifs={favoriteGifs} />
      </article>
    )
  }
}

export default GifsFavorites
