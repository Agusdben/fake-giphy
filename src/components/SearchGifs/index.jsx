import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { keywordFormatter } from '../../helpers/keywordFormatter'
import gifsServices from '../../services/gifs'
import { RATINGS } from '../../helpers/rating'
import { LANGUAGES } from '../../helpers/languages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import useForm from './hook'
import useUser from '../../hooks/useUser'
import './SearchGifs.css'
import Select from '../Select'

export const SearchGifs = () => {
  const searchRef = useRef()
  const navigate = useNavigate()
  const { setLocalLastSearch } = useUser()

  const {
    keyword,
    error,
    rating,
    lang,
    setKeyword,
    setError,
    setRating,
    setLang
  } = useForm()

  const handleSearchGif = async (event) => {
    event.preventDefault()
    if (keyword !== '') {
      setLocalLastSearch({ keyword, rating, lang })
      setKeyword('')
      navigate(`/gif/search/${keywordFormatter(keyword)}/${rating}/${lang}`)
    } else {
      searchRef.current.classList.toggle('empty-input')
      setError('Please type something')
      setTimeout(() => {
        searchRef.current.classList.toggle('empty-input')
      }, 700)
    }
  }

  const handleKeyword = ({ target }) => {
    setKeyword(target.value)
  }

  const handleRating = ({ target }) => {
    setRating(target.value)
  }

  const handleLang = ({ target }) => {
    setLang(target.value)
  }

  const handleRandomGif = async () => {
    const gif = await gifsServices.getRandomGif()
    navigate(`/gif/description/${gif.id}`)
  }

  return (
    <section className='search-gifs'>
      <form className='search-gifs__form' onSubmit={handleSearchGif}>
        <div className='search-gifs__group'>
          <Select className='search-gif__select' onChange={handleRating} options={Object.values(RATINGS)} />
          <Select className='search-gif__select' onChange={handleLang} options={Object.values(LANGUAGES)} />
        </div>
        <div ref={searchRef} className='search-gifs__group search-gifs__group--last'>
          <input className='search-gifs__input' autoFocus placeholder='Something fun...' type='text' value={keyword} onChange={handleKeyword} />
          <button className='search-gifs__submit'><FontAwesomeIcon icon={faSearch} /></button>
          {error && <span className='search-gifs__error'>{error}</span>}
        </div>
      </form>
      {/* <button className='search-gifs__random' onClick={handleRandomGif}>🎲</button> */}
    </section>
  )
}
