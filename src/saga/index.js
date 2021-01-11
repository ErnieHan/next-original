import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import {
  updateExample,
  updateRefinements,
  updateRecommends,
  updateStyleList
} from '../store/actions/update'
import { setLoading, setActivePage, setStyleParams } from '../store/actions/set'
import { actionTypes } from '../store/actions/actionTypes'
import { HOST_URL } from '../constants'
import { stringify } from 'qs'

function* getExampleSaga() {
  try {
    const response = yield fetch(`${HOST_URL}/example`, {
      method: 'GET',
      credentials: 'include'
    })
    if (response.ok) {
      const result = yield response.json()
      yield put(updateExample(result))
    } else {
      throw new Error('GET_EXAMPLE_FAILED')
    }
  } catch (error) {
    console.error(error)
  }
}

function* getRefinementsSaga() {
  try {
    yield put(setLoading(true))
    const response = yield fetch(`${HOST_URL}/refinements`, {
      method: 'GET',
      credentials: 'include'
    })
    if (response.ok) {
      const result = yield response.json()
      yield put(updateRefinements(result))
    } else {
      throw new Error('GET_REFINEMENTS_FAILED')
    }
  } catch (error) {
    console.error(error)
  } finally {
    yield put(setLoading(false))
  }
}

function* getRecommendsSaga(context) {
  const { params } = context
  try {
    const response = yield fetch(
      `${HOST_URL}/shopping/v1/personalization/solitaire/recommendations?type=${params}`,
      { method: 'GET' }
    )
    if (response.ok) {
      const result = yield response.json()
      yield put(updateRecommends(result))
    } else {
      throw new Error('GET_SOLITAIRE_RECOMMEND_FAILED')
    }
  } catch (error) {
    console.error(error)
  } finally {
    yield put(setActivePage('landing'))
  }
}

function* getStyleListSaga(context) {
  try {
    const { obj, activeMode } = context
    yield put(setStyleParams(obj))
    const array = Object.keys(obj)
    let params = {}
    let type
    // 將value值為null的欄位移除
    for (var i = 0; i < array.length; i++) {
      const key = [array[i]]
      const value = obj[array[i]]
      if (value !== 'default') {
        params = {
          ...params,
          [key]: value
        }
      }
    }
    // 判斷目前的模式 新增type欄位
    if (activeMode === 'ring') {
      type = 'ringSetting'
    } else if (activeMode === 'necklace') {
      type = 'necklaceSetting'
    } else if (activeMode === 'earring') {
      type = 'earringSetting'
    }
    params = {
      type,
      ...params
    }
    console.log('params', params, obj)
    // 取得款式資料
    const response = yield fetch(
      `${HOST_URL}/shopping/v1/personalization/solitaire/settings/search?${stringify(params)}`,
      { method: 'GET' }
    )
    if (response.ok) {
      const result = yield response.json()
      yield put(updateStyleList(result))
    }
  } catch (error) {
    console.error(error)
  } finally {
    yield put(setActivePage('style'))
  }
}

function* postExampleSaga(context) {
  const { data } = context
  try {
    yield put(setLoading(true))
    const response = yield fetch(`${HOST_URL}/example`, {
      method: 'POST',
      body: JSON.stringify({ name: data }),
      credentials: 'include'
    })
    if (response.ok) {
      const result = yield response.json()
      yield put(updateSolitaireRecommend(result))
    } else {
      throw new Error('POST_EXAMPLE_FAILED')
    }
  } catch (error) {
    console.error(error)
  } finally {
    yield put(setLoading(false))
  }
}

function* postRefinementsSaga(context) {
  const { data } = context
  console.log(data)
  const normalizeList = ['GT']
  const rangelizeList = ['RC']
  const site = decodeURIComponent(stringify(data))
  const { pathname } = window.location
  window.history.pushState(null, null, pathname + '?' + site)
  let refinements = []

  function normalize(type) {
    if (data[type].length > 0) {
      let value = []
      for (var i = 0; i < data[type].length; i++) {
        value.push(data[type][i].code)
      }
      refinements.push({ refinementType: type, value: value })
    }
  }

  function rangelize(type) {
    if (data[type].min !== '' || data[type].max !== '') {
      refinements.push({
        refinementType: type,
        minRange: data[type].min.code,
        maxRange: data[type].max.code
      })
    }
  }

  for (var i in normalizeList) {
    normalize(normalizeList[i])
  }

  for (var j in rangelizeList) {
    rangelize(rangelizeList[j])
  }

  const order = {
    catalogItemType: 'jewelry',
    textSearch: 'search',
    catalogItemNumber: '18KBR',
    refinements: refinements
  }

  try {
    const response = yield fetch(`${HOST_URL}/pcms3/v1/refinements/search`, {
      method: 'POST',
      body: JSON.stringify(order),
      credentials: 'include'
    })
  } catch (error) {
    console.error(error)
  }
}

function* postRefinementsSaga2(context) {
  const { data } = context
  console.log(data)
  // 更新網址
  const site = decodeURIComponent(stringify(data))
  const { pathname } = window.location
  window.history.pushState(null, null, pathname + '?' + site)
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.GET_EXAMPLE, getExampleSaga),
    takeLatest(actionTypes.GET_RECOMMENDS, getRecommendsSaga),
    takeLatest(actionTypes.GET_REFINEMENTS, getRefinementsSaga),
    takeLatest(actionTypes.GET_STYLE_LIST, getStyleListSaga),
    takeLatest(actionTypes.POST_EXAMPLE, postExampleSaga),
    takeLatest(actionTypes.POST_REFINEMENTS, postRefinementsSaga2)
  ])
}

export default rootSaga
