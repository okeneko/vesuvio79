import React from "react"

const Piatto = ({ nome, prezzo }) => {
  return (
    <div className="piatto">
      <div className="piatto__nome">{nome}</div>
      <div className="piatto__prezzo">{prezzo}€</div>
    </div>
  )
}

export default Piatto
