import React from "react"
import layoutStyles from "../layout.module.scss"

const Footer = () => {
  return (
    <footer className={layoutStyles.footer}>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer
