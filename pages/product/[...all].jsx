import React, { useEffect } from 'react'

function Product(props) {
  useEffect(() => {
    console.log(props.query.all)
  }, [])
  return <div>This is page Product</div>
}

export async function getServerSideProps(context) {
  const { query } = context
  return {
    props: {
      query
    }
  }
}

export default Product
