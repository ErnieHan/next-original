import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterSort } from '../../store/actions/set'

function FilterSort() {
  const showFilterSort = useSelector(state => state.set.showFilterSort)
  const dispatch = useDispatch()

  return (
    <div className={`filter-sort ${showFilterSort ? 'active' : ''}`}>
      {console.log('showFilterSort', showFilterSort)}
      <div className="filter-sort-backdrop">
        <div className="content">
          <div className="head">
            <p>款號大至小</p>
            <button
              className="close-btn"
              onClick={() => {
                dispatch(setFilterSort(false))
              }}
            >
              x
            </button>
          </div>
          <div className="body">
            <div className="option">由大至小</div>
            <div className="option">由小至大</div>
            <div className="option">由價格高至低</div>
            <div className="option">由價格低至高</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterSort
