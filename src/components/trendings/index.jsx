import React from 'react'
import useTrendingGifs from '../../hooks/useTrendingGifs'
import { Link } from 'react-router-dom'
import { keywordFormatter } from '../../helpers/keywordFormatter'

import './Trendings.css'

const Trendings = () => {
  const { trendingSearches } = useTrendingGifs()

  if (trendingSearches) {
    return (
      <>
        {
          trendingSearches.map(trendingSearch =>
            <Link className='trendings__link' key={trendingSearch} to={`/gif/search/${keywordFormatter(trendingSearch)}`}>
              {trendingSearch}
            </Link>)
        }
      </>
    )
  }
}

export default React.memo(Trendings)
