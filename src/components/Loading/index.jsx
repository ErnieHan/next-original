import React from 'react'
import { useSelector } from 'react-redux'

function Loading() {
  const isLoading = useSelector(state => state.set.isLoading)
  return <div>Load status : {isLoading ? 'loading' : 'loaded'}</div>
}

export default Loading
