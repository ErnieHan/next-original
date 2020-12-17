import { HYDRATE } from 'next-redux-wrapper'
import { actionTypes } from '../actions/actionTypes'

const initState = {
  catalogItemType: 'jewelry',
  textSearch: '',
  catalogItemNumber: '',
  refinements: []
}

const selection = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return {
        ...state,
        ...action.payload.selection
      }
    }

    case actionTypes.SET_SELECTION:
      return {
        ...state,
        refinements: action.data
      }

    case actionTypes.SET_INIT_SELECTIONS:
      return {
        ...state,
        ...action.data
      }

    default:
      return state
  }
}

export default selection
