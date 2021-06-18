import React, { useState, Fragment } from "react";
import skills from "./data/Skills.json";


const Skills = () =>{
  
    return (
      <Fragment>
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
    );
}

export default Skills;