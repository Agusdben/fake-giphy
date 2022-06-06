import React from 'react'
import { Gif } from '../Gif'

export const Gifs = ({ gifs }) => {
  return (
    <section>
      {
        gifs.map(gif => <Gif key={gif.id} gif={gif} />)
      }
    </section>
  )
}
