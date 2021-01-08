import React from 'react'

function Card({ data }) {
  return (
    <div className="card-wrapper">
      {console.log(data)}
      <div className="card-content">
        {data.isPersonalizationByCatalogItem && (
          <div className="tag">
            DIY
            <br />
            專屬
            <br />
            商品
          </div>
        )}
        <div className="image">
          <img src={data.images.imagePath} alt="" />
        </div>
        <div className="body">
          <div className="desc">
            <p className="code">{data.code}</p>
            <p>{data.productName1}</p>
            <p>{data.productName2}</p>
            <p>{data.productName}</p>
            <p className="price">
              {data.priceRange.min.currency} {data.priceRange.min.price.toLocaleString()} -{' '}
              {data.priceRange.max.currency} {data.priceRange.max.price.toLocaleString()}
            </p>
          </div>
          <div className="keywords">
            {data.styleSet && (
              <span className="keyword-tag style">#{data.styleSet.description}</span>
            )}
            {/* <span className="keyword-tag size">#手鍊</span> */}
          </div>
          <div className="other">
            <div>
              {data.productLifeCycle.referenceCode} / {data.stockInfo.totalStockCount}
            </div>
            <div className="stocks">
              <div className="online">a</div>
              <div className="offline">b</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
