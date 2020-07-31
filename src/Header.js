import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className="logo">Nutki</div>
      <div className="phone">
        <FontAwesomeIcon icon={faPhone} /> 609-043-666
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">O nas</NavLink>
          </li>
          <li>
            <NavLink to="/offer">Oferta</NavLink>
          </li>
          <li>
            <NavLink to="/schedule">Grafik</NavLink>
          </li>
          <li>
            <NavLink to="/price-list">Cennik</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Kontakt</NavLink>
          </li>
          <li>
            <NavLink to="/online">Zapisy online</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
