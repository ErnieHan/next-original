import React from 'react'
import { wrapper } from '../src/store'
import { getExample } from '../src/store/actions/home'
import { END } from 'redux-saga'
import { useSelector } from 'react-redux'

function Saga(props) {
  const result = useSelector(state => state.home.result)
  return (
    <div>
      <h1>This is page saga testing</h1>
      {result && result.map((data, index) => <div key={index}>{data.givenName}</div>)}
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const { store, req, res } = context
  if (!store.getState().home.result) {
    store.dispatch(getExample())
    store.dispatch(END)
  }
  await store.sagaTask.toPromise()
  return {
    props: {}
  }
})

export default Saga
