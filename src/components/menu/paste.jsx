import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Piatto from "./piatto"

const Paste = ({ piatti }) => {
  const data = useStaticQuery(graphql`
    query {
      videoMp4: file(
        relativePath: { glob: "Pasta-Burrata*" }
        extension: { eq: "mp4" }
      ) {
        path: publicURL
      }

      videoWebm: file(
        relativePath: { glob: "Pasta-Burrata*" }
        extension: { eq: "webm" }
      ) {
        path: publicURL
      }
    }
  `)

  const mp4Path = data.videoMp4.path
  const webmPath = data.videoWebm.path

  return (
    <div className="menu__section section-paste">
      <div className="section-paste__video">
        <video className="section-paste__video--content" autoPlay muted loop>
          <source src={mp4Path} type="video/mp4" />
          <source src={webmPath} type="video/webm" />
          Your browser is not supported.
        </video>
      </div>

      <h1 className="menu__section__title section-paste__title">Le paste</h1>
      <div className="menu__section__piatti section-paste__piatti">
        {piatti.map((p, index) => (
          <Piatto key={index} nome={p.nome} prezzo={p.prezzo} />
        ))}
      </div>
    </div>
  )
}

export default Paste
