import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import { updateExample } from '../store/actions/home'
import { actionTypes } from '../store/actions/actionTypes'
import { HOST_URL } from '../constants'

function* getExampleSaga() {
  try {
    const response = yield fetch(`${HOST_URL}/example`)
    const data = yield response.json()
    yield put(updateExample(data))
  } catch (error) {
    console.error(error)
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.GET_EXAMPLE, getExampleSaga)])
}

export default rootSaga
