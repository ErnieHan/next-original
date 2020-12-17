import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterMenu, setFilterSort } from '../../store/actions/set'
import FilterMenuMobile from '../FilterMenu/mobile'
import FilterSort from '../FilterSort'

function FilterBar() {
  const filter = useSelector(state => state.filter)
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
          {filter.GT.map((data, index) => (
            <div key={index} className="result">
              <p className="title">分店</p>
              <p>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
      <FilterMenuMobile />
      <FilterSort />
    </nav>
  )
}

export default FilterBar
