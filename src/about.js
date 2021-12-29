import React from "react";
import "./CSS/home.css";
import skills from "./data/Skills.json";
import { NavLink } from "react-router-dom";
import pdf from "./assets/Michael_Sawlani_Resume.pdf";

const About = () => {
  return (
    <div className="container">
      <NavLink
        className="text-white text-decoration-none"
        to={pdf}
        target="_blank"
        download={pdf}
      >
        Resume
      </NavLink>
      <div className="d-flex text-white row">
        <div className="col-lg-2">
          <h4>{skills.Lang.Name}</h4>
          {skills.Lang.Skills.map((name) => (
            <li>{name}</li>
          ))}
        </div>
        <div className="col-lg-2">
          <h4>{skills.Plat.Name}</h4>
          {skills.Plat.Skills.map((name) => (
            <li>{name}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
