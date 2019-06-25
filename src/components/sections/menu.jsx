import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import MenuType from "../menu/menu-type"
import Paste from "../menu/paste"
import Pizze from "../menu/pizze"
import Risotti from "../menu/risotti"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentJson {
        edges {
          node {
            paste {
              nome
              prezzo
            }
            pizze {
              nome
              prezzo
            }
            risotti {
              nome
              prezzo
            }
          }
        }
      }

      imagesQuery: allFile(
        filter: { relativePath: { glob: "menu-list-*.jpg" } }
        sort: { fields: [relativePath] }
      ) {
        images: edges {
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

      videoMp4: file(
        relativePath: { glob: "pizza-oven*" }
        extension: { eq: "mp4" }
      ) {
        path: publicURL
      }
    }
  `)

  const paste = data.allContentJson.edges[0].node.paste
  const pizze = data.allContentJson.edges[0].node.pizze
  const risotti = data.allContentJson.edges[0].node.risotti

  const titles = ["Paste", "Pizze", "Risotti"]

  const video = data.videoMp4.path

  return (
    <section className="menu">
      <div className="menu__intro">
        <div className="menu__info">
          <div className="menu__info__video">
            <video className="menu__info__video--content" autoPlay muted loop>
              <source src={video} type="video/mp4" />
              Your browser is not supported.
            </video>
          </div>
          <div className="menu__info__text">
            <h1 className="menu__info__heading">Menù e filosofia</h1>
            <p className="menu__info__paragraph">
              La città di Pompei fu distrutta dall'eruzione del Vesuvio nel 79
              d.C. La filosofia di questo ristorante si basa sulla memoria e
              sull'omaggio di quell'evento che ha cambiato completamente la
              storia dell'antica città di Pompei e la zona di Napoli.
            </p>
            <p className="menu__info__paragraph">
              Nei nostri piatti troverete l'esenza esplosiva del vulcano, così
              come il ricordo di una città che ha smesso di essere ciò che era.
              Le nostre specialità sono le paste, le pizze ed i risotti.
            </p>
            <p className="menu__info__paragraph">Buon appetito!</p>
          </div>
        </div>

        <div className="menu__list">
          {data.imagesQuery.images.map((edge, index) => (
            <MenuType
              key={index}
              title={titles[index]}
              img={edge.node.img.fluid}
              index={index}
            />
          ))}
        </div>
      </div>
      <Paste piatti={paste} />
      <Pizze piatti={pizze} />
      <Risotti piatti={risotti} />
    </section>
  )
}

export default Menu
