import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export const SearchGif = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSearchGif = async (event) => {
    event.preventDefault()
    const keywordFormated = keyword.replace(/\s+/g, '+')
    setKeyword('')
    navigate(`/gif/search/${keywordFormated}`)
  }

  return (
    <form onSubmit={handleSearchGif}>
      <input type="text" value={keyword} onChange={({ target }) => setKeyword(target.value)} />
      <button>SEARCH</button>
    </form>
  )
}
