import React from 'react'
import Head from 'next/head'

function MetaHead({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no"
      />
    </Head>
  )
}

MetaHead.defaultProps = {
  title: "Ernie's next.js project",
  description: 'description'
}

export default MetaHead
