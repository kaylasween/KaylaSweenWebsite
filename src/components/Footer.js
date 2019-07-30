import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Dev from '../images/dev-brands.svg'
import GitHub from '../images/github-brands.svg'
import Twitter from '../images/twitter-brands.svg'

import './footer.css';

const Footer = () => (
  <footer>
    <a href="https://github.com/kaylasween">
      <img src={GitHub} alt="Link to Kayla's Github" className="footer-logo" />
    </a>
    <a href="https://dev.to/kaylasween">
      <img src={Dev} alt="Link to Kayla's Dev Community page" className="footer-logo" />
    </a>
    <a href="https://twitter.com/_KaylaSween">
      <img src={Twitter} alt="Link to Kayla's Twitter page" className="footer-logo" />
    </a>
    <div className="float-right">
      © {new Date().getFullYear()} Kayla Sween, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer
