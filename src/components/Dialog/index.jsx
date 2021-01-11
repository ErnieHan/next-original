import React from 'react'

function Dialog({ children, active, handleCancel }) {
  return (
    <div
      className={`solitaire-dialog-backdrop ${active ? 'solitaire-dialog-backdrop--active' : ''}`}
    >
      <div className="solitaire-dialog-wrap">
        <div
          className="close-btn"
          onClick={() => {
            handleCancel()
          }}
        />
        {children}
      </div>
    </div>
  )
}

Dialog.defaultProps = {
  children: '',
  active: false,
  handleCancel: () => {}
}

export default Dialog
