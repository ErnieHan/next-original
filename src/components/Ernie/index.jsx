import React, { useState } from 'react'

export default function Ernie() {
  function handleClick() {
    setIsExplose(true)
  }

  const [isExplose, setIsExplose] = useState(false)
  if (isExplose) {
    throw new Error('this is tesing')
  }
  return <button onClick={handleClick}>catch error event</button>
}
