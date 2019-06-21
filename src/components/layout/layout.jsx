import React from "react"
import PropTypes from "prop-types"

import "../../sass/main.scss"

const Layout = ({ children }) => (
  <>
    <div className="layout">{children}</div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
