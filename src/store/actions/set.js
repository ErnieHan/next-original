import { actionTypes } from './actionTypes'

export const setLoading = bool => {
  return { type: actionTypes.SET_LOADING, bool }
}

export const setFilterMenu = bool => {
  return { type: actionTypes.SET_FILTER_MENU, bool }
}

export const setFilterSort = bool => {
  return { type: actionTypes.SET_FILTER_SORT, bool }
}

export const setSearchText = text => {
  return { type: actionTypes.SET_SEARCH_TEXT, text }
}
