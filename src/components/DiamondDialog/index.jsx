import React from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setShowDiamondDialog, setActiveDiamond } from '../../store/actions/set'
import { getStyleList } from '../../store/actions/get'
import { initState } from '../../store/reducers/set'
// components
import Dialog from '../Dialog'

function DiamondDialog() {
  const showDiamondDialog = useSelector(state => state.set.showDiamondDialog)
  const diamondInfo = useSelector(state => state.set.diamondInfo)
  const activeMode = useSelector(state => state.set.activeMode)
  const activeStyle = useSelector(state => state.set.activeStyle)
  const dispatch = useDispatch()

  function handleCancel() {
    dispatch(setShowDiamondDialog(false))
  }

  function handleSubmit() {
    // 更新activeDiamond
    const activeDiamond = diamondInfo
    dispatch(setActiveDiamond(activeDiamond))
    // 關閉dialog
    dispatch(setShowDiamondDialog(false))

    // 判斷是否有選擇設計款式
    if (activeStyle === null) {
      // 進入設計款式頁
      const init = initState.styleParams
      let obj = {
        ...init
      }
      dispatch(getStyleList(obj, activeMode, activeDiamond))
    } else {
      // 完成訂單
      console.log('go to finish page')
    }
  }

  return (
    <Dialog active={showDiamondDialog} handleCancel={handleCancel}>
      {diamondInfo && (
        <div className="diamond-dialog-body">
          <div className="brand-name">{diamondInfo.diamondBrand}</div>
          <div className="product-name">
            {diamondInfo.ctWt}克拉{diamondInfo.shapeDescription}鑽石
          </div>
          <div className="list-wrap">
            <div className="list">
              <div className="title">鑽石編號</div>
              <div className="value">{diamondInfo.invntId}</div>
            </div>
            <div className="list">
              <div className="title">形狀</div>
              <div className="value">{diamondInfo.shape}</div>
            </div>
            <div className="list">
              <div className="title">淨度</div>
              <div className="value">{diamondInfo.clarity}</div>
            </div>
            <div className="list">
              <div className="title">克拉</div>
              <div className="value">{diamondInfo.ctWt}</div>
            </div>
            <div className="list">
              <div className="title">車工</div>
              <div className="value">{diamondInfo.cut}</div>
            </div>
            <div className="list">
              <div className="title">拋光</div>
              <div className="value">{diamondInfo.polish}</div>
            </div>
            <div className="list">
              <div className="title">對稱</div>
              <div className="value">{diamondInfo.symmetry}</div>
            </div>
            <div className="list">
              <div className="title">螢光反應</div>
              <div className="value">{diamondInfo.fluorescence}</div>
            </div>
            <div className="list">
              <div className="title">證書</div>
              <div className="value">MUST_BE_CHANGE</div>
            </div>
          </div>
          <div className="list-wrap">
            <div className="list">
              <div className="title">鑽石價格</div>
              <div className="price-value">NTD {Number(diamondInfo.price).toLocaleString()}</div>
            </div>
          </div>
          <div className="images-wrap">images here</div>
          <div className="remark-wrap">
            <p className="remark-text">*圖片只供參考</p>
            <p className="remark-text">*0.7克拉參考圖片</p>
          </div>
          <div className="control-wrap">
            <button className="submit-btn" onClick={handleSubmit}>
              確定鑽石
            </button>
          </div>
        </div>
      )}
    </Dialog>
  )
}

export default DiamondDialog
