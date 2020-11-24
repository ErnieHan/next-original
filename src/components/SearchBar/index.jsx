import React, { useRef, useState } from 'react'
import { HOST_URL } from '../../constants'
let search_timer

function SearchBar() {
  const element = useRef(null)
  const [searchText, setSearchText] = useState('')
  const [isFocus, setIsFocus] = useState(false)
  const [keywords, setKeywords] = useState(null)
  const [showKeywords, setShowKeywords] = useState(false)

  function handleSearchText(event) {
    const { value } = event.target
    setSearchText(value)
    clearTimeout(search_timer)
    setShowKeywords(false)
    if (value.trim() !== '') {
      search_timer = setTimeout(searching, 1000)
    }
  }

  function handleFocus() {
    setIsFocus(true)
  }

  function handleBlur() {
    setIsFocus(false)
  }

  async function searching() {
    try {
      const res = await fetch(`${HOST_URL}/example`)
      if (res.ok) {
        const data = await res.json()
        setKeywords(data)
        setShowKeywords(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  function handleKeywords(data) {
    setSearchText(data.givenName)
    setIsFocus(true)
    setShowKeywords(false)
    element.current.focus()
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(searchText)
  }

  return (
    <div className="searchbar-main">
      <div
        className={`searchbar-outline ${isFocus ? 'focus' : ''} ${
          showKeywords ? 'has-keywords' : ''
        }`}
      >
        <div className="input-outline">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              ref={element}
              className="searchbar"
              placeholder="搜尋商品"
              value={searchText}
              onChange={handleSearchText}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {showKeywords && (
              <div className="content">
                {keywords &&
                  keywords.map((data, index) => (
                    <div className="option" key={index} onClick={handleKeywords.bind(this, data)}>
                      {data.givenName}
                    </div>
                  ))}
              </div>
            )}
          </form>
        </div>
        <div className="category-outline">
          <div className="name">珠寶</div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
