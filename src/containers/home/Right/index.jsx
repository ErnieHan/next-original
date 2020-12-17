import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Tag from '../../../components/Tag'
import { refinementTypes } from '../../../common/refinementTypes'

function Right() {
  const selection = useSelector(state => state.selection)
  const filter = useSelector(state => state.filter)
  const menu = useSelector(state => state.update.menu)

  return (
    <div>
      {menu && (
        <div className="content">
          {menu.inputRefinements.map((data, index) => {
            if (data.value) {
              return data.value.map((item, jndex) => (
                <Tag key={jndex} title={data.refinementType} name={item} />
              ))
            } else {
              return (
                <Tag
                  key={index}
                  title={data.refinementType}
                  name={data.minRange}
                />
              )
            }
          })}
        </div>
      )}
      以《One
      Piece》人氣角色索柏為設計藍本，黃金串珠可愛動人，同時運用了硬金電鑄及黑銠電鍍兩項工藝，令表面更具質感，可與其他《One
      Piece》串珠混搭佩戴，創造專屬您的冒險故事。
    </div>
  )
}

export default Right
