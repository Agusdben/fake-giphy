import { useState, useEffect } from 'react'
import gifsServices from '../services/gifs'

const INITIAL_PAGE = 0

const useGifs = (keyword) => {
  const [gifs, setGifs] = useState([])
  const [page, setPage] = useState(INITIAL_PAGE)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    const search = async () => {
      const results = await gifsServices.getGifsByKeyword(keyword, page)
      if (results.length === 0) {
        setNotFound(true)
      }
      setGifs(results)
      setPage(INITIAL_PAGE)
    }
    search()
  }, [keyword])

  useEffect(() => {
    const search = async () => {
      if (page > INITIAL_PAGE && gifs.length > 0) {
        const results = await gifsServices.getGifsByKeyword(keyword, page)
        setGifs(actualGifs => actualGifs.concat(results))
      }
    }
    search()
  }, [page])

  return {
    gifs,
    notFound,
    setPage
  }
}

export default useGifs
