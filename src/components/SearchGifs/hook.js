import { useReducer } from 'react'
import { LANGUAGES } from '../../helpers/languages'
import { RATINGS } from '../../helpers/rating'

const ACTIONS = {
  SET_KEYWORD: 'SET_KEYWORD',
  SET_ERROR: 'SET_ERROR',
  SET_LANGUAGE: 'SET_LANGUAGE',
  SET_RATING: 'SET_RATING'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_KEYWORD:
      return {
        ...state,
        error: '',
        keyword: action.payload
      }
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case ACTIONS.SET_RATING:
      return {
        ...state,
        rating: action.payload
      }
    case ACTIONS.SET_LANGUAGE:
      return {
        ...state,
        lang: action.payload
      }
    default:
      return state
  }
}

const useForm = () => {
  const [state, dispatch] = useReducer(reducer, {
    keyword: '',
    error: '',
    rating: RATINGS.g,
    lang: LANGUAGES.en
  })

  const { keyword, error, rating, lang } = state

  return {
    keyword,
    error,
    rating,
    lang,
    setKeyword: keyword => dispatch({ type: ACTIONS.SET_KEYWORD, payload: keyword }),
    setError: error => dispatch({ type: ACTIONS.SET_ERROR, payload: error }),
    setRating: rating => dispatch({ type: ACTIONS.SET_RATING, payload: rating }),
    setLang: lang => dispatch({ type: ACTIONS.SET_LANGUAGE, payload: lang })
  }
}

export default useForm
