import { actionTypes } from './actionTypes'

export const postExample = data => {
  return { type: actionTypes.POST_EXAMPLE, data }
}

export const postRefinements = data => {
  return { type: actionTypes.POST_REFINEMENTS, data }
}
