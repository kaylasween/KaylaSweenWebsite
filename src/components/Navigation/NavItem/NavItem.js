import React from 'react'
import { Link } from 'gatsby'

import styles from '../../../styles/components/_nav-item.module.scss'

const navItem = (props) => (
  <li className={styles.navLi}>
    <Link to={props.to} activeClassName={styles.active}>{props.children}</Link>
  </li>
)

export default navItem