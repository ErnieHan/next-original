import React from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getStyleList } from '../../../store/actions/get'
// components
import LandingCard from '../../../components/LandingCard'
// functions
import isArray from '../../../functions/isArray'
import initStyleParams from '../../../functions/initStyleParams'

function Landing() {
  const activeMode = useSelector(state => state.set.activeMode)
  const recommends = useSelector(state => state.update.recommends)
  const dispatch = useDispatch()

  function content(name) {
    let obj
    if (activeMode === 'ring') {
      obj = {
        title: '鑽石戒指訂製',
        style: '鑲嵌設計款式',
        diamond: '鑽石款式'
      }
    } else if (activeMode === 'necklace') {
      obj = {
        title: '吊墜/項鍊訂製',
        style: '設計款式',
        diamond: '鑽石款式'
      }
    } else if (activeMode === 'earring') {
      obj = {
        title: '鑽石耳環訂製',
        style: '設計款式',
        diamond: '鑽石款式'
      }
    } else {
      obj = {
        title: '',
        style: '',
        diamond: ''
      }
    }
    return obj[name]
  }

  function handleStyle() {
    const obj = {
      ...initStyleParams
    }
    dispatch(getStyleList(obj, activeMode))
  }

  function handleDiamond() {}

  return (
    <div className="solitaire-landing">
      <div className="landing-left-wrap">
        <h3 className="head-title">{content('title')}</h3>
        <div className="buttons-wrap">
          <button className="style-button" onClick={handleStyle}>
            {content('style')}
          </button>
          <button className="diamond-button" onClick={handleDiamond}>
            {content('diamond')}
          </button>
        </div>
      </div>
      <div className="landing-right-wrap">
        {isArray(recommends) &&
          recommends.map((data, index) => <LandingCard key={index} data={data} />)}
      </div>
    </div>
  )
}

export default Landing
