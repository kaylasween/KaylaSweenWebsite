import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import logo from '../images/Sween-logo-color.png'

import './header.css'


//TODO: add active class to current nav page.
const Header = ({ siteTitle }) => (
  <nav>
    <Link to="/">
      <img src={logo} alt="Kayla smiling looking at camera with makeup on, which is rare." />
    </Link>
    <ul>
      <li><Link to="/blog/">Blog</Link></li>
      <li><Link to="/powerlifting/">Powerlifting</Link></li>
      <li><Link to="/projects/">Projects</Link></li>
      <li><Link to="/talks/">Talks</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </ul>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
