const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.giphy.com/v1/gifs'

const getTrendingGifs = async () => {
  try {
    const url = `${BASE_URL}/trending?api_key=${API_KEY}&limit=25&rating=g`
    const response = await fetch(url)
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const getGifsByKeyword = async (keyword) => {
  try {
    const url = `${BASE_URL}/search?api_key=${API_KEY}&q=${keyword}&limit=25&rating=pg-13`
    const response = await fetch(url)
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const getOneGif = async (id) => {
  try {
    const url = `${BASE_URL}/${id}?api_key=${API_KEY}`
    const response = await fetch(url)
    const { data } = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const exports = { getGifsByKeyword, getTrendingGifs, getOneGif }

export default exports
