import React from 'react'

function Options({ data, active, handleChange }) {
  function handleOption(item) {
    const value = item.value
    let valueEdit
    if (value === active) {
      valueEdit = 'default'
    } else {
      valueEdit = value
    }
    const code = data.code
    handleChange(valueEdit, code)
  }

  return (
    <div className="style-filter-options">
      <div className="sfo-title">{data.title}</div>
      <div className="sfo-wrap">
        {data.options.map((item, index) => (
          <button
            key={index}
            className={`option-button ${item.value === active ? 'option-button--active' : ''}`}
            onClick={handleOption.bind(this, item)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Options
