import { HYDRATE } from 'next-redux-wrapper'
import { actionTypes } from '../actions/actionTypes'

const initState = {
  isLoading: false,
  showFilterMenu: false,
  showFilterSort: false,
  searchText: '',
  activeMode: null,
  activePage: 'home',
  styleParams: {
    brandCode: null,
    goldTypeCode: null,
    subCollectionCode: null,
    componentId: null,
    style: null,
    prongSetting: null,
    ctWt: null,
    minPrice: null,
    maxPrice: null,
    earringType: null
  }
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

    case actionTypes.SET_ACTIVE_MODE:
      return {
        ...state,
        activeMode: action.mode
      }

    case actionTypes.SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.page
      }

    case actionTypes.SET_STYLE_PARAMS:
      return {
        ...state,
        styleParams: {
          ...state.styleParams,
          ...action.params
        }
      }

    default:
      return state
  }
}

export default set
