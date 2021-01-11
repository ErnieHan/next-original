import React from 'react'

function ModeButton({ item, handleMode }) {
  const { name, image, type, mode } = item
  function handleClick() {
    handleMode(mode, type)
  }

  return (
    <div className="mode-button-wrap">
      <button className="mode-button-body" onClick={handleClick}>
        <div className="name-wrap">
          <h2 className="name">{name}</h2>
        </div>
        <div className="image-wrap">
          <div className="image-box">
            <img className="mode-image" src={image} alt="" />
          </div>
        </div>
      </button>
    </div>
  )
}

export default ModeButton
