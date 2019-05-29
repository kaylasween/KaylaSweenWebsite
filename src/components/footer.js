import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
  <footer>
    © {new Date().getFullYear()} Kayla Sween, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    <a href="https://github.com/kaylasween">
      <FontAwesomeIcon icon={['fab', 'github']} />
    </a>
  </footer>
)

export default Footer
