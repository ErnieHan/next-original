import React from 'react'
// redux
import { useSelector } from 'react-redux'

function Breadcrumbs() {
  const activeMode = useSelector(state => state.set.activeMode)
  const activePage = useSelector(state => state.set.activePage)
  const list = [
    {
      name: { ring: '> 戒指訂製', necklace: '> 吊墜/項鍊訂製', earring: '> 耳環訂製' },
      allow: ['landing', 'style', 'diamond', 'finish', 'tryon']
    },
    {
      name: { ring: '> 鑲嵌設計款式', necklace: '> 設計款式', earring: '> 設計款式' },
      allow: ['style']
    },
    {
      name: { ring: '> 鑽石款式', necklace: '> 鑽石款式', earring: '> 鑽石款式' },
      allow: ['diamond']
    }
  ]

  return (
    <div className="breadcrumbs-wrap">
      <div className="breadcrumbs-option">
        <span className="name">返回首頁</span>
      </div>
      {list.map(
        (item, index) =>
          item.allow.includes(activePage) && (
            <div className="breadcrumbs-option" key={index}>
              <span className="name">{item.name[activeMode]}</span>
            </div>
          )
      )}
    </div>
  )
}
export default Breadcrumbs
