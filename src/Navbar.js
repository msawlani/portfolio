import React from "react";
import { NavLink } from "react-router-dom";
import pdf from "./assets/Michael_Sawlani_Resume.pdf";
import "./CSS/nav.css";
import Links from "./data/Links.json"
const nav = () =>{
  return (
    <nav className="d-flex">
      <div class="d-flex">
        <h3 className="name pl-4">Michael Sawlani</h3>
        <a
          className="pl-4 pt-1"
          style={{ fontSize: "20px" }}
          href={pdf}
          target="_blank"
          download={pdf}
        >
          Resume
        </a>
      </div>

      <div className="d-flex">
        {Links.Links.map((link) => (
          <NavLink
            className="main-nav p-4"
            activeClassName="main-nav-active"
            exact
            to={link.To}
          >
            {link.Name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default nav;
