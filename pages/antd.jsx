import React, { Fragment, useEffect, useState } from 'react'
import Card from '../src/components/Card'
import Tag from '../src/components/Tag'
import Pagination from '../src/components/Pagination'

function Antd() {
  const [mode, setMode] = useState(false)
  useEffect(() => {}, [])

  return (
    <Fragment>
      <div className="antd-basic-layout">
        <header>this is header</header>
        <aside>
          this is aside
          <button
            onClick={() => {
              setMode(true)
            }}
          >
            click
          </button>
        </aside>
        <main>
          <div className="results-content">
            <div className="bread-crumbs">
              <span className="link">首頁</span>
              <span className="separator">/</span>
              <span className="link">商品頁</span>
              <span className="separator">/</span>
              <span className="link">高級詳細頁</span>
            </div>
            <h3 className="title">篩選項目</h3>
            <Tag title="存貨" name="有庫存" />
            <Tag title="貨幣區" name="台灣" />
            <Tag title="分行" name="新光三越站前店" />
            <Tag title="類別" name="手鍊" />
            <Tag title="關鍵字搜尋" name="十二生肖" />
          </div>
          <div className="main-wrapper">
            <div className="top-banner">
              <div className="total">
                <span>共 1280 樣產品</span>
                <span className="separator">|</span>
                <span>庫存 919 件產品</span>
              </div>
              <Pagination />
            </div>
            <div className="cards-content">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <article>this is article</article>
          </div>
        </main>
      </div>
    </Fragment>
  )
}

export default Antd
