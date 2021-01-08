import React from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setStyleParams } from '../../store/actions/set'
// modules
import Options from './modules/Options'
import Select from './modules/Select'

function StyleFilterBar() {
  const styleParams = useSelector(state => state.set.styleParams)
  const dispatch = useDispatch()
  // 目前有兩種模組: options/select
  let options = [
    {
      title: '品牌',
      code: 'brandCode',
      mode: 'options',
      options: [
        { name: 'ILD', value: 'ILD' },
        { name: 'Promessa', value: 'PR' }
      ]
    },
    {
      title: '材質',
      code: 'goldTypeCode',
      mode: 'select',
      options: [
        { name: '顯示全部', value: null },
        { name: '18K玫瑰金', value: '18KR' },
        { name: '18K白色黃金', value: '18KW' }
      ]
    },
    {
      title: '副系列',
      code: 'subCollectionCode',
      mode: 'select',
      options: [
        { name: '顯示全部', value: null },
        { name: '如一', value: '18KR' },
        { name: '同心', value: '8' },
        { name: '星宇', value: '1' },
        { name: '相融', value: 'W' },
        { name: '伯爵小皇冠', value: 'K' }
      ]
    }
  ]

  function handleChange(value, code) {
    const obj = {
      ...styleParams,
      [code]: value
    }
    dispatch(setStyleParams(obj))
    console.log('handleChange', value, code)
  }

  return (
    <div className="style-filter-bar">
      {options.map((data, index) => {
        if (data.mode === 'options') {
          return <Options key={index} data={data} handleChange={handleChange.bind(this)} />
        } else if (data.mode === 'select') {
          return (
            <Select
              key={index}
              data={data}
              handleChange={handleChange.bind(this)}
              active={styleParams[data.code]}
            />
          )
        }
      })}
    </div>
  )
}

export default StyleFilterBar
