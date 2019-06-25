import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Piatto from "./piatto"

const Pizze = ({ piatti }) => {
  const data = useStaticQuery(graphql`
    query {
      pizzaImg: file(relativePath: { eq: "menu-pizza.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="menu__section section-pizze">
      <Img
        className="section-pizze__img"
        fluid={data.pizzaImg.childImageSharp.fluid}
      />

      <h1 className="menu__section__title section-pizze__title">Le pizze</h1>
      <div className="menu__section__piatti section-pizze__piatti">
        {piatti.map((p, index) => (
          <Piatto key={index} nome={p.nome} prezzo={p.prezzo} />
        ))}
      </div>
    </div>
  )
}

export default Pizze
