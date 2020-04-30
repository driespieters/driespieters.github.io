import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/main.scss"
import Logo from "../assets/logo.svg"


const Layout = ({ children }) => {
  return (
    <div>
      <header className="site-header">
        <Link to="/">
          <Logo className="site-logo" />
        </Link>
      </header>
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
