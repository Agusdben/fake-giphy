import { Gifs } from '../Gifs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'
import { HOME_INDEX } from '../../helpers/indexes'
import useUser from '../../hooks/useUser'
import useGifs from '../../hooks/useGifs'

const GifsLastSearch = () => {
  const { lastSearch } = useUser()
  const { keyword } = lastSearch
  const { gifs: gifsLastSearch } = useGifs({ ...lastSearch })

  if (gifsLastSearch) {
    return (
      <article id={HOME_INDEX.LAST_SEARCH}>
        <h2 className='title title--sticky'>
          <FontAwesomeIcon icon={faSquarePollHorizontal} /> Last Search "{keyword}"
        </h2>
        <Gifs gifs={gifsLastSearch} />
      </article>
    )
  }
}

export default GifsLastSearch
