import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan } from '@fortawesome/free-solid-svg-icons'

import './Index.css'

const Index = ({ indexItems }) => {
  const asideRef = useRef()
  const [extended, setExtended] = useState(false)

  const handleExtendIndex = () => {
    setExtended(!extended)
    asideRef.current.classList.toggle('index--extended')
  }

  const handleScroll = (element) => {
    const $element = document.querySelector(`#${element}`)
    $element.scrollIntoView({ behavior: 'smooth' })
    asideRef.current.classList.toggle('index--extended')
  }

  return (
    <aside className='index' ref={asideRef}>
      <FontAwesomeIcon onClick={handleExtendIndex} className='index__controll' icon={faLessThan} />
      <ul className='index__list'>
        {
          indexItems.map(index =>
            <li key={index} className='index__item'>
              <button onClick={() => handleScroll(index)} className='index__button'>{index}</button>
            </li>)
        }
      </ul>
    </aside>
  )
}

export default Index
