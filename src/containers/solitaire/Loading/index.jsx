import React from 'react'
import ReactLoading from 'react-loading'

function Loading({ active }) {
  return (
    <div className={`solitaire-loading ${active ? 'solitaire-loading--active' : ''}`}>
      <ReactLoading type="spin" color="#dda1a9" width={40} />
    </div>
  )
}

export default Loading
