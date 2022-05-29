import React from "react";
import "./CSS/home.css";
import skills from "./data/Skills.json";
import education from "./data/Education.json";
import { NavLink } from "react-router-dom";
import pdf from "./assets/Michael_Sawlani_Resume.pdf";

const About = () => {
  return (
    <div className="container text-white">
      <h1>BIO</h1>
      <p className="p-4">
        Michael is a Full Stack Developer with 5+ years in the industry and
        currently works as a Mulesoft Developer for a Sogeti client KPMG. He
        graduated in 2019 with a Software Development Bachelors from Full Sail
        University and is now pursing a Masters in Information Technology &
        Computer Engineering at Atlantis University. He is expected to graduate
        by the end of 2022 While doing his Bachelors, he was working as a remote
        Web Developer for MD Pediatric Center. So far the skills that he has
        picked up are HTML, JavaScript, TypeScript, CSS, React, Angular, etc.
        His ultimate goal as a developer is to continue to thrive and to have a
        impact on the world today.
      </p>
      <NavLink
        className="text-decoration-none"
        to={pdf}
        target="_blank"
        download={pdf}
      >
        Resume
      </NavLink>
      <div className="d-flex row pt-4">
        <h1>Skills</h1>
        <div className="col-12 col-sm-3">
          <h4>{skills.Lang.Name}</h4>
          {skills.Lang.Skills.map((name, id) => (
            <li key={id}>{name}</li>
          ))}
        </div>
        <div className="col-12 col-sm-6">
          <h4>{skills.Plat.Name}</h4>
          {skills.Plat.Skills.map((name, id) => (
            <li key={id}>{name}</li>
          ))}
        </div>
      </div>
      {/* <div className="row pt-4">
        <h1>Education</h1>
        {education.Education.map((school, id) => (
          <li key={id}>{school.school}</li>
        ))}
      </div> */}
      {/* <div className="row pt-4">
        <h1>Certificates</h1>
        {education.Certifications.map((school, id) => (
          <li key={id}>{school.school}</li>
        ))}
      </div> */}
    </div>
  );
};

export default About;
