import React from 'react'
// redux
import { useSelector } from 'react-redux'
// functions
import isArray from '../../../functions/isArray'
// components
import StyleCard from '../../../components/StyleCard'
import StyleFilterBar from '../../../components/StyleFilterBar'
import StyleDialog from '../../../components/StyleDialog'
import ViewTotal from '../../../components/ViewTotal'
import OrderTab from '../../../components/OrderTab'
import NoResults from '../../../components/NoResults'

function Style() {
  const styleList = useSelector(state => state.update.styleList)

  return (
    <div className="solitaire-style">
      <div className="style-left-wrap">
        <OrderTab />
        {styleList && <ViewTotal count={styleList.rowCount} />}
        <StyleFilterBar />
      </div>
      <div className="style-right-wrap">
        <div className="style-cards-wrap">
          {styleList &&
            isArray(styleList.results) &&
            styleList.results.map((data, index) => <StyleCard data={data} key={index} />)}
        </div>

        {/* 沒有搜尋結果 */}
        {styleList && isArray(styleList.results) ? null : <NoResults />}
      </div>
      <StyleDialog />
    </div>
  )
}

export default Style
