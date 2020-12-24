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
      <ul className="d-flex pt-2 mr-5" style={{ listStyle: "none" }}>
        <Link style={navStyle} to="/">
          <li className="mr-4">Home</li>
        </Link>
        <Link className="pr-4" style={navStyle} to="/projects">
          <li>Projects</li>
        </Link>
        <Link className="pr-4" style={navStyle} to="/skills">
          <li>Skills</li>
        </Link>
      </ul>
    </nav>
  );
};

export default nav;
