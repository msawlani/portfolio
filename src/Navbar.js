import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const nav = () => {
  const navStyle = {
    color: "White",
  };

  return (
    <nav className="d-flex">
      <h3>Portfolio</h3>
      <ul className="d-flex pt-2" style={{ listStyle: "none" }}>
        <Link style={navStyle} to="/">
          <li className="mr-5">Home</li>
        </Link>
        <Link className="pr-5" style={navStyle} to="/projects">
          <li>Projects</li>
        </Link>
      </ul>
    </nav>
  );
};

export default nav;
