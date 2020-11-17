import { actionTypes } from './actionTypes'

export const getExample = () => {
  return { type: actionTypes.GET_EXAMPLE }
}

export const updateExample = data => {
  return { type: actionTypes.UPDATE_EXAMPLE, data }
}
