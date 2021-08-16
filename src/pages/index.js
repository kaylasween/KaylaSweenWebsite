import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import '../styles/pages/_home.scss'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Home | Kayla Sween</title>
    </Helmet>
    <SEO title="Home" keywords={[`Kayla`, `Sween`, `Kayla Sween`, `Web Development`, `front end developer`, `UX`, `UX Engineer`]} />
    <div className="home">
      <h1>Hi! I'm Kayla. I am a front-end engineer, powerlifter, and dog mom.</h1>
      <p>
        This site is currently a work-in-progress, but feel free to poke around!
        To see what I'm working on, visit <a href="https://github.com/kaylasween">my GitHub</a> to see what I'm working on now.
      </p>
    </div>
  </Layout>
)

export default IndexPage
