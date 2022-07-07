import { Gifs } from '../Gifs'
import useGifs from '../../hooks/useGifs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'
import Loader from '../Loader'

const formatRelatedResults = (str) => {
  // find "GIF By ..." index and delete from string for adecaute search
  const indexOfGifWord = str.indexOf('GIF')
  return str.substring(0, indexOfGifWord).trim()
}

const RelatedGifs = ({ gif }) => {
  const keyword = formatRelatedResults(gif.title)
  const { gifs: relatedGifs, notFound, loading } =
    keyword
      ? useGifs({ keyword, rating: gif.rating })
      : useGifs({ keyword: gif.username, rating: gif.rating })

  return (
    <article className='related-gifs' style={{ position: 'relative', minHeight: '100vh' }}>
      {loading && <Loader />}
      <h2 className='title title--sticky'> <FontAwesomeIcon icon={faSquarePollHorizontal} /> Related Gif's</h2>
      {!loading &&
        <>
          {!notFound && <Gifs gifs={relatedGifs} />}
          {notFound && <h3>No related gif founded</h3>}
        </>}
    </article>
  )
}

export default RelatedGifs
