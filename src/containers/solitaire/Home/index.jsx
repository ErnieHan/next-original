import React from 'react'
// redux
import { useDispatch } from 'react-redux'
import { setActiveMode } from '../../../store/actions/set'
import { getRecommends } from '../../../store/actions/get'
// compoent
import SolitaireModeButton from '../../../components/SolitaireModeButton'

function Home() {
  const options = [
    { name: '戒指', mode: 'ring', image: '', type: 'ringSetting' },
    { name: '吊墜/項鍊', mode: 'necklace', image: '', type: 'necklaceSetting' },
    { name: '耳環', mode: 'earring', image: '', type: 'earringSetting' }
  ]

  const dispatch = useDispatch()

  function handleMode(mode, type) {
    // 更新mode
    dispatch(setActiveMode(mode))
    // 取得推薦商品的資料
    dispatch(getRecommends(type))
  }

  return (
    <div className="solitaire-home">
      <h3 className="head-title">選擇訂製飾品</h3>
      <div className="mode-content">
        {options.map((item, index) => (
          <SolitaireModeButton key={index} item={item} handleMode={handleMode.bind(this)} />
        ))}
      </div>
      <h3 className="sub-title">訂製流程</h3>
      <div className="step-content">
        <img src="https://cdn.chowsangsang.com/eshop/tw/newweb/home-step.png" />
      </div>
    </div>
  )
}

export default Home
