import { actionTypes } from './actionTypes'

export const setLoading = bool => {
  return { type: actionTypes.SET_LOADING, bool }
}
