import React from 'react'

function ButtonRange({ options, onChange }) {
  function handleClick(item) {
    onChange(item)
  }

  return (
    <div className="button-range-content">
      <div className="max-min-wrapper">
        <div className="maxmin-outline">
          <input type="text" placeholder="最小" />
        </div>
        <div className="range-line">－</div>
        <div className="maxmin-outline">
          <input type="text" placeholder="最大" />
        </div>
      </div>
      <div className="buttons-wrapper">
        {options &&
          options.map((item, index) => (
            <div key={index} className="range-btn-outline">
              <button className="range-btn" onClick={handleClick.bind(this, item)}>
                {item.description}
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

ButtonRange.defaultProps = {
  options: [],
  onChange: () => {}
}

export default ButtonRange
