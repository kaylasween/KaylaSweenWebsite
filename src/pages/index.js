import React from 'react'
import StyleSheet from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Kayla from '../images/KaylaTheGrey.jpg'
import { getAutomaticTypeDirectiveNames } from 'typescript';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Kayla`, `Sween`, `Kayla Sween`, `Web Development`]} />
    <img src={Kayla} alt="Kayla smiling looking at camera with makeup on, which is rare." />
    <h1>Hi! I'm Kayla. I am a front-end developer, powerlifter, and dog mom.</h1>
  </Layout>
)

export default IndexPage

const styles = {
  display: 'flex',
  alignItems: 'center'
}
