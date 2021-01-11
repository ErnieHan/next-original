import React from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setStyleParams } from '../../store/actions/set'
import { getStyleList } from '../../store/actions/get'
// modules
import Options from './modules/Options'
import Select from './modules/Select'

function StyleFilterBar() {
  const styleParams = useSelector(state => state.set.styleParams)
  const activeMode = useSelector(state => state.set.activeMode)
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
        { name: '顯示全部', value: 'default' },
        { name: '18K玫瑰金', value: '18KR' },
        { name: '18K白色黃金', value: '18KW' }
      ]
    },
    {
      title: '副系列',
      code: 'subCollectionCode',
      mode: 'select',
      options: [
        { name: '顯示全部', value: 'default' },
        { name: '如一', value: '18KR' },
        { name: '同心', value: '8' },
        { name: '星宇', value: '1' },
        { name: '相融', value: 'W' },
        { name: '伯爵小皇冠', value: 'K' }
      ]
    }
  ]

  if (activeMode === 'earring') {
    options = [
      {
        title: '鑽石',
        code: 'earringType',
        mode: 'select',
        options: [
          { name: '顯示全部', value: 'default' },
          { name: '一對', value: 'P' },
          { name: '單顆', value: 'SE' }
        ]
      },
      ...options
    ]
  }

  function handleChange(value, code) {
    const obj = {
      ...styleParams,
      [code]: value
    }
    dispatch(getStyleList(obj, activeMode))
  }

  return (
    <div className="style-filter-bar">
      {options.map((data, index) => {
        if (data.mode === 'options') {
          return (
            <Options
              key={index}
              data={data}
              active={styleParams[data.code]}
              handleChange={handleChange.bind(this)}
            />
          )
        } else if (data.mode === 'select') {
          return (
            <Select
              key={index}
              data={data}
              active={styleParams[data.code]}
              handleChange={handleChange.bind(this)}
            />
          )
        }
      })}
    </div>
  )
}

export default StyleFilterBar
