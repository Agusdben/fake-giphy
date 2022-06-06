import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Gifs } from '../../components/Gifs'
import { getGifsByKeyword } from '../../Redux/gifs'

export const SearchKeyword = () => {
  const searchedGifs = useSelector(store => store.gifs)
  const { keyword } = useParams()
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getGifsByKeyword(keyword))
  }, [keyword])

  return (
    <main>
      <h1>Search results "{keyword.replace(/\+/g, ' ').trim()}"</h1>
      <Gifs gifs={searchedGifs} />
    </main>
  )
}
