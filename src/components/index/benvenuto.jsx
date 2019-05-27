import React from "react"

const Benvenuto = () => {
  return (
    <section className="benvenuto hero hero-index is-dark is-fullheight has-background">
      <img
        src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590"
        alt="Pasta"
        className="hero-background is-transparent"
      />
      <div className="hero-body">
        <div className="title is-3-rem is-family-secondary has-text-golden has-text-weight-medium has-text-centered">
          <span className="restaurant-title">
            Ristorante <br />
          </span>
          <span className="restaurant-name is-5-rem">Vesuvio'79</span>
        </div>
      </div>
    </section>
  )
}

export default Benvenuto
