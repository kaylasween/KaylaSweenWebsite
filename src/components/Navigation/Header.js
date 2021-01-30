import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'gatsby'

import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NavItem from './NavItem/NavItem'

import logo from '../../images/Sween-logo-color.png'
import "../../styles/layout/_header.scss"


//TODO: add active class to current nav page.
const Header = ({ siteTitle }) => (
  <nav>
    <Link to="/">
      {/* <img className="ks-logo" src={logo} alt="Kayla's logo: a mint owl with a backwards K and S that make up the face. Clicking on this redirects to the home page." /> */}
      <FontAwesomeIcon icon={faLaptopCode} />
    </Link>
    <ul>
      <NavItem to="/about/">About</NavItem>
      <NavItem to="/powerlifting/">Powerlifting</NavItem>
      <NavItem to="/talks/">Talks</NavItem>
      <NavItem to="/contact/">Contact</NavItem>
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
