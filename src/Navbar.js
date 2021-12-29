import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./CSS/nav.css";
import Links from "./data/Links.json";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark">
      <h3 className="text-white">Michael Sawlani</h3>
      <button
        class="navbar-toggler ms-auto"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbars"
        aria-controls="navbars"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon "></span>
      </button>

      <div
        id="navbars"
        class="collapse navbar-collapse d-flex justify-content-around"
      >
        <ul class="navbar-nav">
          {Links.Links.map((link) => (
            <li>
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
    </nav>
  );
};

export default Nav;
