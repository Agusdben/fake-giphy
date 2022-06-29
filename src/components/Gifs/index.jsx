import React from 'react'
import Gif from '../Gif'
import './Gifs.css'

export const Gifs = ({ gifs }) => {
  return (
    <div className='gifs'>
      {
        gifs.map((gif, index) =>
          <Gif key={gif.id + index} gif={gif} />
        )
      }
    </div>
  )
}
