import React, { useEffect, useState, useMemo } from 'react'
import Item from '../src/components/Item'

function Ernie() {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    getProducts()
  }, [])

  function getProducts() {
    try {
      getProductName()
      getProductLength()
    } catch (error) {
      console.error(error)
    }
  }

  async function getProductName() {
    try {
      const response = await fetch('http://localhost:1011/products', { method: 'GET' })
      if (response.ok) {
        const result = await response.json()
        setProducts(result)
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function getProductLength() {
    try {
      const response = await fetch('http://localhost:1011/products-length', { method: 'GET' })
      if (response.ok) {
        const result = await response.json()
        console.log(result)
      }
    } catch (error) {
      console.error(error)
    }
  }

  async function handleClick() {
    try {
      const response = await fetch('http://localhost:1011/products2', { method: 'GET' })
      if (response.ok) {
        const result = await response.json()
        setProducts(result)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <React.Fragment>
      <div className="items-content">
        {products && products.map((data, index) => <Item key={index} data={data} />)}
      </div>
      <div className="ernie">
        <button onClick={handleClick}>click to fetch again</button>
      </div>
    </React.Fragment>
  )
}

export default Ernie
