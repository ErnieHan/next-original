import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function FilterBar() {
  return (
    <nav className="filter-bar">
      <ul>
        <li>產品選項</li>
        <li>款號大至小</li>
        <li>全部貨類</li>
      </ul>
      <div className="filter-results-wrapper">
        <div className="content">
          <div className="result">
            <p className="title">金類</p>
            <p>18KW</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default FilterBar
