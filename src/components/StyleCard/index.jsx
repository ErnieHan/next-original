import React from 'react'

function StyleCard({ data }) {
  function hanldeCard() {
    // 1. open dialog
    console.log('handle card')
    // 2. get information
  }

  return (
    <div className="style-card-wrap">
      <div className="style-card" onClick={hanldeCard}>
        <div className="brand">{data.brandCode}</div>
        <div className="desc">
          <p className="code">{data.styleCatgNbr}</p>
          <p className="name">{data.productName}</p>
          <p className="price">NTD {data.price} 起</p>
        </div>
        <div>
          <img src={data.image} alt="" />
        </div>
        <div className="golds-wrap">other golds</div>
        <div className="sub-collection-wrap">
          <span className="sub-collection">{data.subCollection}</span>
        </div>
      </div>
    </div>
  )
}

export default StyleCard
