import { Link } from 'gatsby'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/Sween-logo-white.png'

import './header.css'


//TODO: add active class to current nav page.
const Header = ({ siteTitle }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
  <Navbar.Brand href="/"><img src={logo} alt="Kayla Sween logo" class="navbar-logo" /> Kayla Sween</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link href="/blog/">Blog</Nav.Link>
      <Nav.Link href="/powerlifting/">Powerlifting</Nav.Link>
      <Nav.Link href="/projects/">Projects</Nav.Link>
      <Nav.Link href="/talks/">Talks</Nav.Link>
    </Nav>
    <Nav className="ml-auto">
      <Nav.Link href="/about/">About</Nav.Link>
      <Nav.Link href="/contact/">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
