import { actionTypes } from './actionTypes'

export const updateExample = data => {
  return { type: actionTypes.UPDATE_EXAMPLE, data }
}
