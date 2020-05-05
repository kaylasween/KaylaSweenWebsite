import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Helmet>
      <title>404 | Kayla Sween</title>
    </Helmet>
    <h1>Oops!</h1>
    <p>It looks like the page you're searching for doesn't exist!</p>
  </Layout>
)

export default NotFoundPage
