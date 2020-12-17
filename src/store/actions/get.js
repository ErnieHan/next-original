import { actionTypes } from './actionTypes'

export const getExample = () => {
  return { type: actionTypes.GET_EXAMPLE }
}

export const getRefinements = () => {
  return { type: actionTypes.GET_REFINEMENTS }
}
