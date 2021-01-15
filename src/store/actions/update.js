import { actionTypes } from './actionTypes'

export const updateExample = data => {
  return { type: actionTypes.UPDATE_EXAMPLE, data }
}

export const updateRefinements = data => {
  return { type: actionTypes.UPDATE_REFINEMENTS, data }
}

export const updateRecommends = data => {
  return { type: actionTypes.UPDATE_RECOMMENDS, data }
}

export const updateStyleList = data => {
  return { type: actionTypes.UPDATE_STYLE_LIST, data }
}

export const updateDiamondList = data => {
  return { type: actionTypes.UPDATE_DIAMOND_LIST, data }
}
