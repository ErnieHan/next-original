import React from 'react'
import ReactLoading from 'react-loading'

export default function CardsLoading() {
  return (
    <div className="cards-loading">
      <ReactLoading type="bubbles" color="#dfb585" width={50} height={50} />
    </div>
  )
}
