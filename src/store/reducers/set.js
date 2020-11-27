import { HYDRATE } from 'next-redux-wrapper'
import { actionTypes } from '../actions/actionTypes'

const initState = {
  isLoading: false,
  showFilterMenu: false,
  showFilterSort: false,
  searchText: ''
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

    case actionTypes.SET_FILTER_MENU:
      return {
        ...state,
        showFilterMenu: action.bool
      }

    case actionTypes.SET_FILTER_SORT:
      return {
        ...state,
        showFilterSort: action.bool
      }

    case actionTypes.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.text
      }

    default:
      return state
  }
}

export default set
