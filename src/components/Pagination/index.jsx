import React, { useState, useRef } from 'react'

function Pagination({ activePage, totalPages }) {
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

  function handleClick(page) {
    console.log('page:', page)
    setHeight(null)
  }

  const list = new Array(totalPages).fill(0)

  return (
    <div className="pagination" tabIndex="0" onFocus={handleFocus} onBlur={handleBlur}>
      <div className="selector">第 {activePage} 頁</div>
      <div className="wrapper" style={{ height }}>
        <div className="content" ref={element}>
          {list.map((_, index) => (
            <div className="option" key={index} onClick={handleClick.bind(this, index + 1)}>
              第 {index + 1} 頁
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Pagination.defaultProps = {
  activePage: 1,
  totalPages: 10
}

export default Pagination
