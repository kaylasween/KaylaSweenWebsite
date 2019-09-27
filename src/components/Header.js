import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import logo from '../images/Sween-logo-white.png'

import './header.css'


//TODO: add active class to current nav page.
const Header = ({ siteTitle }) => (
  <ul>
    <li><Link href="/blog/">Blog</Link></li>
    <li><Link href="/powerlifting/">Powerlifting</Link></li>
    <li><Link href="/projects/">Projects</Link></li>
    <li><Link href="/talks/">Talks</Link></li>
    <li><Link href="/about/">About</Link></li>
    <li><Link href="/contact/">Contact</Link></li>
  </ul>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
