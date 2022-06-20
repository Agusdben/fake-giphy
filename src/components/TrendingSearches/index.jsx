import { Link } from 'react-router-dom'
import { keywordFormatter } from '../../helpers/keywordFormatter'
import useTrendingGifs from '../../hooks/useTrendingGifs'
import './TrendingSearches.css'

export const TrendingSearches = () => {
  const { trendingSearches } = useTrendingGifs()
  return (
    <section className='trending-searches'>
      <h2 className='title'>Trending Searches</h2>
      <article className='trending-searches__trendings'>
        {trendingSearches &&
          <>
            {
              trendingSearches.map(trendingSearch =>
                <Link className='trending-searches__link' key={trendingSearch} to={`/gif/search/${keywordFormatter(trendingSearch)}`}>
                  {trendingSearch}
                </Link>)
            }
          </>}
      </article>
    </section>
  )
}
