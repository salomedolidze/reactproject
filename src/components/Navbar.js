import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./NavbarStyles.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          {this.state.clicked ? <AiOutlineCloseSquare /> : <GiHamburgerMenu />}
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((elem, index) => {
            return (
              <li key={index}>
                <a className={elem.cName} href={elem.url}>
                  {" "}
                  {elem.icon}
                  {elem.title}
                </a>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
