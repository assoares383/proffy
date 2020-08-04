import React from "react";
import { FaUserCircle } from "react-icons/fa";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeachetItem() {
  return (
    <article className="teacher-item">
      <header>
        <FaUserCircle />
        <div>
          <strong>Lorem Ipsum</strong>
          <span>Mathematics</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        facilisis fermentum odio, sed vestibulum est posuere in.
        <br />
        <br />
        Integer diam ante, cursus sit amet lorem eget, luctus bibendum purus.
        Nulla dui nisl, aliquet a maximus vel, rutrum venenatis orci. Nunc et
        bibendum urna.
      </p>

      <footer>
        <p>
          Preço/hora <strong>70,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" /> Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeachetItem;
