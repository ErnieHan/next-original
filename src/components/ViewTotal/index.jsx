import React from 'react'

function ViewTotal({ count }) {
  return (
    <div className="view-total-wrap">
      共<span className="count">{count}</span>款設計可供選擇
    </div>
  )
}

ViewTotal.defaultProps = {
  count: '-'
}

export default ViewTotal
