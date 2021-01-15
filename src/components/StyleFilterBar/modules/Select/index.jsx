import React, { useState, useEffect } from 'react'

function Select({ data, active, handleChange }) {
  const [show, setShow] = useState(false)
  const selected = data.options.find(item => item.value === active)

  useEffect(() => {
    window.addEventListener('click', handleEvent)
  }, [])

  function handleEvent(event) {
    const classList = event.target.classList
    const enable = classList.contains('sfs-selection')
    if (!enable) {
      setShow(false)
    }
  }

  function handleToggle() {
    if (!data.disable) {
      setShow(!show)
    }
  }

  function handleOption(item) {
    const value = item.value
    const code = data.code
    handleChange(value, code)
    setShow(false)
  }

  return (
    <div className={`style-filter-select ${data.disable ? 'style-filter-select--disable' : ''}`}>
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
