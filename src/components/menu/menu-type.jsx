import React from "react"
import Img from "gatsby-image"

const MenuType = ({ title, img, index }) => {
  const scroll = index => {
    const padding = window.getComputedStyle(document.body).padding
    window.scrollTo({
      top: (3 + index) * window.innerHeight - (3 + index) * parseInt(padding),
      left: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className="menu__type"
      onClick={() => {
        scroll(index)
      }}
    >
      <Img className="menu__type__img" fluid={img} />
      <h1 className="menu__type__title">{title}</h1>
    </div>
  )
}

export default MenuType
