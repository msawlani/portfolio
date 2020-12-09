import React, { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMixcloud, faTwitch } from "@fortawesome/free-brands-svg-icons";

const Copyright = React.lazy(() => import("./shared/copyright"));
const ResumeViewer = React.lazy(() => import("./resumeViewer"));

const App = () => {
  return (
    <Fragment>
      <Fragment>
        <h1 className="mt-5 text-center pt-3" style={{ fontSize: "60px" }}>
          Welcome to my Portfolio Site
        </h1>
      </Fragment>
      <Fragment>
        <h2 className="pl-3">About Me</h2>
        <p className="pl-5 pr-5">
          I am a Software Developer from Full Sail University and currently, I
          am working at Sogeti as an consultant and I recently started my duel 
          master in Computer Engineering and Information Technology. Before Sogeti, 
          I was a remote web developer for my dad's Pediatric website.
           We used HTML, CSS, and JavaScript to develop the site. I will have more detail about this
          under projects. So far I have learned C#, HTML, Python, and Swift just
          to name a few. I plan on learning more about React, React-Native, and
          JavaScript. My ultimate goal is to develope an app or website that
          will make a difference in this world.
        </p>
      </Fragment>
      <ResumeViewer />
      <br />
      <Fragment>
        <h2 className="pl-3 pt-3">Hobbies</h2>
        <ul className="pl-5">
          <li>DJing</li>
          <p>
            Want to hear some mixes?:
            <br />
            <a
              rel="noopener"
              href="https://www.mixcloud.com/michael-sawlani/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faMixcloud} size="2x" />
            </a>
          </p>
          <li>Streaming Video Games</li>
          <p>
            Want to watch me play Videogames?:
            <br />
            <a
              rel="noopener"
              href="https://www.twitch.tv/sinsofaninja"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitch} size="2x" />
            </a>
          </p>
        </ul>
      </Fragment>
      <Copyright />
    </Fragment>
  );
};

export default App;
