import React, { useState, useEffect } from 'react'
import useUser from '../../hooks/useUser'
import Loader from '../../components/Loader'
import GifsTrendings from '../../components/GifsTrending'
import GifsLastSearch from '../../components/GifsLastSearch'
import GifsFavorites from '../../components/GifsFavorites'
import { HOME_INDEX } from '../../helpers/indexes'
import Index from '../../components/Index'

export const Home = () => {
  const [index, setIndex] = useState([])
  const { isStartingApp, favorites, lastSearch } = useUser()

  useEffect(() => {
    const index = [HOME_INDEX.TRENDINGS]
    if (lastSearch) index.push(HOME_INDEX.LAST_SEARCH)
    if (favorites.length > 0) index.push(HOME_INDEX.FAVORITE_GIFS)
    setIndex(index)
  }, [favorites, lastSearch])

  return (
    <section style={{ position: 'relative' }}>
      {isStartingApp && <Loader />}
      <GifsTrendings />
      <GifsLastSearch />
      <GifsFavorites />
      <Index indexItems={index} />
    </section>
  )
}
