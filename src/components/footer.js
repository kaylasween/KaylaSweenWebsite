import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './footer.css';

const Footer = () => (
  <footer>
    <a href="https://github.com/kaylasween">
      <FontAwesomeIcon icon={['fab', 'github']} alt="Link to Kayla's Github" />
    </a>
    <a href="https://dev.to/kaylasween">
      <FontAwesomeIcon icon={['fab', 'dev']} alt="Link to Kayla's Dev Community page" />
    </a>
    <a href="https://twitter.com/_KaylaSween">
      <FontAwesomeIcon icon={['fab', 'twitter']} alt="Link to Kayla's Twitter page" />
    </a>
    <div className="float-right">
      © {new Date().getFullYear()} Kayla Sween, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
