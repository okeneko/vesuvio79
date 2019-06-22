import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      galleryQuery: allFile(
        filter: { relativePath: { glob: "gallery-*.jpg" } }
        sort: { fields: [relativePath] }
      ) {
        gallery: edges {
          node {
            img: childImageSharp {
              id
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const scroll = () => {
    const layout = document.querySelector(".layout")
    const layoutPadding = window.getComputedStyle(layout).padding
    window.scrollTo({
      top: 2 * window.innerHeight - 2 * parseInt(layoutPadding),
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <section className="gallery">
      {data.galleryQuery.gallery.map((edge, index) => (
        <Img
          key={edge.node.img.id}
          className={`gallery__photo gallery__photo--${index + 1}`}
          fluid={edge.node.img.fluid}
        />
      ))}
      <div className="gallery__text">
        <span>
          Scopri i migliori piatti della cucina italiana come se fosse la prima
          volta.
        </span>
        <button className="gallery__button" onClick={scroll}>
          <span>Il nostro menù</span>
        </button>
      </div>
    </section>
  )
}

export default Gallery
