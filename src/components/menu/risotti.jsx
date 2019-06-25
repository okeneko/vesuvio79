import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Piatto from "./piatto"

const Risotti = ({ piatti }) => {
  const data = useStaticQuery(graphql`
    query {
      pizzaImg: file(relativePath: { eq: "menu-risotto.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="menu__section section-risotti">
      <Img
        className="section-risotti__img"
        fluid={data.pizzaImg.childImageSharp.fluid}
      />

      <h1 className="menu__section__title section-risotti__title">I risotti</h1>
      <div className="menu__section__piatti section-risotti__piatti">
        {piatti.map((p, index) => (
          <Piatto key={index} nome={p.nome} prezzo={p.prezzo} />
        ))}
      </div>
    </div>
  )
}

export default Risotti
