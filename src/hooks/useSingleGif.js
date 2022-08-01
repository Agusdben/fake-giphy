import { useEffect, useState } from 'react'
import gifsServices from '../services/gifs'

const useSingleGif = ({ id }) => {
  const [gif, setGif] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getGifbyId = async () => {
      setLoading(true)
      const gif = await gifsServices.getOneGif({ id })
      setGif(gif)
      setLoading(false)
    }
    getGifbyId()
  }, [id])

  return {
    gif,
    loading
  }
}

export default useSingleGif
