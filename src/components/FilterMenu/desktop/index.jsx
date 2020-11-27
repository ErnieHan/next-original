import React, { useState } from 'react'

function FilterMenuDesktop() {
  const [activeTab, setActiveTab] = useState(null)
  const refinements = [
    { type: '款號', optoins: [{ code: '18KW', description: '18KW 黃金' }], displayType: 'checkbox' }
  ]

  function handleToggle(data) {
    if (activeTab !== data.type) {
      setActiveTab(data.type)
    } else {
      setActiveTab(null)
    }
  }

  return (
    <div className="filter-menu-desktop">
      <div className="body">
        {refinements.map((data, index) => (
          <div key={index} className={`option-wrapper ${activeTab === data.type ? 'active' : ''}`}>
            <div className="option-head" onClick={handleToggle.bind(this, data)}>
              <div className="title">{data.type}</div>
              <div className="selections"></div>
            </div>
            <div className="option-content">
              {data.optoins.map((item, jndex) => (
                <label key={jndex} className="filter-option">
                  <div>{item.description}</div>
                  <input type="checkbox" />
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>footer</div>
    </div>
  )
}

export default FilterMenuDesktop
