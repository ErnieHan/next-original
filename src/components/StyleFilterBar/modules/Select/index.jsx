import React, { useState } from 'react'

function Select({ data, active, handleChange }) {
  const [show, setShow] = useState(false)
  const selected = data.options.find(item => item.value === active)

  function handleToggle() {
    setShow(!show)
  }

  function handleOption(item) {
    const value = item.value
    const code = data.code
    handleChange(value, code)
    setShow(false)
  }

  console.log(active, selected)

  return (
    <div className="style-filter-select">
      <div className="sfs-title">{data.title}</div>
      <div className="sfs-wrap">
        <div className="sfs-selection" onClick={handleToggle}>
          {selected && selected.name}
        </div>
        <div className={`sfs-options-wrap ${show ? 'sfs-options-wrap--active' : ''}`}>
          {data.options.map((item, index) => (
            <div key={index} className="sfs-option" onClick={handleOption.bind(this, item)}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Select
