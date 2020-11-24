import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterMenu, setFilterSort } from '../../store/actions/set'
import FilterMenu from '../FilterMenu'
import FilterSort from '../FilterSort'

function FilterBar() {
  const dispatch = useDispatch()

  return (
    <nav className="filter-bar">
      <ul>
        <li
          onClick={() => {
            dispatch(setFilterMenu(true))
          }}
        >
          產品選項
        </li>
        <li
          onClick={() => {
            dispatch(setFilterSort(true))
          }}
        >
          款號大至小
        </li>
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
      <FilterMenu />
      <FilterSort />
    </nav>
  )
}

export default FilterBar
