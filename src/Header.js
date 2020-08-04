import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  state = {
    navActive: false,
  };

  handleBurgerClick = () => {
    this.setState({
      navActive: !this.state.navActive,
    });
  };

  removeNavActive = () => {
    this.setState({
      navActive: false,
    });
  };

  render() {
    return (
      <header>
        <div className="logo">Nutki</div>
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} /> 609-043-666
        </div>
        <nav className={this.state.navActive ? "nav-active" : null}>
          <ul className={this.state.navActive ? "ul-active" : null}>
            <li>
              <NavLink onClick={this.removeNavActive} to="/">
                O nas
              </NavLink>
            </li>
            <li>
              <NavLink onClick={this.removeNavActive} to="/offer">
                Oferta
              </NavLink>
            </li>
            <li>
              <NavLink onClick={this.removeNavActive} to="/schedule">
                Grafik
              </NavLink>
            </li>
            <li>
              <NavLink onClick={this.removeNavActive} to="/price-list">
                Cennik
              </NavLink>
            </li>
            <li>
              <NavLink onClick={this.removeNavActive} to="/contact">
                Kontakt
              </NavLink>
            </li>
            <li>
              <NavLink onClick={this.removeNavActive} to="/online">
                Zapisy online
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="burger" onClick={this.handleBurgerClick}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
    );
  }
}
export default Header;
