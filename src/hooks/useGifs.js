import { useState, useEffect } from 'react'
import gifsServices from '../services/gifs'

const INITIAL_PAGE = 0

const useGifs = ({ keyword, rating, lang }) => {
  const [gifs, setGifs] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [notFound, setNotFound] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  useEffect(() => {
    const search = async () => {
      const results = await gifsServices.getGifsByKeyword({ keyword, page, rating, lang })
      if (results.length === 0) {
        setNotFound(true)
      }
      setGifs(results)
      setPage(INITIAL_PAGE)
      setLoading(false)
    }
    setPage(0)
    setNotFound(false)
    setLoadingNextPage(false)
    setLoading(true)
    search()
  }, [keyword, rating, lang])

  useEffect(() => {
    const search = async () => {
      if (page > INITIAL_PAGE && gifs.length > 0) {
        setLoadingNextPage(true)
        const results = await gifsServices.getGifsByKeyword({ keyword, page, rating, lang })
        if (results.length < 25) {
          setLoadingNextPage(false)
        }
        setGifs(actualGifs => actualGifs.concat(results))
      }
    }
    search()
  }, [page])

  return {
    gifs,
    notFound,
    loading,
    loadingNextPage,
    setPage
  }
}

export default useGifs
