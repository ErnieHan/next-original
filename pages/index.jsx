import React, { useEffect } from 'react'
import Cookies from 'cookies'

import { useDispatch } from 'react-redux'
import { wrapper } from '../src/store'
import { END } from 'redux-saga'
import { getRefinements } from '../src/store/actions/get'
import { setFilter, setInitSelection, setSelection } from '../src/store/actions/set'
import { postRefinements } from '../src/store/actions/post'

import FilterBar from '../src/components/FilterBar'
import Header from '../src/components/Header'
import MetaHead from '../src/components/MetaHead'
import SearchBar from '../src/components/SearchBar'
import FilterMenuDesktop from '../src/components/FilterMenu/desktop'
import Right from '../src/containers/home/Right'
import { parse } from 'qs'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    const search = window.location.search.replace('?', '')
    if (search !== '') {
      const params = parse(search)
      if (params.refinements) {
        dispatch(setSelection(params.refinements))
      }
    }
    dispatch(getRefinements())
  }, [])

  return (
    <React.Fragment>
      <MetaHead title="PCMS 3.0  |  ChowSangSang Group" />
      <Header />
      <SearchBar mode="mobile" />
      <FilterBar />
      <main className="home-main">
        <section className="left">
          <FilterMenuDesktop />
        </section>
        <section className="right">
          <Right />
        </section>
      </main>
    </React.Fragment>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const { store, req, res } = context
  const cookies = new Cookies(req, res)
  cookies.set('cookie-testing', 'Y', { httpOnly: false })

  // store.dispatch(getRefinements())
  store.dispatch(END)
  await store.sagaTask.toPromise()
  return {
    props: {}
  }
})

export default Home
