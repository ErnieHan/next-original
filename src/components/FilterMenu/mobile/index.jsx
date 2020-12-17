import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilterMenu, setSelection, setFilter } from '../../../store/actions/set'
import { postRefinements } from '../../../store/actions/post'

import Modules from '../modules'
import Tag from '../../Tag'

function FilterMenu() {
  const [activeTab, setActiveTab] = useState(null)
  const showFilterMenu = useSelector(state => state.set.showFilterMenu)
  const menu = useSelector(state => state.update.menu)
  const selection = useSelector(state => state.selection)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  function handleSlider(item) {
    setActiveTab(item.refinementType)
  }

  function handleCheckAll(data) {
    const key = data.refinementType
    const array = []
    for (var i in data.options) {
      array.push(data.options[i])
    }
    dispatch(setSelection(key, array))
  }

  return (
    <div className={`filter-menu ${showFilterMenu ? 'active' : ''}`}>
      <div className="filter-menu-backdrop" />
      <div className="filter-menu-wrapper">
        <div className="content-wrapper">
          <div className="head">
            <div>產品選項</div>
            <button className="reset-btn">重設所選用途</button>
          </div>
          <div className="filters-wrapper">
            <div>已選項目 ({filter.GT.length})</div>
            <div className="content">
              {filter.GT.map((data, index) => (
                <Tag
                  key={index}
                  name={data.description}
                  title="金類"
                  onClick={() => {
                    console.log('cancel', data)
                  }}
                />
              ))}
            </div>
          </div>
          <div className="body">
            {menu &&
              menu.refinements.map((data, index) => (
                <div key={index} className="option-content">
                  <p className="refs-name" onClick={handleSlider.bind(this, data)}>
                    {data.refinementName}
                  </p>
                  <div className="option-results"></div>
                  <div
                    className={`refs-opts-content ${
                      activeTab === data.refinementType ? 'active' : ''
                    }`}
                  >
                    <div className="head">
                      <div>
                        <button
                          onClick={() => {
                            setActiveTab(null)
                          }}
                        >
                          back
                        </button>

                        <span>{data.refinementName}</span>
                      </div>
                      {data.displayType === 'checkbox-plus' && (
                        <div>
                          <button onClick={handleCheckAll.bind(this, data)}>全選</button>
                        </div>
                      )}
                    </div>
                    <div className="body">
                      <Modules data={data} />
                    </div>
                    <div className="footer">footer</div>
                  </div>
                </div>
              ))}
          </div>
          <div className="footer">
            <button
              className="submit-btn"
              onClick={() => {
                dispatch(setFilterMenu(false))
                dispatch(setFilter(selection))
                dispatch(postRefinements(selection))
              }}
            >
              顯示匹配商品
            </button>
          </div>
        </div>
        <div className="close-btn-wrapper">
          <button
            className="close-btn"
            onClick={() => {
              dispatch(setFilterMenu(false))
            }}
          >
            close
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilterMenu
