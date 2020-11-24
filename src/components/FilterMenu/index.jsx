import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFilterMenu } from '../../store/actions/set'

function FilterMenu() {
  const showFilterMenu = useSelector(state => state.set.showFilterMenu)
  const dispatch = useDispatch()

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
            <div>已選項目 (4)</div>
            <div>filters</div>
          </div>
          <div className="body">
            <div className="option">
              <p>款號</p>
              <div className="option-results">18KR-DD</div>
            </div>
            <div className="option">
              <p>產品類別</p>
              <div className="option-results">B手鍊, H金飾</div>
            </div>
            <div className="option">用途</div>
            <div className="option">主石卡重</div>
            <div className="option">存貨價格</div>
            <div className="option">黃金重量</div>
            <div className="option">系列</div>
            <div className="option">分店</div>
            <div className="option">存貨</div>
            <div className="option">簡易模式一</div>
            <div className="option">簡易模式二</div>
            <div className="option">簡易模式三</div>
          </div>
          <div className="footer">
            <button
              className="submit-btn"
              onClick={() => {
                dispatch(setFilterMenu(false))
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
