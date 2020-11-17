import React, { useEffect } from 'react'

function Blog(props) {
  useEffect(() => {
    console.log(props.id)
  }, [])
  return <div>this is page blog : {props.id}</div>
}

export async function getServerSideProps(context) {
  const { query } = context
  return {
    props: {
      id: query.id
    }
  }
}

export default Blog
