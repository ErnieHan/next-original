import React, { useEffect } from 'react'

function Error() {
  useEffect(() => {
    console.log('post error message')
  }, [])
  return <h1>This is error page</h1>
}

export default Error
