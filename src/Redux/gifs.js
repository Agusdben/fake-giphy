import gifsServices from '../services/gifs'

const initialGifs = []

// types
const GET_TRENDING_GIFS = 'GET_TRENDING_GIFS'
const GET_KEYWORD_GIFS = 'GET_KEYWORD_GIFS'
const GET_ONE_GIF = 'GET_ONE_GIF'

// reducer
export const gifsReducer = (state = initialGifs, { type, payload }) => {
  switch (type) {
    case GET_TRENDING_GIFS:
      return payload
    case GET_KEYWORD_GIFS:
      return payload
    case GET_ONE_GIF:
      return payload
    default:
      return state
  }
}

// actions
export const getTrendingGifs = () => {
  return async (dispatch) => {
    try {
      const trendingGifs = await gifsServices.getTrendingGifs()
      dispatch({
        type: GET_TRENDING_GIFS,
        payload: trendingGifs
      })
    } catch (error) { console.error(error) }
  }
}

export const getGifsByKeyword = (keyword) => {
  return async (dispatch) => {
    try {
      const keywordGifs = await gifsServices.getGifsByKeyword(keyword)
      dispatch({
        type: GET_KEYWORD_GIFS,
        payload: keywordGifs
      })
    } catch (error) { console.error(error) }
  }
}

export const getOneGif = (id) => {
  return async (dispatch) => {
    const gif = await gifsServices.getOneGif(id)
    dispatch({
      type: GET_ONE_GIF,
      payload: [gif]
    })
  }
} 
