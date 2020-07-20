import React, { useState } from "react";

const Copyright = React.lazy(() => import("./shared/copyright"));
const ResumeViewer = React.lazy(() => import("./resumeViewer"));

const App = () => {
  return (
    <div>
      <div>
        <h1 className="mt-5 text-center pt-3" style={{ fontSize: "60px" }}>
          Welcome to my Portfolio Site
        </h1>
      </div>
      <div>
        <h2 className="pl-3">About Me</h2>
        <p className="pl-5 pr-5">
          I am a Software Developer from Full Sail University and currently, I
          am working at Sogeti as an consultant. Before Sogeti, I was a remote
          web developer for my dad's Pediatric website. We used HTML, CSS, and
          JavaScript to develope the site. I will have more detail about this
          under projects. So far I have learned C#, HTML, Python, and Swift just
          to name a few. I plan on learning more about React, React-Native, and
          JavaScript. My ultimate goal is to develop a program or app that
          everyone can use in their everyday life.
        </p>
      </div>

      <ResumeViewer />

      <div>
        <h2 className="pl-3">Hobbies</h2>
        <ul className="pl-5">
          <li>DJing</li>
          <p>
            Want to hear some mixes?:
            <a href="https://www.mixcloud.com/michael-sawlani/" target="_blank">
              My Mixcloud Profile
            </a>
          </p>
          <li>Listening to Music</li>
          <li>Streaming</li>
          <li>Playing Video Games</li>
        </ul>
      </div>
      <Copyright />
    </div>
  );
};

export default App;
