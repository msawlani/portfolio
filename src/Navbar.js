import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import pdf from "./assets/Michael_Sawlani_Resume.pdf";
import "./CSS/nav.css";
import Links from "./data/Links.json";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Theme";

const Nav = () => {
  const [theme, setTheme] = useState("light");
  const themeToggle = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <nav class="navbar navbar-light navbar-expand-sm rounded">
        <h3>Michael Sawlani</h3>
        <button onClick={themeToggle}>{theme}</button>
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
              <a href={pdf} target="_blank" download={pdf}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </ThemeProvider>
  );
};

export default Nav;
