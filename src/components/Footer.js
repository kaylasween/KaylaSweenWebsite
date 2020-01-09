import React from 'react'

import Dev from '../images/dev-brands.svg'
import GitHub from '../images/github-brands.svg'
import Twitter from '../images/twitter-brands.svg'

import "../styles/layout/_footer.scss"

const Footer = () => (
  <footer>
    <span>
      <a href="https://github.com/kaylasween">
        <img src={GitHub} alt="Link to Kayla's Github" className="footer-logo" />
      </a>
      <a href="https://dev.to/kaylasween">
        <img src={Dev} alt="Link to Kayla's Dev Community page" className="footer-logo" />
      </a>
      <a href="https://twitter.com/_KaylaSween">
        <img src={Twitter} alt="Link to Kayla's Twitter page" className="footer-logo" />
      </a>
    </span>
    <span>
      © {new Date().getFullYear()} Kayla Sween
    </span>
  </footer>
)

export default Footer
