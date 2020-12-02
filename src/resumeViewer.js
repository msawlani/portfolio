import React, { Component } from "react";
import pdf from "./assets/Michael_Sawlani_Resume.pdf";
import { Document, Page } from "react-pdf";

const ResumeViewer = () => {
  return (
    <div>
      <h2 className="pl-3 pb-3">My Resume</h2>
      {/* <a className="pl-5" href={pdf} download="Michael_Sawlani_Resume.pdf">
        Download My Resume
      </a> */}
      {/* <br /> */}
      <a href={pdf} target = "_blank"> Download Resume</a>
    </div>
  );
};

export default ResumeViewer;
