import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      galleryQuery: allFile(
        filter: { relativePath: { glob: "gallery-*.jpg" } }
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
        Scopri i migliori piatti della cucina italiana come se fosse la prima
        volta.
      </div>
    </section>
  )
}

export default Gallery
