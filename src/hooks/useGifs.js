import { useEffect, useReducer } from 'react'
import gifsServices from '../services/gifs'

const INITIAL_PAGE = 0

const ACTIONS = {
  SET_GIFS: 'SET_GIFS',
  SET_LOADING: 'SET_LOADING',
  SET_PAGE: 'SET_PAGE',
  SET_NOTFOUND: 'SET_NOTFOUND',
  SET_LOADING_NEXT: 'SET_LOADING_NEXT',
  RESET_STATE: 'REST_STATE'
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_GIFS:
      return {
        ...state,
        gifs: payload
      }
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: payload
      }
    case ACTIONS.SET_PAGE:
      return {
        ...state,
        page: payload
      }
    case ACTIONS.SET_NOTFOUND:
      return {
        ...state,
        notFound: payload
      }
    case ACTIONS.SET_LOADING_NEXT:
      return {
        ...state,
        loadingNext: payload
      }
    case ACTIONS.RESET_STATE:
      return {
        ...payload
      }
    default:
      return state
  }
}

const useGifs = ({ keyword, rating, lang }) => {
  const initialState = {
    gifs: [],
    loading: true,
    page: INITIAL_PAGE,
    notFound: false,
    loadingNext: false
  }

  const [satate, dispatch] = useReducer(reducer, initialState)

  const { gifs, loading, page, notFound, loadingNext } = satate

  useEffect(() => {
    const search = async () => {
      dispatch({ type: ACTIONS.RESET_STATE, payload: initialState })

      const results = await gifsServices.getGifsByKeyword({ keyword, page: INITIAL_PAGE, rating, lang })

      if (results.length === 0) {
        dispatch({ type: ACTIONS.SET_NOTFOUND, payload: true })
      } else {
        dispatch({ type: ACTIONS.SET_GIFS, payload: results })
      }

      dispatch({ type: ACTIONS.SET_LOADING, payload: false })
    }

    search()
  }, [keyword, rating, lang])

  useEffect(() => {
    const search = async () => {
      if (page > INITIAL_PAGE && gifs.length > 0 && gifs.length % 25 === 0) {
        dispatch({ type: ACTIONS.SET_LOADING_NEXT, payload: true })

        const results = await gifsServices.getGifsByKeyword({ keyword, page, rating, lang })

        if (results.length < 25) {
          dispatch({ type: ACTIONS.SET_LOADING_NEXT, payload: false })
        }

        dispatch({ type: ACTIONS.SET_GIFS, payload: gifs.concat(results) })
      }
    }
    search()
  }, [page])

  return {
    gifs,
    notFound,
    loading,
    loadingNextPage: loadingNext,
    incrementPage: () => { dispatch({ type: ACTIONS.SET_PAGE, payload: page + 1 }) }
  }
}

export default useGifs
