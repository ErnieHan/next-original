import { wrapper } from '../src/store'
// styles
import '../src/styles/globals.css'
import '../src/styles/homepage.css'
import '../src/styles/antd.scss'
import '../src/components/Header/style.scss'
import '../src/components/FilterBar/style.scss'
import '../src/components/FilterMenu/mobile/style.scss'
import '../src/components/FilterMenu/desktop/style.scss'
import '../src/components/FilterMenu/modules/CheckboxPlus/style.scss'
import '../src/components/FilterMenu/modules/ButtonRange/style.scss'
import '../src/components/FilterSort/style.scss'
import '../src/components/SearchBar/style.scss'
import '../src/components/Speedline/style.scss'
import '../src/components/Pagination/style.scss'
import '../src/components/Tag/style.scss'
import '../src/components/Card/style.scss'
import '../src/containers/home/Right/style.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
