import React from 'react'
import { useSelector } from 'react-redux'
import ReactLoading from 'react-loading'

function FullPageLoading() {
  const isLoading = useSelector(state => state.set.isLoading)
  return (
    <div className="loading-wrapper">
      <div className="loading-content">
        <ReactLoading type="bubbles" color="#dfb585" width={35} height={35} />
      </div>
    </div>
  )
}

export default FullPageLoading
