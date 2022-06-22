import { createContext, useEffect, useState } from 'react'
import gifsServices from '../services/gifs'

export const GifsContext = createContext(null)

export const GifsContextProvider = ({ children }) => {
  const [trendingGifs, setTrendingGifs] = useState(null)
  const [trendingSearches, setTrendingSearches] = useState(null)
  useEffect(() => {
    const setTrendingContent = async () => {
      const gifs = await gifsServices.getTrendingGifs()
      const trendingSearches = await gifsServices.getTrendingSearches()
      setTrendingGifs(gifs)
      setTrendingSearches(trendingSearches)
    }
    setTrendingContent()
  }, [])

  return (
    <GifsContext.Provider value={{
      trendingGifs,
      trendingSearches
    }}
    >
      {children}
    </GifsContext.Provider>
  )
}