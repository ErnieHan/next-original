import { HYDRATE } from 'next-redux-wrapper'
import { actionTypes } from '../actions/actionTypes'

const initState = {
  result: null,
  menu: null,
  recommends: null,
  styleList: null,
  diamondList: null
}

const update = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return {
        ...state,
        ...action.payload.update
      }
    }

    case actionTypes.UPDATE_EXAMPLE:
      return {
        ...state,
        result: action.data
      }

    case actionTypes.UPDATE_REFINEMENTS:
      return {
        ...state,
        menu: action.data
      }

    case actionTypes.UPDATE_RECOMMENDS:
      return {
        ...state,
        recommends: action.data
      }

    case actionTypes.UPDATE_STYLE_LIST:
      return {
        ...state,
        styleList: action.data
      }

    case actionTypes.UPDATE_DIAMOND_LIST:
      return {
        ...state,
        diamondList: action.data
      }

    default:
      return state
  }
}

export default update
