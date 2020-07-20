import React from "react";
import pdf from "./assets/Michael_Sawlani_Resume.pdf";
import PDFViewer from "pdf-viewer-reactjs";

export default class ResumeViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleClick() {
    this.setState((currentState) => ({
      visible: !currentState.visible,
    }));
    console.log(this.state.visible);
  }

  render() {
    return (
      <div>
        <h2 className="pl-3 pb-3">My Resume</h2>
        <a className="pl-5" href={pdf} download="Michael_Sawlani_Resume.pdf">
          Download My Resume
        </a>
        <br />
        <div className="pl-5">
          <button onClick={() => this.handleClick()}> Show Resume</button>
        </div>
        <br />
        <br />
        <div
          hidden={this.state.visible}
          style={{
            marginTop: "-100px",
          }}
        >
          <PDFViewer
            document={{ url: pdf }}
            hideNavbar="true"
            scale="1.23"
            maxScale="3"
            minScale="1"
          ></PDFViewer>
        </div>
      </div>
    );
  }
}
