import React from 'react'

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
            <p>Gold Type</p>
            <p>18KW 玫瑰白金</p>
            <p>delete</p>
          </div>
          <div className="result">
            <p>Currency</p>
            <p>$HKD</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default FilterBar
