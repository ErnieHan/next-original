import React from 'react'
import { useSelector } from 'react-redux'

function Tag({ title, name, minRange, maxRange, onClick }) {
  const menu = useSelector(state => state.update.menu)
  const refinements = menu ? menu.refinements : []
  const obj = refinements.find(data => data.refinementType === title)
  const options = obj ? obj.options : []
  const obj2 = options.find(data => data.code === name)
  const refinementName = obj ? obj.refinementName : title
  const optionName = obj2 ? obj2.description : name

  return (
    <div className="tag-main">
      <div className="desc">
        <p className="title">{refinementName}</p>
        {minRange || maxRange ? (
          <p className="name">
            {minRange} - {maxRange}
          </p>
        ) : (
          <p className="name">{optionName}</p>
        )}
      </div>
      <div className="close" onClick={onClick}></div>
    </div>
  )
}

export default Tag
