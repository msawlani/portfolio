import React, { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMixcloud, faTwitch } from "@fortawesome/free-brands-svg-icons";
import "./CSS/home.css";
import skills from "./data/Skills.json";
import picture from "./assets/Images/picture.jpg";

const App = () => {
  return (
    <div className="container body">
      <Fragment className="wrapper">
        <Fragment>
          <div className="col-sm-2">
            <img className="rounded-circle img-fluid" src={picture} />
          </div>
        </Fragment>
        <h2 className="ml-auto">About Me</h2>
        <ul className="ml-auto">
          {skills.Skills.map((skill) => (
            <Fragment>
              <h4 className="pt-4">{skill.Name}</h4>
              {skill.Skills.map((name) => (
                <li>{name}</li>
              ))}
            </Fragment>
          ))}
        </ul>
      </Fragment>
    </div>
  );
};

export default App;
