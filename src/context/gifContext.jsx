import { createContext, useEffect, useState } from 'react'
import gifsServices from '../services/gifs'

export const GifsContext = createContext(null)

export const GifsContextProvider = ({ children }) => {
  const [trendingGifs, setTrendingGifs] = useState(null) // gifs popular at the moment
  const [trendingSearches, setTrendingSearches] = useState(null) // keywords popular at the moment
  const [favoriteGifs, setFavoriteGifs] = useState(null) // an array object with all favorite gifs information
  const [lastSearch, setLastSearch] = useState(() => JSON.parse(window.localStorage.getItem('LastSearch'))) // object with kewyord, rating and language of last search
  const [favorites, setFavorites] = useState(() => JSON.parse(window.localStorage.getItem('Favorites')) || []) // an array with ids of gifs added to favorite
  const [isStartingApp, setIsStartingApp] = useState(true)

  useEffect(() => {
    const setTrendingContent = async () => {
      const gifs = await gifsServices.getTrendingGifs()
      const trendingSearches = await gifsServices.getTrendingSearches()
      setTrendingGifs(gifs)
      setTrendingSearches(trendingSearches)
    }
    setTrendingContent()
    setIsStartingApp(false)
  }, [])

  useEffect(() => {
    const searchFavorites = async () => {
      const favoritesIds = favorites.join(',')
      const favoriteGifs = await gifsServices.getGifsByIds(favoritesIds)
      setFavoriteGifs(favoriteGifs)
    }
    if (favorites.length > 0) searchFavorites()
    if (favorites.length === 0) setFavoriteGifs(null)
  }, [favorites])

  return (
    <GifsContext.Provider value={{
      trendingGifs,
      trendingSearches,
      lastSearch,
      favorites,
      favoriteGifs,
      isStartingApp,
      setLastSearch,
      setFavorites
    }}
    >
      {children}
    </GifsContext.Provider>
  )
}
