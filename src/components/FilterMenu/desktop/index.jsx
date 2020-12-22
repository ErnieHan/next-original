import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../../../store/actions/set'
import { postRefinements } from '../../../store/actions/post'

import Modules from '../modules'

function FilterMenuDesktop() {
  const element = useRef(null)
  const [activeTab, setActiveTab] = useState(null)
  const menu = useSelector(state => state.update.menu)
  const selection = useSelector(state => state.selection)
  const dispatch = useDispatch()

  function handleToggle(data, index) {
    if (activeTab !== data.refinementType) {
      setActiveTab(data.refinementType)
    } else {
      setActiveTab(null)
    }
  }

  function handleSubmit() {
    // dispatch(setFilter(selection))
    dispatch(postRefinements(selection))
  }

  console.log('update')

  return (
    <div className="filter-menu-desktop">
      <div className="body" ref={element}>
        {menu &&
          menu.refinements.map((data, index) => (
            <div
              key={index}
              className={`option-wrapper ${activeTab === data.refinementType ? 'active' : ''}`}
            >
              <div className="option-head" onClick={() => handleToggle(data, index)}>
                <div className="title">{data.refinementName}</div>
                <div className="selections"></div>
              </div>
              <div className="option-content">
                <div className="module-wrapper">
                  <Modules data={data} />
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="footer">
        <button className="submit-btn" onClick={handleSubmit}>
          顯示匹配產品
        </button>
      </div>
      <div className="scale-btn"></div>
    </div>
  )
}

export default FilterMenuDesktop
