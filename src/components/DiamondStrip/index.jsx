import React from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setShowDiamondDialog, setDiamondInfo } from '../../store/actions/set'
// functions
import isArray from '../../functions/isArray'

function DiamondStrip({ data, titles }) {
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(setShowDiamondDialog(true))
    dispatch(setDiamondInfo(data))
  }

  function handleCertificates(event) {
    event.stopPropagation()
    console.log('go to cert page')
  }

  return (
    <tr className="diamond-strip" onClick={handleClick}>
      {titles.map((title, jndex) => {
        const key = title.code
        const value = data[key]
        if (key === 'diamondBrand') {
          return (
            <td className="td-value" key={jndex}>
              <div className="td-value-name">
                {value === 'ILD' ? (
                  <img className="diamond-brand-img" src="/images/logo-ild-purple.svg" alt="" />
                ) : (
                  '周生生美鑽'
                )}
              </div>
            </td>
          )
        } else if (key === 'certificates') {
          return (
            <td className="td-value" key={jndex} onClick={handleCertificates}>
              <div className="td-value-name">
                {isArray(value) ? <a className="cert-link">{value[0].certOrigin}</a> : '-'}
              </div>
            </td>
          )
        } else if (key === 'price') {
          return (
            <td className="td-value" key={jndex}>
              <div className="td-value-name">{Number(value).toLocaleString()}</div>
            </td>
          )
        } else if (key === 'shape') {
          return (
            <td className="td-value" key={jndex}>
              <div className="td-value-name">
                <img className="diamond-shape-img" src="/images/diamond-shape.png" alt="" />
              </div>
            </td>
          )
        } else {
          return (
            <td className="td-value" key={jndex}>
              <div className="td-value-name">{value ? value : '-'}</div>
            </td>
          )
        }
      })}
    </tr>
  )
}

export default DiamondStrip
