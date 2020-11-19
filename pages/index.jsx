import React from 'react'
import FilterBar from '../src/components/FilterBar'
import Header from '../src/components/Header'
import MetaHead from '../src/components/MetaHead'
import SearchBar from '../src/components/SearchBar'
import Cookies from 'cookies'

function Home() {
  return (
    <React.Fragment>
      <MetaHead />
      <Header />
      <SearchBar />
      <FilterBar />
      <main>This is home page</main>
    </React.Fragment>
  )
}

export async function getServerSideProps(context) {
  const { req, res } = context
  const cookies = new Cookies(req, res)
  cookies.set('cookies-testing', 'testing')
  return { props: {} }
}

export default Home
