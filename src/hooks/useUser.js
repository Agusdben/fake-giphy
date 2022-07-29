import { useContext } from 'react'
import { GifsContext } from '../context/gifContext'

const useUser = () => {
  const {
    lastSearch,
    favorites,
    favoriteGifs,
    isStartingApp,
    setLastSearch
  } = useContext(GifsContext)

  const setLocalLastSearch = (lastSearcgObj) => {
    window.localStorage.setItem('LastSearch', JSON.stringify(lastSearcgObj))
    setLastSearch(lastSearcgObj)
  }

  return {
    lastSearch,
    favorites,
    favoriteGifs,
    isStartingApp,
    setLocalLastSearch
  }
}

export default useUser
