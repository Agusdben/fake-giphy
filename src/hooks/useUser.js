import { useContext } from 'react'
import { GifsContext } from '../context/gifContext'

const useUser = () => {
  const {
    lastSearch,
    setLastSearch
  } = useContext(GifsContext)

  const setLocalLastSearch = (lastSearcgObj) => {
    window.localStorage.setItem('LastSearch', JSON.stringify(lastSearcgObj))
    setLastSearch(lastSearcgObj)
  }

  return {
    lastSearch,
    setLocalLastSearch
  }
}

export default useUser
