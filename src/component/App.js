import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../style/style.css";
import Home from "./Home/Home";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="header">
          <div className="container-lg warna">
            <nav className="navbar navbar-expand-lg navbar-light warna">
              <Link to="9" className="navbar-brand">
                <img
                  className="logo"
                  alt="logo"
                  src={require("../logo/logo4.png")}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle nnavigation"
              >
                <span className="navbar-toggle-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      PROMO
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link className="dropdown-item" to="#">
                        PROMO
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Partnership
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      PAKET & ADD-ON
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link className="dropdown-item" to="#">
                        Action
                      </Link>
                      <Link className="dropdown-item" to="#">
                        Another action
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link to="#" className="dropdown-item">
                        Something else here
                      </Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="#">
                      Pusat Bantuan
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="">
            <Home />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
