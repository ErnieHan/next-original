import React from 'react'
// redux
import { useSelector } from 'react-redux'
// components
import Breadcrumbs from '../src/components/Breadcrumbs'
// containers
import Home from '../src/containers/solitaire/Home'
import Landing from '../src/containers/solitaire/Landing'
import Style from '../src/containers/solitaire/Style'

function Solitaire() {
  const activePage = useSelector(state => state.set.activePage)

  // 共9頁 home/landing/style/diamond/finish/tryon
  const pages = [
    { name: 'home', container: <Home /> },
    { name: 'landing', container: <Landing /> },
    { name: 'style', container: <Style /> },
    { name: 'diamond', container: '' },
    { name: 'finish', container: '' },
    { name: 'tryon', container: '' }
  ]

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default Solitaire
