import FilterBar from '../src/components/FilterBar'
import Header from '../src/components/Header'
import MetaHead from '../src/components/MetaHead'
import SearchBar from '../src/components/SearchBar'

function Home(props) {
  return (
    <div>
      <MetaHead />
      <Header />
      <SearchBar />
      <FilterBar />
      <div>This is home page</div>
    </div>
  )
}

export async function getServerSideProps(context) {
  return { props: {} }
}

export default Home
