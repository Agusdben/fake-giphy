import { useContext } from 'react'
import { GifsContext } from '../context/gifContext'

const useUser = () => {
  const {
    lastSearch,
    favorites,
    favoriteGifs,
    isStartingApp,
    setLastSearch,
    setFavorites
  } = useContext(GifsContext)

  const setLocalLastSearch = (lastSearcgObj) => {
    window.localStorage.setItem('LastSearch', JSON.stringify(lastSearcgObj))
    setLastSearch(lastSearcgObj)
  }

  const addLocalFavorites = (gifID) => {
    const newFavorites = favorites.concat(gifID)
    window.localStorage.setItem('Favorites', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }

  const removeLocalFavorite = (gifID) => {
    const newFavorites = favorites.filter(id => id !== gifID)
    window.localStorage.setItem('Favorites', JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }

  return {
    lastSearch,
    favorites,
    favoriteGifs,
    isStartingApp,
    setLocalLastSearch,
    addLocalFavorites,
    removeLocalFavorite
  }
}

export default useUser
