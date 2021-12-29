import React from "react";
import "./CSS/home.css";

const Content = () => {
  return (
    <div className="container">
      <div className="d-flex text-white row">
        <div className="col-lg-5 offset-lg-4">
          <form>
            <h2>Contact Me</h2>
            <div className="mb-3">
              <label for="emailInput" class="form-label">
                Email Address
              </label>
              <input type="email" id="emailInput" class="form-control" />
            </div>
            <div className="mb-3">
              <label for="subjectInput" class="form-label">
                Subject
              </label>
              <input type="text" id="subjectInput" class="form-control" />
            </div>
            <div className="mb-3">
              <label for="messageTextArea" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="messaageTextArea"
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Content;
