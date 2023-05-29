import React from "react";
import skills from "./data/Skills.json";
import education from "./data/Education.json";
import { NavLink } from "react-router-dom";
import pdf from "./assets/Michael_Sawlani_Resume.pdf";
import Links from "./data/SocialLinks.json";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

const About = () => {
  return (
    <div className="container text-white overflow-auto">
      <h1>BIO</h1>
      <p className="p-4">
        Michael is a Full Stack Developer with 5+ years in the industry. He
        graduated in 2019 with a bachelors in software development from Full
        Sail University. He has recently achieved a certificate in full-stack
        development. The projects that he has worked on are a Twitch bot with
        frontend and backend, PGP Smart Assist, and helping train car documents
        through an AI. So far the skills that he has picked up are HTML,
        JavaScript, TypeScript, CSS, React, Angular, etc. His ultimate goal as a
        developer is to continue to thrive and to have an impact on the world
        today.
      </p>
      <h1 className="navbar">Links</h1>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <ul className="navbar-nav">
          {Links.Links.map((link, id) => (
            <li className="align-middle" key={id}>
              <a
                className=" m-3 text-decoration-none"
                href={link.To}
                target="_blank"
              >
                {link.Name}
              </a>
            </li>
          ))}
          <li className="align-middle">
            <a
              className=" m-3 text-decoration-none "
              target="_blank"
              href={pdf}
              download={pdf}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

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
