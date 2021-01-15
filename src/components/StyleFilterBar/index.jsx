import React from 'react'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { getStyleList } from '../../store/actions/get'
// modules
import Options from './modules/Options'
import Select from './modules/Select'

function StyleFilterBar() {
  const styleParams = useSelector(state => state.set.styleParams)
  const activeMode = useSelector(state => state.set.activeMode)
  const activeDiamond = useSelector(state => state.set.activeDiamond)
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
      ],
      disable: false
    },
    {
      title: '材質',
      code: 'goldTypeCode',
      mode: 'select',
      options: [
        { name: '顯示全部', value: 'default' },
        { name: '18K玫瑰金', value: '18KR' },
        { name: '18K白色黃金', value: '18KW' }
      ],
      disable: false
    },
    {
      title: '支援克拉',
      code: 'ctWt',
      mode: 'select',
      options: [
        { name: '顯示全部', value: 'default' },
        { name: '0.3 - 0.39', value: '030' },
        { name: '0.4 - 0.49', value: '040' },
        { name: '0.5 - 0.59', value: '050' },
        { name: '0.6 - 0.69', value: '060' },
        { name: '0.7 - 0.79', value: '070' }
      ],
      disable: activeDiamond ? true : false
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
        ],
        disable: false
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
