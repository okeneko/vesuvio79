/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav
      className="navbar is-spaced is-fixed-top is-dark has-text-golden"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand has-text-centered">
        <Link className="logo is-family-secondary has-text-golden" to="/">
          Vesuvio'79
        </Link>
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
      <div className="navbar-menu is-uppercase">
        <div className="navbar-start">
          <a className="navbar-item">menù</a>
          <a className="navbar-item">menù</a>
          <a className="navbar-item">menù</a>
        </div>
        <div className="navbar-end">
          <a className="navbar-item">menù</a>
          <a className="navbar-item">menù</a>
          <a className="navbar-item">menù</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
