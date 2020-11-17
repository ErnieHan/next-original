import { actionTypes } from './actionTypes'

export const startLoading = bool => {
  return { type: actionTypes.START_LOADING, bool }
}
