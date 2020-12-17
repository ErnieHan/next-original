import React from 'react'

function CheckboxPlus({ options, checked, onChange }) {
  function handleChange(event, item) {
    const { checked } = event.target
    onChange(checked, item)
  }

  function handleChecked(item) {
    let bool = false
    const has = checked.findIndex(data => data === item.code)
    if (has !== -1) {
      bool = true
    }
    return bool
  }

  return (
    <div className="checkout-plus-content">
      {options &&
        options.map((item, index) => (
          <label key={index} className="label-btn">
            <div>{item.description}</div>
            <input
              type="checkbox"
              checked={handleChecked(item)}
              onChange={event => handleChange(event, item)}
            />
          </label>
        ))}
    </div>
  )
}

CheckboxPlus.defaultProps = {
  options: [],
  checked: [],
  onChange: () => {}
}

export default CheckboxPlus
