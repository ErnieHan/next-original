import React from 'react'
// redux
import { useSelector } from 'react-redux'
// components
import MetaHead from '../src/components/MetaHead'
import Breadcrumbs from '../src/components/Breadcrumbs'
import Dialog from '../src/components/Dialog'
// containers
import Home from '../src/containers/solitaire/Home'
import Landing from '../src/containers/solitaire/Landing'
import Style from '../src/containers/solitaire/Style'
import Diamond from '../src/containers/solitaire/Diamond'
import Loading from '../src/containers/solitaire/Loading'

function Solitaire() {
  const activePage = useSelector(state => state.set.activePage)
  const isLoading = useSelector(state => state.set.isLoading)

  // 共6頁 home/landing/style/diamond/finish/tryon
  const pages = [
    { name: 'home', container: <Home /> },
    { name: 'landing', container: <Landing /> },
    { name: 'style', container: <Style /> },
    { name: 'diamond', container: <Diamond /> },
    { name: 'finish', container: '' },
    { name: 'tryon', container: '' }
  ]

  return (
    <React.Fragment>
      <MetaHead title="Solitaire 訂製" />
      <main className="solitaire-main">
        <div className="solitaire-main-wrap">
          <Breadcrumbs />
          {pages.map((page, index) => (
            <div
              key={index}
              className={`solitaire-page ${
                activePage === page.name ? 'solitaire-page--active' : ''
              }`}
            >
              {page.container}
            </div>
          ))}
        </div>
      </main>
      <Loading active={isLoading} />
    </React.Fragment>
  )
}

export default Solitaire
