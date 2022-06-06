import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <div className='brand'>
        <Link to='/'>FakeGihpy</Link>
      </div>
    </header>
  )
}
