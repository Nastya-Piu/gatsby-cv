/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import layoutStyles from "./layout.module.scss"
import Footer from "./shared/footer"
import { Transition } from "react-transition-group"
import StyleContext from "./context/StyleContext"

const duration = 500

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
  transform: `translateY(20px)`,
}

const transitionStyles = {
  entering: { opacity: 1, transform: "translateY(0px)" },
  entered: { opacity: 1, transform: "translateY(0px)" },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

const Layout = ({ children }) => {
  const [animate, setAnimate] = useState(false)
  const [themed, setTheme] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    if (!animate) setAnimate(true)
  }, [animate])

  const changeTheme = () => {
    console.log("Change theme" + themed)
    if (!themed) {
      setTheme(true)
    } else setTheme(false)
  }

  return (
    <StyleContext.Provider value={themed}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        onChangeTheme={changeTheme}
      />
      <Transition in={animate} timeout={500}>
        {state => (
          <div
            style={{ ...defaultStyle, ...transitionStyles[state] }}
            className={layoutStyles.container}
          >
            <main>{children}</main>
          </div>
        )}
      </Transition>
      <Footer />
    </StyleContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
