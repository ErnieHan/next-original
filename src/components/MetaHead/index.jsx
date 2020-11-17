import React from 'react'
import Head from 'next/head'

function MetaHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no"
      />
    </Head>
  )
}

MetaHead.defaultProps = {
  title: "Ernie's next.js project"
}

export default MetaHead
