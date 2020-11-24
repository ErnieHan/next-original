import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { updateExample } from '../store/actions/update'
import { setLoading } from '../store/actions/set'
import { actionTypes } from '../store/actions/actionTypes'
import { HOST_URL } from '../constants'

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
      yield put(updateExample(result))
    } else {
      throw new Error('POST_EXAMPLE_FAILED')
    }
  } catch (error) {
    console.error(error)
  } finally {
    yield put(setLoading(false))
  }
}

function* rootSaga() {
  yield all([
    takeLatest(actionTypes.GET_EXAMPLE, getExampleSaga),
    takeLatest(actionTypes.POST_EXAMPLE, postExampleSaga)
  ])
}

export default rootSaga
