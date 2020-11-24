import { wrapper } from '../src/store'
// styles
import '../src/styles/globals.css'
import '../src/components/Header/style.scss'
import '../src/components/FilterBar/style.scss'
import '../src/components/FilterMenu/style.scss'
import '../src/components/FilterSort/style.scss'
import '../src/components/SearchBar/style.scss'
import '../src/components/Speedline/style.scss'
import '../src/components/Pagination/style.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
