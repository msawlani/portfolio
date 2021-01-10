import React, { useState, Fragment } from "react";

const Skills = () =>{
    return (
      <Fragment>
        <h1 className="mt-5 text-center">Skills</h1>
        <h2 className="pl-3">Technical</h2>
        <ul>
          <li>CSS</li>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>C#</li>
          <li>Java</li>
          <li>Swift</li>
        </ul>
        <h2 className="pl-3">Personal</h2>
        <h2 className="pl-3">Platforms</h2>
      </Fragment>
    );
}

export default Skills;