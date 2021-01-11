import React from 'react'
// redux
import { useSelector } from 'react-redux'
// components
import StyleCard from '../../../components/StyleCard'
import StyleFilterBar from '../../../components/StyleFilterBar'

function Style() {
  const styleList = useSelector(state => state.update.styleList)

  return (
    <div className="solitaire-style">
      <div className="style-left-wrap">
        <StyleFilterBar />
      </div>
      <div className="style-right-wrap">
        <div className="style-cards-wrap">
          {styleList &&
            styleList.results.map((data, index) => <StyleCard data={data} key={index} />)}
        </div>
      </div>
    </div>
  )
}

export default Style
