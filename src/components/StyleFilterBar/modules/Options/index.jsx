import React from 'react'

function Options({ data }) {
  return (
    <div className="style-filter-options">
      <div className="sfo-title">{data.title}</div>
      <div className="sfo-wrap">
        {data.options.map((item, index) => (
          <button key={index} className="option-button">
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Options
