import React from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setActivePage } from '../../store/actions/set'

function OrderTab() {
  const activePage = useSelector(state => state.set.activePage)
  const activeStyle = useSelector(state => state.set.activeStyle)
  const activeDiamond = useSelector(state => state.set.activeDiamond)
  const dispatch = useDispatch()

  function handleStyle() {
    if (activePage !== 'style') {
      if (activeStyle !== null) {
        alert('重新選取?')
      } else {
        dispatch(setActivePage('style'))
      }
    }
  }

  function handleDiamond() {
    if (activePage !== 'diamond') {
      if (activeDiamond !== null) {
        alert('重新選取?')
      } else {
        dispatch(setActivePage('diamond'))
      }
    }
  }

  function handleActive(page) {
    let className = ''
    if (activePage === page) {
      className = 'tab-option--active'
    }
    return className
  }

  return (
    <div className="oder-tab-wrap">
      <div className={`tab-option ${handleActive('style')}`} onClick={handleStyle}>
        <span className="tab-number">1</span>
        <span className="tab-text">選擇設計款式</span>
        {activeStyle && (
          <span className="tab-tick">
            <img src="/images/icon-tick.svg" alt="" />
          </span>
        )}
      </div>
      <div className={`tab-option ${handleActive('diamond')}`} onClick={handleDiamond}>
        <span className="tab-number">2</span>
        <span className="tab-text">選擇鑽石</span>
        {activeDiamond && (
          <span className="tab-tick">
            <img src="/images/icon-tick.svg" alt="" />
          </span>
        )}
      </div>
    </div>
  )
}

export default OrderTab
