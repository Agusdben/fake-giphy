import React from 'react'
import './App.css'
import { SearchGif } from './components/SearchGif'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <div className="App">
      <SearchGif />
      <Home />
    </div>
  )
}
