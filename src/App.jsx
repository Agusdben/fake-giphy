import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Header'
import { SearchGif } from './components/SearchGif'

import { Home } from './pages/Home'
import { SearchKeyword } from './pages/SearchKeyword'

import './App.css'
import { GifDescription } from './pages/GifDescription'

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <SearchGif />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gif/search/:keyword' element={<SearchKeyword />} />
          <Route path='/gif/description/:id' element={<GifDescription />} />
        </Routes>
      </div>
    </Router>
  )
}
