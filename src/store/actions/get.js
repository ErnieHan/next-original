import { actionTypes } from './actionTypes'

export const getExample = () => {
  return { type: actionTypes.GET_EXAMPLE }
}

export const getRefinements = () => {
  return { type: actionTypes.GET_REFINEMENTS }
}

export const getRecommends = params => {
  return { type: actionTypes.GET_RECOMMENDS, params }
}

export const getStyleList = (obj, activeMode) => {
  return { type: actionTypes.GET_STYLE_LIST, obj, activeMode }
}
