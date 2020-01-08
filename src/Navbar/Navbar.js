import React, { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  state = {
    isOpen: false
  };
  OnToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <nav>
          <div className="logo">
            <h4>Navbar</h4>
          </div>
          <ul
            className={
              this.state.isOpen ? "nav-links " : "nav-links nav-links-hide "
            }
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
          <div
            className={this.state.isOpen ? "open burger" : "burger"}
            onClick={this.OnToggle}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </nav>
        <h1 className="heading">Navbar with Function</h1>
      </div>
    );
  }
}

export default Navbar;
