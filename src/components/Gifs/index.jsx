import React from 'react'
import Gif from '../Gif'
import './Gifs.css'

export const Gifs = ({ gifs }) => {
  const className = gifs.length < 25 ? 'gifs' : 'gifs grid-center'
  return (
    <div className={className}>
      {
        gifs.map((gif, index) =>
          <Gif key={gif.id + index} gif={gif} />
        )
      }
    </div>
  )
}
