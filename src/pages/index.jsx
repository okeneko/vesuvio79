import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import logo from "../images/logo-ristorante.svg"

const IndexPage = ({ data }) => {
  return (
    <Layout noLogo transparent>
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
            <div className="columns">
              <div className="column is-half">
                <img
                  src={logo}
                  className="logo-ristorante"
                  alt="Ristorante Vesuvio'79 logo"
                />
              </div>
              <div className="column is-half">
                <div className="notification has-text-golden is-dark description">
                  <p className="is-size-5 has-text-weight-semibold description-text">
                    La città di Pompei fu distrutta dall'eruzione del Vesuvio
                    nel 79 d.C. In questo ristorante scoprirete una cucina
                    ancora più esplosiva.
                  </p>
                  <Link
                    to="/menu"
                    className="button is-golden is-rounded is-medium has-text-weight-bold is-uppercase"
                  >
                    il nostro menù
                  </Link>
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
        fluid(maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
