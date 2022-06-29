import { Gifs } from '../Gifs'
import useGifs from '../../hooks/useGifs'

const formatRelatedResults = (str) => {
  // find "GIF By ..." index and delete from string for adecaute search
  const indexOfGifWord = str.indexOf('GIF')
  return str.substring(0, indexOfGifWord).trim()
}

const RelatedGifs = ({ gif }) => {
  const keyword = formatRelatedResults(gif.title)
  const { gifs: relatedGifs, notFound } =
    keyword
      ? useGifs({ keyword, rating: gif.rating })
      : useGifs({ keyword: gif.username, rating: gif.rating })

  return (
    <article className='related-gifs'>
      <h2 className='title title--sticky'>Related Gifs</h2>
      {relatedGifs.length > 0 && <Gifs gifs={relatedGifs} />}
      {notFound && <h3>No related gif founded</h3>}
    </article>
  )
}

export default RelatedGifs
