import React, { useRef, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { keywordFormatter } from '../../helpers/keywordFormatter'
import gifsServices from '../../services/gifs'
import { RATINGS } from '../../helpers/rating'
import { LANGUAGES } from '../../helpers/languages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchGifs.css'

const ACTIONS = {
  UPDATE_KEYWORD: 'UPDATE_KEYWORD',
  RESET_KEYWORD: 'RESET_KEYWORD',
  SET_ERROR: 'SET_ERROR',
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  CHANGE_RATING: 'CHANGE_RATING'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      }
    case ACTIONS.RESET_KEYWORD:
      return {
        ...state,
        keyword: action.payload
      }
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case ACTIONS.CHANGE_RATING:
      return {
        ...state,
        rating: action.payload
      }
    default:
      return state
  }
}

export const SearchGifs = () => {
  const searchRef = useRef()
  const navigate = useNavigate()

  const [state, dispatch] = useReducer(reducer, {
    keyword: '',
    error: '',
    rating: RATINGS.g,
    lang: LANGUAGES.en
  })

  const handleSearchGif = async (event) => {
    event.preventDefault()
    if (state.keyword !== '') {
      navigate(`/gif/search/${keywordFormatter(state.keyword)}/${state.rating}`)
      dispatch({ type: ACTIONS.RESET_KEYWORD, payload: '' })
    } else {
      searchRef.current.classList.toggle('empty-input')
      dispatch({ type: ACTIONS.SET_ERROR, payload: 'Please type something' })
      setTimeout(() => {
        searchRef.current.classList.toggle('empty-input')
      }, 700)
    }
  }

  const handleKeyword = ({ target }) => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: target.value })
    dispatch({ type: ACTIONS.SET_ERROR, payload: '' })
  }

  const handleRating = ({ target }) => {
    dispatch({ type: ACTIONS.CHANGE_RATING, payload: target.value })
  }

  const handleRandomGif = async () => {
    const gif = await gifsServices.getRandomGif()
    navigate(`/gif/description/${gif.id}`)
  }

  return (
    <section className='search-gifs' ref={searchRef}>
      <form className='search-gifs__form' onSubmit={handleSearchGif}>
        <button type='submit'><FontAwesomeIcon icon={faSearch} /></button>
        <input className='search-gifs__input' autoFocus placeholder='Something fun...' type='text' value={state.keyword} onChange={handleKeyword} />
        <select onChange={handleRating}>
          <option disabled />
          {
            Object.values(RATINGS).map((rating) => <option key={rating} value={rating}>{rating}</option>)
          }
        </select>
        {state.error && <span className='search-gifs__error'>{state.error}</span>}
      </form>
      <button className='search-gifs__random' onClick={handleRandomGif}>🎲</button>
    </section>
  )
}
