import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'

import { Home } from './pages/Home'
import { SearchGif } from './pages/SearchGif'
import { GifDescription } from './pages/GifDescription'

import { GifsContextProvider } from './context/gifContext'

import { ReturnToTop } from './components/ReturnToTop'
import { TrendingSearches } from './components/TrendingSearches'
import Footer from './components/Footer'

import './App.css'

export const App = () => {
  return (
    <GifsContextProvider>
      <Router>
        <div className='app'>
          <Header />
          <main className='app__main'>
            <TrendingSearches />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/gif/search/:keyword/' element={<SearchGif />}>
                <Route path=':rating' element={<SearchGif />} />
                <Route path=':rating/:lang' element={<SearchGif />} />
              </Route>
              <Route path='/gif/description/:id' element={<GifDescription />} />
            </Routes>
          </main>
          <ReturnToTop />
          <Footer />
        </div>
      </Router>
    </GifsContextProvider>
  )
}
