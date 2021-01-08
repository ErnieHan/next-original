import React from 'react'

function LandingCard({ data }) {
  return (
    <div className="landing-card">
      <p>{data.productName}</p>
      <p>支援克拉{data.diamondWtRange}</p>
      <p>款號{data.styleCatgNbr}</p>
    </div>
  )
}

export default LandingCard
