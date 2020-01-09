import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Oops!</h1>
    <p>It looks like the page you're searching for doesn't exist!</p>
  </Layout>
)

export default NotFoundPage
