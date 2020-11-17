import React from 'react'
import Head from 'next/head'

function Meta({ title }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: "Ernie's next.js project"
}

export default Meta
