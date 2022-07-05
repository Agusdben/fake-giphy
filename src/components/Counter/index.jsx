import { useEffect, useState } from 'react'

const Counter = ({ arr }) => {
  const [plus, setPlus] = useState(0)

  useEffect(() => {
    if (!(plus < arr.length) && !(arr.length % 25)) {
      setPlus(0)
    }
  }, [arr])

  useEffect(() => {
    setTimeout(() => {
      if (plus < arr.length) {
        setPlus(plus + 1)
      }
    }, 40)
  })

  return (
    <span>{plus}</span>
  )
}

export default Counter
