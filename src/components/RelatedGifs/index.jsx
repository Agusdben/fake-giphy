import { Gifs } from '../Gifs'
import useGifs from '../../hooks/useGifs'

import './RelatedGifs.css'

const formatRelatedResults = (str) => {
  // find "GIF By ..." index and delete from string for adecaute search
  const indexOfGifWord = str.indexOf('GIF')
  return str.substring(0, indexOfGifWord).trim()
}

const RelatedGifs = ({ gif }) => {
  const keyword = gif.title ? formatRelatedResults(gif.title) : gif.user.display_name
  console.log(keyword)
  const { gifs: relatedGifs, notFound } = useGifs(keyword)

  return (
    <section className='related-gifs'>
      <h2 className='title related-gifs__title'>Related Gifs</h2>
      {relatedGifs && <Gifs gifs={relatedGifs} />}
      {notFound && <h3>No results for this search</h3>}
    </section>
  )
}

export default RelatedGifs
