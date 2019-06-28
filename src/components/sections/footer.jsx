import React from "react"
import { MdLocationOn } from "react-icons/md"
import { IoLogoGithub } from "react-icons/io"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">Vesuvio'79</div>
      <ul className="footer__addresses">
        <li className="footer__address">
          <MdLocationOn className="footer__address__icon" />
          <span className="footer__address__text">
            Piazza Giuseppe Garibaldi, 76,
            <br /> Napoli, IT
          </span>
        </li>
        <li className="footer__address">
          <MdLocationOn className="footer__address__icon" />
          <span className="footer__address__text">
            Via Santa Margherita, 18,
            <br /> Milano, IT
          </span>
        </li>
        <li className="footer__address">
          <MdLocationOn className="footer__address__icon" />
          <span className="footer__address__text">
            Calle de Hortaleza, 43,
            <br /> Madrid, ES
          </span>
        </li>
        <li className="footer__address">
          <MdLocationOn className="footer__address__icon" />
          <span className="footer__address__text">
            Avinguda de les Drassanes, 33,
            <br /> Barcelona, ES
          </span>
        </li>
        <li className="footer__address">
          <MdLocationOn className="footer__address__icon" />
          <span className="footer__address__text">
            San Martzial kalea, 12,
            <br /> Donostia-San Sebastián, ES
          </span>
        </li>
        <li className="footer__address">
          <MdLocationOn className="footer__address__icon" />
          <span className="footer__address__text">
            Rua dos Sapateiros, 182,
            <br /> Lisboa, PT
          </span>
        </li>
      </ul>
      <p className="footer__copyright">
        &copy; Eneko Ortiz de Zarate, 2019. Made with{" "}
        <a
          href="http://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          React
        </a>{" "}
        and{" "}
        <a
          href="http://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          Gatsby
        </a>
        , using{" "}
        <a
          href="http://netlifycms.org"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          Netlify CMS
        </a>
        . Hosted on{" "}
        <a
          href="http://netlify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          Netlify
        </a>
        . Source code on{" "}
        <a
          href="http://github.com/okeneko/vesuvio79"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
        <br /> This is not a <em>real</em> website.{" "}
        <em>Ristorante Vesuvio'79</em> is a fake restaurant that does not exist
        and is not located in the addresses above.
      </p>
    </footer>
  )
}

export default Footer
