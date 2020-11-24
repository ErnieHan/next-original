import React, { useState, useRef } from 'react'

function Pagination() {
  const [height, setHeight] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const element = useRef(null)

  function handleFocus() {
    setShowOptions(true)
    setHeight(element.current.offsetHeight)
  }

  function handleBlur() {
    setShowOptions(false)
    setHeight(null)
  }

  return (
    <div className="pagination" tabIndex="0" onFocus={handleFocus} onBlur={handleBlur}>
      <div className="selector">第1頁</div>
      <div className="wrapper" style={{ height }}>
        <div className="content" ref={element}>
          <div className="option">第1頁</div>
          <div className="option">第2頁</div>
          <div className="option">第3頁</div>
          <div className="option">第4頁</div>
          <div className="option">第5頁</div>
          <div className="option">第6頁</div>
        </div>
      </div>
    </div>
  )
}

export default Pagination
