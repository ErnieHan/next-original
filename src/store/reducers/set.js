import { HYDRATE } from 'next-redux-wrapper'
import { actionTypes } from '../actions/actionTypes'

const initState = {
  isLoading: false
}

const set = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return {
        ...state,
        ...action.payload.set
      }
    }

    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.bool
      }

    default:
      return state
  }
}

export default set
