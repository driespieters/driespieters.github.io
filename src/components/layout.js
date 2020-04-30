import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/main.scss"
import Logo from "../assets/logo.svg"


const Layout = ({ children }) => {
  return (
    <div>
      <header className="siteHeader">
        <Link to="/">
          <Logo className="siteLogo"/>
        </Link>
      </header>
      <main>{children}</main>
      <footer className="siteFooter">
        © {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
