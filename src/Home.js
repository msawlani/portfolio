import React, { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMixcloud, faTwitch } from "@fortawesome/free-brands-svg-icons";
import "./CSS/home.css"
import skills from "./data/Skills.json";



const App = () => {
  return (
    <body>
      <Fragment className="wrapper">
        <Fragment>
          <h1 className="mt-5 text-center pt-3">
            Welcome to my Portfolio Site
          </h1>
        </Fragment>
        <Fragment>
          <h2 className="pl-3">About Me</h2>
          <div className="mr-5">
            <p className="pl-5 pr-5">
              I am a Software Developer from Full Sail University and currently,
              I am working at Sogeti as an consultant and I recently started my
              duel masters in Computer Engineering and Information Technology at
              Atlantis University. Before Sogeti, I was a remote web developer
              for my dad's Pediatric website. We used HTML, CSS, and JavaScript
              to develop the site. I will have more detail about this under
              projects. So far I have learned C#, HTML, Python, and Swift just
              to name a few. I plan on learning more about React, React-Native,
              JavaScript, and next.js. My ultimate goal is to develop an app or
              website that will make a difference in this world.
            </p>
          </div>
          <ul className="mt-5">
            {skills.Skills.map((skill) => (
              <Fragment>
                <h4 className="pt-4">{skill.Name}</h4>
                {skill.Skills.map((name) => (
                  <li>{name.Name}</li>
                ))}
              </Fragment>
            ))}
          </ul>
        </Fragment>
      </Fragment>
    </body>
  );
};

export default App;
