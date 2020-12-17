import { HYDRATE } from 'next-redux-wrapper'
import { actionTypes } from '../actions/actionTypes'

const initState = {
  RC: { min: '', max: '' },
  GT: []
}

const filter = (state = initState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return {
        ...state,
        ...action.payload.filter
      }
    }

    case actionTypes.SET_FILTER:
      return {
        ...state,
        ...action.data
      }

    default:
      return state
  }
}

export default filter
