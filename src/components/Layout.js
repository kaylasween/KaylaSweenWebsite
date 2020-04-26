/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Navigation/Header'
import Footer from './Footer'
import "../styles/layout/_layout.scss"
import "../styles/layout/_main.scss"
import "../styles/themes/_dark-mode.scss"
import "../styles/_a11y.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
        <a href="#main" className="visually-hidden">Skip to Main Content</a>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main id="main">{children}</main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
