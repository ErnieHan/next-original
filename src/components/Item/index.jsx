import React, { useEffect, useState } from 'react'

function Item({ data }) {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    getInformation()
  }, [data])

  async function getInformation() {
    try {
      const { code } = data
      const response = await fetch(`http://localhost:1011/products/${code}`, { method: 'GET' })
      if (response.ok) {
        const result = await response.json()
        setInfo(result)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="card-item">
      {info && (
        <React.Fragment>
          <img src={data.image} />
          <p>code: {data.code}</p>
          <p>name: {info.name}</p>
          <p>price: {info.price}</p>
          <p>is-diy: {info.isDIY ? 'Y' : 'N'}</p>
        </React.Fragment>
      )}
    </div>
  )
}

export default Item
