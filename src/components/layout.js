import React from "react"
import PropTypes from "prop-types"
import "../styles/main.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
