import React from 'react'

function Card() {
  console.log('update-card')
  return (
    <div className="card-wrapper">
      <div className="card-content">
        <div className="tag">DIY專屬商品</div>
        <div className="image">
          <img
            src="https://cdn.chowsangsang.com/dfs/UAT/ivCssModelImages/91509/2742406b216a5130e720afd7af39966c.jpg"
            alt=""
          />
        </div>
        <div className="body">
          <div className="desc">
            <p className="code">91509B-24GG-00</p>
            <p>Charme</p>
            <p>Murano Glass 彩色玻璃珠組合</p>
            <p>999黃金手鍊</p>
            <p className="price">HKD 2,000 - HKD 2,800</p>
          </div>
          <div>down</div>
        </div>
      </div>
    </div>
  )
}

export default Card
