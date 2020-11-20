import React from 'react'
import { wrapper } from '../src/store'
import { END } from 'redux-saga'
import { useSelector, useDispatch } from 'react-redux'
import { getExample } from '../src/store/actions/get'
import { postExample } from '../src/store/actions/post'

import Loading from '../src/components/Loading'
import MetaHead from '../src/components/MetaHead'

function Saga(props) {
  const result = useSelector(state => state.update.result)
  const dispatch = useDispatch()

  function handleAdd() {
    dispatch(postExample('testing'))
  }

  return (
    <div>
      <MetaHead title="saga page" />
      <Loading />
      <h3>This is page saga testing</h3>
      {result && result.map((data, index) => <div key={index}>{data.givenName}</div>)}
      <button onClick={handleAdd}>POST API</button>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const { store, req, res } = context
  if (!store.getState().update.result) {
    store.dispatch(getExample())
    store.dispatch(END)
  }
  await store.sagaTask.toPromise()
  return {
    props: {}
  }
})

export default Saga
