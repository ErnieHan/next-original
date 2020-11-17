import { HYDRATE } from 'next-redux-wrapper'
import { actionTypes } from '../actions/actionTypes'

const initState = {
  isLoading: false
}

const loading = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return {
        ...state,
        ...action.payload.loading
      }
    }
    case actionTypes.START_LOADING:
      return {
        ...state,
        isLoading: action.bool
      }
    default:
      return state
  }
}

export default loading
