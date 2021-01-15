import React from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setShowStyleDialog, setStyleInfo } from '../../store/actions/set'

function StyleCard({ data }) {
  const dispatch = useDispatch()

  function hanldeCard() {
    // 1. open dialog
    dispatch(setShowStyleDialog(true))
    // 2. get information
    dispatch(setStyleInfo(data))
  }

  function handleGoldTypes(event) {
    event.stopPropagation()
    console.log('handle gold types')
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
        <div className="golds-wrap" onClick={handleGoldTypes}>
          other golds
        </div>
        <div className="sub-collection-wrap">
          <span className="sub-collection">{data.subCollection}</span>
        </div>
      </div>
    </div>
  )
}

StyleCard.defaultProps = {
  data: {
    brandCode: '',
    styleCatgNbr: '',
    productName: '',
    price: 0,
    image: '',
    subCollection: 'subCollection'
  }
}

export default StyleCard
