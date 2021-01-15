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

export const setSelection = data => {
  return { type: actionTypes.SET_SELECTION, data }
}

export const setInitSelection = data => {
  return { type: actionTypes.SET_INIT_SELECTIONS, data }
}

export const setFilter = data => {
  return { type: actionTypes.SET_FILTER, data }
}

export const setActiveMode = mode => {
  return { type: actionTypes.SET_ACTIVE_MODE, mode }
}

export const setActivePage = page => {
  return { type: actionTypes.SET_ACTIVE_PAGE, page }
}

export const setStyleParams = params => {
  return { type: actionTypes.SET_STYLE_PARAMS, params }
}

export const setShowStyleDialog = bool => {
  return { type: actionTypes.SET_SHOW_STYLE_DIALOG, bool }
}

export const setShowDiamondDialog = bool => {
  return { type: actionTypes.SET_SHOW_DIAMOND_DIALOG, bool }
}

export const setStyleInfo = data => {
  return { type: actionTypes.SET_STYLE_INFO, data }
}

export const setDiamondInfo = data => {
  return { type: actionTypes.SET_DIAMOND_INFO, data }
}

export const setActiveStyle = data => {
  return { type: actionTypes.SET_ACTIVE_STYLE, data }
}

export const setActiveDiamond = data => {
  return { type: actionTypes.SET_ACTIVE_DIAMOND, data }
}
