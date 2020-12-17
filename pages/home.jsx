import React from 'react'
import Index from './index'
import Cookies from 'cookies'

import { wrapper } from '../src/store'
import { END } from 'redux-saga'
import { getRefinements } from '../src/store/actions/get'

function Home() {
  return <Index />
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const { store, req, res } = context
  const cookies = new Cookies(req, res)
  cookies.set('cookies-testing', 'testing')

  store.dispatch(getRefinements())
  store.dispatch(END)
  await store.sagaTask.toPromise()
  return {
    props: {}
  }
})

export default Home
