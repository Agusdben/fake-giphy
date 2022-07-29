const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.giphy.com/v1'
// https://api.giphy.com/v1/gifs/search/tags?api_key=##########################&q=marvel&=20&=offset=0

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

const getGifsByKeyword = async ({ keyword, page = 0, limit = 25, rating = 'g', lang = 'en' }) => {
  try {
    const url = `${BASE_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${limit * page}&rating=${rating}&lang=${lang}`
    const response = await fetch(url)
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const getOneGif = async ({ id }) => {
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

const getGifsByIds = async (ids) => {
  try {
    const url = `${BASE_URL}/gifs?api_key=${API_KEY}&ids=${ids},`
    const response = await fetch(url)
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

const exports = { getGifsByKeyword, getTrendingGifs, getTrendingSearches, getOneGif, getRandomGif, getGifsByIds }

export default exports
