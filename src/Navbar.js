import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/nav.css";
import Links from "./data/Links.json";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container">
        <span className="align-middle text-white fs-1 fw-bold col-md-6 m-3">
          Michael Sawlani
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse col-6" id="navbar">
          <ul className="navbar-nav">
            {Links.Links.map((link, id) => (
              <li className="align-middle" key={id}>
                <NavLink
                  className="main-nav m-3 text-decoration-none"
                  activeClassName="main-nav-active"
                  exact
                  to={link.To}
                >
                  {link.Name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
