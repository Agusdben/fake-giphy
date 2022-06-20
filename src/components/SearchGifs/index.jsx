import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { keywordFormatter } from '../../helpers/keywordFormatter'
import gifsServices from '../../services/gifs'
import './SearchGifs.css'

export const SearchGifs = () => {
  const searchRef = useRef()
  const [keyword, setKeyword] = useState('')
  const [errorMSG, setErrorMSG] = useState('')
  const navigate = useNavigate()

  const handleSearchGif = async (event) => {
    event.preventDefault()
    if (keyword !== '') {
      navigate(`/gif/search/${keywordFormatter(keyword)}`)
      setKeyword('')
    } else {
      searchRef.current.classList.toggle('empty-input')
      setErrorMSG('Please type something')
      setTimeout(() => {
        searchRef.current.classList.toggle('empty-input')
      }, 700)
    }
  }

  const handleKeyword = ({ target }) => {
    setKeyword(target.value)
    setErrorMSG('')
  }

  const handleRandomGif = async () => {
    const gif = await gifsServices.getRandomGif()
    navigate(`/gif/description/${gif.id}`)
  }

  return (
    <section className='search-gifs' ref={searchRef}>
      <form className='search-gifs__form' onSubmit={handleSearchGif}>
        <button type='submit'>🔍</button>
        <input autoFocus placeholder='Something fun...' type='text' value={keyword} onChange={handleKeyword} />
        {errorMSG && <span className='search-gifs__error'>{errorMSG}</span>}
      </form>
      <button className='search-gifs__random' onClick={handleRandomGif}>🎲</button>
    </section>
  )
}
