import React, { useState, useEffect } from "react"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Benvenuto from "../components/index/benvenuto"

const IndexPage = () => {
  const [wide, setWide] = useState(false)
  useEffect(() => {
    resized()
    scrolled()
    window.addEventListener("resize", resized)
    document.addEventListener("scroll", scrolled)
    return () => {
      window.removeEventListener("resize", resized)
      document.removeEventListener("scroll", scrolled)
    }
  })

  const resized = () => {
    if (window.innerWidth > 1024) setWide(true)
    else setWide(false)
  }

  const scrolled = () => {
    const scroll = window.scrollY
    const height = window.innerHeight
    const diff = height - scroll

    const navbar = document.querySelector(".navbar")
    const logo = document.querySelector(".logo")

    const title = document.querySelector(".title")
    const ristorante = document.querySelector(".restaurant-title")
    const vesuvio = document.querySelector(".restaurant-name")

    if (diff > title.clientHeight) {
      const topDist = diff / 2
      title.setAttribute("style", `top: ${scroll + topDist}px`)
      const remStart = 5.0
      const remGoal = wide ? 2.5 : 2.0
      const remDiff = remStart - remGoal

      const diff2 = diff - title.clientHeight
      const percent = 1 - diff2 / (height - title.clientHeight)
      const newFontSize = remDiff * percent

      vesuvio.setAttribute(
        "style",
        `font-size: ${remStart - newFontSize}rem!important`
      )
      ristorante.style.opacity = 1 - percent
    } else if (diff <= navbar.clientHeight) {
      title.style.opacity = 0
      logo.style.opacity = 1
    } else {
      title.style.opacity = 1
      logo.style.opacity = 0
    }

    // const opacity = window.scrollY / window.innerHeight
    // if (window.scrollY <= window.innerHeight) {
    //   document
    //     .querySelector(".navbar")
    //     .setAttribute(
    //       "style",
    //       `background: rgba(18, 18, 18, ${opacity}) !important`
    //     )
    //   document.querySelector(".logo").style.opacity = opacity
    // } else {
    //   document
    //     .querySelector(".navbar")
    //     .setAttribute("style", "background: rgba(18, 18, 18, 1) !important")
    //   document.querySelector(".logo").style.opacity = 1
    // }
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
