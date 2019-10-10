import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import logo from '../images/Sween-logo-color.png'

import './header.css'


//TODO: add active class to current nav page.
const Header = ({ siteTitle }) => (
  <nav>
    <Link to="/">
      <img src={logo} alt="Kayla's logo: a mint owl with a backwards K and S that make up the face. Clicking on this redirects to the home page." />
    </Link>
    {/* <ul> */}
      {/* <li><Link to="/about/">About</Link></li> */}
      {/* <li><Link to="/blog/">Blog</Link></li> */}
      {/* <li><Link to="/powerlifting/">Powerlifting</Link></li> */}
      {/* <li><Link to="/projects/">Projects</Link></li> */}
      {/* <li><Link to="/talks/">Talks</Link></li> */}
      {/* <li><Link to="/contact/">Contact</Link></li> */}
    {/* </ul> */}
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
