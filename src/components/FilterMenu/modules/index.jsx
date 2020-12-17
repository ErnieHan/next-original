import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSelection } from '../../../store/actions/set'

import CheckboxPlus from '../modules/CheckboxPlus'
import ButtonRange from '../modules/ButtonRange'

function Modules({ data }) {
  const selection = useSelector(state => state.selection)
  const active = selection.refinements.find(item => item.refinementType === data.refinementType)
  const checked = active ? active.value : []
  const dispatch = useDispatch()

  function handleCheckboxPlus(checked, item, data) {
    const key = data.refinementType
    const refs = selection.refinements
    const index = refs.findIndex(item => item.refinementType === key)
    let value = []
    let array = [...refs]
    if (index !== -1) {
      // 已經有
      const active = array[index]
      value = [...active.value]
      if (checked) {
        value.push(item.code)
      } else {
        const jndex = value.findIndex(data => data === item.code)
        value.splice(jndex, 1)
      }
      const obj = {
        refinementType: key,
        value: value
      }
      array.splice(index, 1, obj)
    } else {
      // 尚未有
      value.push(item.code)
      const obj = {
        refinementType: key,
        value: value
      }
      array.push(obj)
    }
    dispatch(setSelection(array))
  }

  function handleButtonRange(item, data) {
    const key = data.refinementType
    const obj = selection[key]
    obj.min = item
    dispatch(setSelection(key, obj))
  }

  return (
    <React.Fragment>
      <CheckboxPlus
        options={data.options}
        checked={checked}
        onChange={(checked, item) => {
          handleCheckboxPlus(checked, item, data)
        }}
      />
      {/* {data.displayType === 'checkbox-plus' && (
        <CheckboxPlus
          options={data.options}
          checked={checked}
          onChange={(checked, item) => {
            handleCheckboxPlus(checked, item, data)
          }}
        />
      )} */}
      {data.displayType === 'button-range' && (
        <ButtonRange
          options={data.options}
          //   min={selection[data.refinementType].min}
          //   max={selection[data.refinementType].max}
          onChange={item => {
            handleButtonRange(item, data)
          }}
        />
      )}
    </React.Fragment>
  )
}

export default Modules
