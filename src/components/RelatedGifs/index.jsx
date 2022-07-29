import { Gifs } from '../Gifs'
import useGifs from '../../hooks/useGifs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePollHorizontal } from '@fortawesome/free-solid-svg-icons'
import Loader from '../Loader'
import LoadMore from '../LoadMore'

const formatRelatedResults = (str) => {
  // find "GIF By ..." index and delete from string for adecaute search
  const indexOfGifWord = str.indexOf('GIF')
  return str.substring(0, indexOfGifWord).trim()
}

const RelatedGifs = ({ gif }) => {
  const keyword = formatRelatedResults(gif.title)
  const searchObj = keyword ? { keyword, rating: gif.rating } : { keyword: gif.username, rating: gif.rating }
  const { gifs: relatedGifs, notFound, loading } = useGifs(searchObj)

  return (
    <article className='related-gifs' style={{ minHeight: '500px' }}>
      {loading && <Loader />}
      <h2 className='title title--sticky'> <FontAwesomeIcon icon={faSquarePollHorizontal} /> Related Gif's</h2>
      {!loading &&
        <>
          {!notFound &&
            <Gifs gifs={relatedGifs}>
              {relatedGifs.length >= 25 && <LoadMore searchObj={searchObj} />}
            </Gifs>}
          {notFound && <h3>No related gif founded</h3>}
        </>}
    </article>
  )
}

export default RelatedGifs
