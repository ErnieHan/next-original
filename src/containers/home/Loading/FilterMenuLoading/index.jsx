import React from 'react'
// packages
import ReactLoading from 'react-loading'

export default function FilterMenuLoading() {
  return (
    <div className="filter-menu-loading-wrap">
      <ReactLoading type="bubbles" color="#dfb585" width={50} height={50} />
    </div>
  )
}
