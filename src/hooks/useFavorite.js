import { useContext } from 'react'
import { GifsContext } from '../context/gifContext'
import useUser from './useUser'

const useFavorite = () => {
  const { setFavorites } = useContext(GifsContext)
  const { favorites } = useUser()

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

  const handleFavorite = (gifID) => {
    favorites.includes(gifID)
      ? removeLocalFavorite(gifID)
      : addLocalFavorites(gifID)
  }

  return {
    handleFavorite
  }
}

export default useFavorite
