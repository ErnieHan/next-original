import React, { Fragment, useEffect, useState } from 'react'
import Card from '../src/components/Card'
import Tag from '../src/components/Tag'
import Pagination from '../src/components/Pagination'
import MetaHead from '../src/components/MetaHead'
import Loading from '../src/components/Loading/FullPage'
import CardsLoading from '../src/components/Loading/Cards'
import Notification from '../src/components/Notification'

function Antd() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    // componentDidMount
    const search = window.location.search.replace('?', '')
    if (search) {
      getUrlParams()
    }
    init()
  }, [])

  function getUrlParams() {
    try {
      const search = window.location.search.replace('?', '')
      const params = JSON.parse(decodeURIComponent(search))
      console.log('params:', params)
    } catch (error) {
      console.error(error)
    }
  }

  async function init() {
    const response = await fetch('http://localhost:1011/products')
    if (response.ok) {
      const products = await response.json()
      setProducts(products)
    }
  }

  return (
    <Fragment>
      <MetaHead title="pcms3.0" />
      <div className="antd-basic-layout">
        <header>this is header</header>
        <aside>this is aside</aside>
        <main>
          <div className="results-content">
            <div className="bread-crumbs">
              <span className="link">首頁</span>
              <span className="separator">/</span>
              <span className="link">商品頁</span>
              <span className="separator">/</span>
              <span className="link">高級詳細頁</span>
            </div>
            <h3 className="title">商品篩選項目</h3>
            <div className="tags-content">
              <Tag title="存貨" name="有庫存" />
              <Tag title="貨幣區" name="台灣" />
              <Tag title="分行" name="新光三越站前店" />
              <Tag title="類別" name="手鍊" />
              <Tag title="關鍵字搜尋" name="十二生肖" />
            </div>
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
              {products && products.map((data, index) => <Card key={index} data={data} />)}
            </div>
            <CardsLoading />
            <article>this is article</article>
          </div>
        </main>
        {/* <Notification /> */}
      </div>
    </Fragment>
  )
}

export default Antd
