import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import logo from "../images/logo-ristorante.svg"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero hero-index is-dark is-fullheight has-background">
        {/* <img
          src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590"
          alt="Pasta"
          className="hero-background is-transparent"
        /> */}

        <Img
          fluid={data.img.childImageSharp.fluid}
          imgStyle={{ objectPosition: "center 85%" }}
          className="hero-background is-transparent"
        />

        <div className="hero-body">
          <div className="container">
            <div className="columns is-gapless">
              <div className="column">
                <img
                  src={logo}
                  className="logo-ristorante"
                  alt="Ristorante Vesuvio'79 logo"
                />
              </div>
              <div className="column">
                <div className="container has-text-centered">
                  <h1 className="title">
                    Ciao raga e benvenuti al Ristorante Vesuvio'79 :)
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    img: file(relativePath: { eq: "pasta.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
