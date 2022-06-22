const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.giphy.com/v1'

const getTrendingGifs = async () => {
  try {
    const url = `${BASE_URL}/gifs/trending?api_key=${API_KEY}&limit=25&rating=g`
    const response = await fetch(url)
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const getTrendingSearches = async () => {
  try {
    const response = await fetch(`${BASE_URL}/trending/searches?api_key=${API_KEY}`)
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const getGifsByKeyword = async (keyword, page, limit = 25) => {
  try {
    const url = `${BASE_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${limit * page}`
    const response = await fetch(url)
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const getOneGif = async (id) => {
  try {
    const url = `${BASE_URL}/gifs/${id}?api_key=${API_KEY}`
    const response = await fetch(url)
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const getRandomGif = async () => {
  try {
    const url = `${BASE_URL}/gifs/random?api_key=${API_KEY}`
    const response = await fetch(url)
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const exports = { getGifsByKeyword, getTrendingGifs, getTrendingSearches, getOneGif, getRandomGif }

export default exports
