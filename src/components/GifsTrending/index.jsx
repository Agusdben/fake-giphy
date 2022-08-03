import { Gifs } from '../Gifs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'
import { HOME_INDEX } from '../../helpers/indexes'
import useTrendingGifs from '../../hooks/useTrendingGifs'

const GifsTrendings = () => {
  const { trendingGifs } = useTrendingGifs()

  if (trendingGifs) {
    return (
      <article id={HOME_INDEX.TRENDINGS}>
        <h2 className='title title--sticky'><FontAwesomeIcon icon={faSquarePollHorizontal} /> Trending gif's</h2>
        <Gifs gifs={trendingGifs} />
      </article>
    )
  }
}

export default GifsTrendings
