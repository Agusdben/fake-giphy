import { useContext } from 'react'
import { GifsContext } from '../context/gifContext'

const useTrendingGifs = () => {
  const { trendingGifs, trendingSearches } = useContext(GifsContext)
  return {
    trendingGifs,
    trendingSearches
  }
}

export default useTrendingGifs
