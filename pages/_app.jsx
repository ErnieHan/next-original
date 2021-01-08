import { wrapper } from '../src/store'
import 'prismjs'
import 'prismjs/components/prism-jsx.min'
// page styles
import '../src/styles/globals.css'
import '../src/styles/homepage.css'
import '../src/styles/antd.scss'
import '../src/styles/prism.scss'
import '../src/styles/solitaire.scss'
// container styles
import '../src/containers/home/Right/style.scss'
import '../src/containers/solitaire/Home/style.scss'
import '../src/containers/solitaire/Landing/style.scss'
import '../src/containers/solitaire/Style/style.scss'
// component styles
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
import '../src/components/Loading/FullPage/style.scss'
import '../src/components/Item/style.scss'
import '../src/components/Notification/style.scss'
import '../src/components/Loading/Cards/style.scss'
import '../src/components/Breadcrumbs/style.scss'
import '../src/components/SolitaireModeButton/style.scss'
import '../src/components/StyleFilterBar/style.scss'
import '../src/components/StyleFilterBar/modules/Options/style.scss'
import '../src/components/StyleFilterBar/modules/Select/style.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
