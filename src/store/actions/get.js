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

export const getStyleList = (obj, activeMode, activeDiamond) => {
  return { type: actionTypes.GET_STYLE_LIST, obj, activeMode, activeDiamond }
}

export const getDiamondList = (obj, activeMode, activeStyle) => {
  return { type: actionTypes.GET_DIAMOND_LIST, obj, activeMode, activeStyle }
}
