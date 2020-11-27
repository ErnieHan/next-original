import React from 'react'
import SearchBar from '../SearchBar'

function Header() {
  return (
    <header>
      <div className="header-flex">
        <div className="left">
          <a className="home-btn">home</a>
          <SearchBar mode="desktop" />
        </div>
        <div className="right">
          <div className="name">022 蘇玠城 Bernest</div>
          <div className="lang">EN</div>
        </div>
      </div>
    </header>
  )
}

export default Header
