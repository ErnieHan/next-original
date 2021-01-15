import React from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux'
// functions
import isArray from '../../../../functions/isArray'
// components
import DiamondStrip from '../../../../components/DiamondStrip'
import NoResults from '../../../../components/NoResults'

function DiamondsTable() {
  const diamondList = useSelector(state => state.update.diamondList)

  let titles = [
    { name: '品牌', code: 'diamondBrand', sorting: false },
    { name: '形狀', code: 'shape', sorting: false },
    { name: '顏色', code: 'color', sorting: true },
    { name: '淨度', code: 'clarity', sorting: false },
    { name: '車工', code: 'cut', sorting: false },
    { name: '對稱', code: 'symmetry', sorting: false },
    { name: '拋光', code: 'polish', sorting: false },
    { name: '克拉', code: 'ctWt', sorting: true },
    { name: '螢光', code: 'fluorescence', sorting: false },
    { name: '鑽石價格(NTD)', code: 'price', sorting: true },
    { name: '證書', code: 'certificates', sorting: false }
  ]

  return (
    <React.Fragment>
      <table className="diamonds-table">
        <thead className="thead-wrap">
          <tr>
            {titles.map((data, index) => (
              <th className={`th-title ${data.sorting ? 'sorting' : ''}`} key={index}>
                <div className="th-title-name">
                  {data.name}
                  {data.sorting && <span className="sorting-arrow" />}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody-wrap">
          {diamondList &&
            isArray(diamondList.results) &&
            diamondList.results.map((data, index) => (
              <DiamondStrip key={index} titles={titles} data={data} />
            ))}
        </tbody>
      </table>

      {/* 沒有搜尋結果 */}
      {diamondList && isArray(diamondList.results) ? null : <NoResults />}
    </React.Fragment>
  )
}

export default DiamondsTable
