import React, { useEffect } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Benvenuto from "../components/index/benvenuto"

const IndexPage = () => {
  useEffect(() => {
    scrolled()
    document.addEventListener("scroll", scrolled)
    return () => {
      document.removeEventListener("scroll", scrolled)
    }
  })

  const scrolled = () => {
    const opacity = window.scrollY / window.innerHeight
    if (window.scrollY <= window.innerHeight) {
      document
        .querySelector(".navbar")
        .setAttribute(
          "style",
          `background: rgba(18, 18, 18, ${opacity}) !important`
        )
      document.querySelector(".logo").style.opacity = opacity
    } else {
      document
        .querySelector(".navbar")
        .setAttribute("style", "background: rgba(18, 18, 18, 1) !important")
      document.querySelector(".logo").style.opacity = 1
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Benvenuto />
      <section className="hero is-dark is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered has-text-golden is-family-secondary is-size-4">
            <ul>
              <li>Antipasti</li>
              <li>Paste</li>
              <li>Pizze</li>
              <li>Dolci</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
