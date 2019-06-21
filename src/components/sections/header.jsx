import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { MdExpandMore } from "react-icons/md"

const Header = ({ img }) => {
  const data = useStaticQuery(graphql`
    query {
      headerImg: file(relativePath: { eq: "pasta.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="header">
      <Img
        fluid={data.headerImg.childImageSharp.fluid}
        className="header__background"
      />
      <h1 className="header__title">
        <span className="header__title--ristorante">Ristorante</span>
        <span className="header__title--vesuvio">Vesuvio'79</span>
      </h1>
      <MdExpandMore className="header__expand-icon" />
    </section>
  )
}

export default Header
