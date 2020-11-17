import React, { useRef, useState } from 'react'

function SearchBar() {
  const element = useRef(null)
  const [searchText, setSearchText] = useState('')

  function handleSearchText(event) {
    setSearchText(event.target.value)
  }

  return (
    <div className="searchbar-main">
      <div className="searchbar-outline">
        <div className="input-outline">
          <input
            type="search"
            ref={element}
            className="searchbar"
            placeholder="搜尋商品"
            onChange={handleSearchText}
            value={searchText}
          />
          <div className="content">
            <div className="option">option1</div>
            <div className="option">option2</div>
            <div className="option">option3</div>
            <div className="option">option4</div>
          </div>
        </div>
        <div className="category-outline">
          <div className="name">珠寶</div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
