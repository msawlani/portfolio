import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import pdf from "./assets/Michael_Sawlani_Resume.pdf";
import "./CSS/nav.css";
import Links from "./data/Links.json";

const Nav = () => {
  return (
    <nav class="navbar navbar-light navbar-expand-sm rounded">
      <h3 className="text-white">Michael Sawlani</h3>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbars"
        aria-controls="navbars"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbars" class="collapse navbar-collapse ">
        <ul class="list-unstyled navbar-nav ml-auto mr-lg-2 ">
          {Links.Links.map((link) => (
            <li>
              <NavLink
                className="main-nav pr-3"
                activeClassName="main-nav-active"
                exact
                to={link.To}
              >
                {link.Name}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              className="text-white"
              to={pdf}
              target="_blank"
              download={pdf}
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
