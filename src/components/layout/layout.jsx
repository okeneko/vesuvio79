import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"

import "../../styles/main.sass"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div>{children}</div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
