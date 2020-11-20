import { HYDRATE } from 'next-redux-wrapper'
import { actionTypes } from '../actions/actionTypes'

const initState = {
  result: null
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

    default:
      return state
  }
}

export default update