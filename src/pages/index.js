import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Kayla`, `Sween`, `Kayla Sween`, `Web Development`]} />
    <p>I think I&rsquo;ll put a lil hero here.</p>
  </Layout>
)

export default IndexPage
