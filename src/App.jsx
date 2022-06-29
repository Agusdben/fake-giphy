import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'

import { Home } from './pages/Home'
import { SearchGif } from './pages/SearchGif'
import { GifDescription } from './pages/GifDescription'

import { GifsContextProvider } from './context/gifContext'
import { ReturnToTop } from './components/ReturnToTop'

import { TrendingSearches } from './components/TrendingSearches'

import './App.css'

export const App = () => {
  return (
    <GifsContextProvider>
      <Router>
        <div className='app'>
          <ReturnToTop />
          <Header />
          <main>
            <TrendingSearches />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/gif/search/:keyword/' element={<SearchGif />} />
              <Route path='/gif/search/:keyword/:rating' element={<SearchGif />} />
              <Route path='/gif/description/:id' element={<GifDescription />} />
            </Routes>
          </main>
        </div>
      </Router>
    </GifsContextProvider>
  )
}
