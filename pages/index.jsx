import React from 'react'
import FilterBar from '../src/components/FilterBar'
import Header from '../src/components/Header'
import MetaHead from '../src/components/MetaHead'
import SearchBar from '../src/components/SearchBar'
import FilterMenuDesktop from '../src/components/FilterMenu/desktop/index'
import Cookies from 'cookies'

function Home() {
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
        <section className="right">this is right</section>
      </main>
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
