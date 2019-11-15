import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.headerH1}>
        <Link className={styles.headerLink} to="/">
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ listStyle: "none", float: "right" }}>
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
          <Link to="/about">About me</Link>
        </li>
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
          <Link to="/page-2">Technologies and Skills</Link>
        </li>
        <li style={{ display: `inline-block`, marginRight: `1rem` }}>
          <Link to="/page-3"></Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
