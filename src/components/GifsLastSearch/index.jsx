import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'
import { Gifs } from '../Gifs'
import useGifs from '../../hooks/useGifs'

const GifsLastSearch = ({ lastSearch }) => {
  const { keyword, rating, lang } = lastSearch
  const { gifs, loading, notFound } = useGifs({ keyword, rating, lang })
  if (!notFound && !loading) {
    return (
      <>
        <h2 className='title title--sticky'><FontAwesomeIcon icon={faSquarePollHorizontal} /> Last Search "{lastSearch.keyword}"</h2>
        <Gifs gifs={gifs} />
      </>
    )
  }
}

export default GifsLastSearch
