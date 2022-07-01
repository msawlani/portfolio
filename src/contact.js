import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Content = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "yahoo",
        "template_qxl3m6s",
        form.current,
        "user_AlZxpeQYXOwdCLwIRk2ey"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <div className="container">
      <div className="d-flex text-white row">
        <div className="col-lg-5 offset-lg-4">
          <form ref={form} onSubmit={sendEmail}>
            <h2>Contact Me</h2>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="emailInput"
                className="form-control"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subjectInput" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subjectInput"
                className="form-control"
                name="subject"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="messageTextArea" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="messaageTextArea"
                rows="3"
                name="message"
                required
              ></textarea>
            </div>
            <div className="mb-3 text-center">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Content;
