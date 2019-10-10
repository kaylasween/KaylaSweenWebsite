import React from 'react'
import StyleSheet from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

import { getAutomaticTypeDirectiveNames } from 'typescript';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Kayla`, `Sween`, `Kayla Sween`, `Web Development`]} />
    <h1>Hi! I'm Kayla. I am a front-end developer, powerlifter, and dog mom.</h1>
    <p>I'm currently developing my new website. You can visit <a href="https://old.kaylasween.com/">my old website</a> if you want to see some of my older projects and writing. 
      For newer projects, visit <a href="https://github.com/kaylasween">my GitHub</a> to see what I'm working on now.
    </p>
  </Layout>
)

export default IndexPage

const styles = {
  display: 'flex',
  alignItems: 'center'
}
