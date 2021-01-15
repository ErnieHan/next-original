import React from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setShowStyleDialog, setActiveStyle } from '../../store/actions/set'
import { getDiamondList } from '../../store/actions/get'
// components
import Dialog from '../Dialog'

function StyleDetailDialog() {
  const showStyleDialog = useSelector(state => state.set.showStyleDialog)
  const styleInfo = useSelector(state => state.set.styleInfo)
  const activeMode = useSelector(state => state.set.activeMode)
  const activeDiamond = useSelector(state => state.set.activeDiamond)
  const dispatch = useDispatch()

  function handleCancel() {
    dispatch(setShowStyleDialog(false))
  }

  function handleSubmit() {
    // 更新activeStyle
    const activeStyle = styleInfo
    dispatch(setActiveStyle(activeStyle))
    // 關閉dialog
    dispatch(setShowStyleDialog(false))

    // 判斷是否有選擇鑽石款式
    if (activeDiamond === null) {
      const obj = {}
      // 進入鑽石款式頁
      dispatch(getDiamondList(obj, activeMode, activeStyle))
      console.log('go to diamond page')
    } else {
      // 完成訂單
      console.log('go to finish page')
    }
  }

  return (
    <Dialog active={showStyleDialog} handleCancel={handleCancel}>
      {styleInfo && (
        <div className="style-dialog-body">
          <div className="product-name">{styleInfo.productName}</div>
          <div className="list-wrap">
            <div className="list">
              <div className="title">鑲嵌設計編號</div>
              <div className="value">{styleInfo.styleCatgNbr}</div>
            </div>
            <div className="list">
              <div className="title">材質</div>
              <div className="value">18K白金</div>
            </div>
            <div className="list">
              <div className="title">支援克拉</div>
              <div className="value">{styleInfo.diamondWtRange}</div>
            </div>
          </div>
          <div className="list-wrap">
            <div className="list">
              <div className="title">價格</div>
              <div className="price-value">NTD {Number(styleInfo.price).toLocaleString()} 起</div>
            </div>
          </div>
          <div className="images-wrap">
            <img src={styleInfo.image} alt="" />
          </div>
          <div className="remark-wrap">
            <p className="remark-text">*圖片只供參考</p>
            <p className="remark-text">*0.7克拉參考圖片</p>
            <p className="remark-text">設計專利證書號 108305338</p>
          </div>
          <div className="control-wrap">
            <button className="submit-btn" onClick={handleSubmit}>
              確定設計款式
            </button>
          </div>
        </div>
      )}
    </Dialog>
  )
}

export default StyleDetailDialog
