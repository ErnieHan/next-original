import React from 'react'
import { wrapper } from '../src/store'
import { getExample } from '../src/store/actions/home'
import { END } from 'redux-saga'
import { useSelector } from 'react-redux'

function Ernie(props) {
  const result = useSelector(state => state.home.result)
  return <div>this is page ernie</div>
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

export default Ernie
