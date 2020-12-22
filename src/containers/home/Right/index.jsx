import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tag from '../../../components/Tag'

function Right() {
  const selection = useSelector(state => state.selection)
  const filter = useSelector(state => state.filter)
  const menu = useSelector(state => state.update.menu)

  function handleRemove(data, item) {
    console.log(data, item)
  }

  return (
    <selection className="right">
      {menu && (
        <div className="filter-results-content">
          {menu.inputRefinements.map((data, index) => {
            if (data.value) {
              return data.value.map((item, jndex) => (
                <Tag
                  key={jndex}
                  title={data.refinementType}
                  name={item}
                  onClick={handleRemove.bind(this, data, item)}
                />
              ))
            } else {
              return (
                <Tag
                  key={index}
                  title={data.refinementType}
                  minRange={data.minRange}
                  maxRange={data.maxRange}
                />
              )
            }
          })}
        </div>
      )}
      以《One
      Piece》人氣角色索柏為設計藍本，黃金串珠可愛動人，同時運用了硬金電鑄及黑銠電鍍兩項工藝，令表面更具質感，可與其他《One
      Piece》串珠混搭佩戴，創造專屬您的冒險故事。
    </selection>
  )
}

export default Right
