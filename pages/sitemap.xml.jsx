import React from 'react'

const EXTERNAL_DATA_URL = 'https://erniexx.com'

const createSitemap = posts => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${`${EXTERNAL_DATA_URL}`}</loc>
        </url>
        ${posts
          .map(({ web }) => {
            return `
                    <url>
                        <loc>${`${EXTERNAL_DATA_URL}/${web}`}</loc>
                    </url>
                `
          })
          .join('')}
    </urlset>
    `

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const posts = [
      {
        userId: 1,
        id: 1,
        web: 'home'
      }
    ]

    res.setHeader('Content-Type', 'text/xml')
    res.write(createSitemap(posts))
    res.end()
  }
}

export default Sitemap
