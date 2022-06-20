import React from 'react'
import { Link } from 'react-router-dom'
import { SearchGifs } from '../SearchGifs'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
      <div className='brand'>
        <Link to='/'>FakeGihpy</Link>
      </div>
      <SearchGifs />
    </header>
  )
}
