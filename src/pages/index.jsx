import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout/layout"
import Header from "../components/sections/header"
import Gallery from "../components/sections/gallery"
import Menu from "../components/sections/menu"
import Footer from "../components/sections/footer"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="index">
        <Header />
        <Gallery />
        <Menu />
        <Footer />
      </div>
    </Layout>
  )
}

export default IndexPage
