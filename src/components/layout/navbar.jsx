/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo-vesuvio.svg"

const Navbar = ({ noLogo, transparent }) => {
  const transparentClass = !!transparent ? "navbar-transparent" : ""

  return (
    <nav
      className={`navbar is-spaced is-dark ${transparentClass}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand has-text-centered">
        {!noLogo && (
          <Link className="logo" to="/">
            <img src={logo} alt="Vesuvio'79 logo" />
          </Link>
        )}
        <a
          role="button"
          className="navbar-burger has-text-golden"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className="navbar-menu is-uppercase is-">
        <div className="navbar-start">
          <a className="navbar-item">il menù</a>
        </div>
        <div className="navbar-end">
          <a className="navbar-item">la nostra filosofia</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
