import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import styles from "./header.module.scss"
import { FaPaintBrush } from "react-icons/fa"
import StyleContext from "./context/StyleContext"

const Header = ({ siteTitle, onChangeTheme }) => {
  const theme = useContext(StyleContext)
  console.log(theme)
  return (
    <header className={theme ? styles.headerBeauty : styles.header}>
      <div className={styles.container}>
        <h1 className={styles.headerH1}>
          <Link className={styles.headerLink} to="/">
            {siteTitle}
          </Link>
        </h1>
        <ul className={styles.headerList}>
          <li style={{ display: `inline-block`, marginRight: `1rem` }}>
            <Link to="/projects">Projects</Link>
          </li>
          <li style={{ display: `inline-block`, marginRight: `1rem` }}>
            <Link to="/skills">Skills</Link>
          </li>
          <li style={{ display: `inline-block`, marginRight: `1rem` }}>
            <Link to="/experience">Experience</Link>
          </li>
          <li
            style={{
              display: `inline-block`,
              marginRight: `1rem`,
              color: "#eee",
              cursor: "pointer",
            }}
          >
            <FaPaintBrush onClick={onChangeTheme} />
          </li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
