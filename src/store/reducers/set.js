import { HYDRATE } from 'next-redux-wrapper'
import { actionTypes } from '../actions/actionTypes'

export const initState = {
  isLoading: false,
  showFilterMenu: false,
  showFilterSort: false,
  searchText: '',
  activeMode: null,
  activePage: 'home',
  activeStyle: null,
  activeDiamond: null,
  showStyleDialog: false,
  showDiamondDialog: false,
  styleInfo: null,
  diamondInfo: null,
  styleParams: {
    brandCode: 'default',
    goldTypeCode: 'default',
    subCollectionCode: 'default',
    componentId: 'default',
    style: 'default',
    prongSetting: 'default',
    ctWt: 'default',
    minPrice: 'default',
    maxPrice: 'default',
    earringType: 'default'
  },
  diamondParams: {
    isPair: 'default'
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

    case actionTypes.SET_SHOW_STYLE_DIALOG:
      return {
        ...state,
        showStyleDialog: action.bool
      }

    case actionTypes.SET_SHOW_DIAMOND_DIALOG:
      return {
        ...state,
        showDiamondDialog: action.bool
      }

    case actionTypes.SET_STYLE_INFO:
      return {
        ...state,
        styleInfo: action.data
      }

    case actionTypes.SET_DIAMOND_INFO:
      return {
        ...state,
        diamondInfo: action.data
      }

    case actionTypes.SET_ACTIVE_STYLE:
      return {
        ...state,
        activeStyle: action.data
      }

    case actionTypes.SET_ACTIVE_DIAMOND:
      return {
        ...state,
        activeDiamond: action.data
      }

    default:
      return state
  }
}

export default set
