import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getGifsByKeyword } from '../../Redux/gifs'
import gifsServices from '../../services/gifs'

export const SearchGif = () => {
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch()

  const handleSearchGif = async (event) => {
    event.preventDefault()
    const keywordFormated = keyword.replace(/\s+/g, '+')
    dispatch(getGifsByKeyword(keywordFormated))
  }

  return (
    <form onSubmit={handleSearchGif}>
      <input type="text" onChange={({ target }) => setKeyword(target.value)} />
      <button>SEARCH</button>
    </form>
  )
}
