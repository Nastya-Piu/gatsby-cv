import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { FaMoon, FaRegMoon } from "react-icons/fa"

const ThemeTogglerIcon = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className="theme-toggler">
          {theme === "dark" && (
            <FaRegMoon size={22} onClick={() => toggleTheme("light")} />
          )}
          {theme === "light" && (
            <FaMoon size={22} onClick={() => toggleTheme("dark")} />
          )}
        </div>
      )}
    </ThemeToggler>
  )
}

export default ThemeTogglerIcon
