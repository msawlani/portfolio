import React from "react";
import skills from "./data/Skills.json";

import pdf from "./assets/Michael_Sawlani_Resume.pdf";
import Links from "./data/SocialLinks.json";
import "./CSS/about.css";
const About = () => {
  return (
    <div className="container text-white overflow-auto">
      <h1>BIO</h1>
      <p className="p-4">
        Michael is a Frontend Developer with 3+ years in the industry. The
        projects that he has worked on are a Twitch bot with frontend and
        backend, PGP Smart Assist, and helping train car documents through an
        AI. So far the skills that he has picked up are HTML, JavaScript,
        TypeScript, CSS, React, Angular, etc. He has started to dive deeper in
        Python and ML to ultimately create models that do amazing things. His
        end game as a developer is to continue to thrive and make a difference
        in todays society .
      </p>
      <h1>Links</h1>
      <ul className="d-flex list-unstyled">
        {Links.Links.map((link, id) => (
          <li key={id}>
            <a
              className=" m-3 text-decoration-none links"
              href={link.To}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.Name}
            </a>
          </li>
        ))}
        <li>
          <a
            className=" m-3 text-decoration-none links"
            target="_blank"
            rel="noopener noreferrer"
            href={pdf}
            download={pdf}
          >
            Resume
          </a>
        </li>
      </ul>

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
