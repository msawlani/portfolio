import React from "react";
import "./CSS/home.css";
import skills from "./data/Skills.json";
import picture from "./assets/Images/picture.jpg";

const App = () => {
  return (
    <div className="container">
      <div className="d-flex text-white">
      <div className="col-lg-3">
          <img className="rounded-circle img-fluid" src={picture} />
         <h2>About Me</h2>
          <p>I am a Software Developer determind on building products that change the world. </p>
      </div>
      <div className="col-lg-5 offset-lg-5">
 <form>
 <h2>Contact Me</h2>
   <div className="mb-3">
     <label for="emailInput" class="form-label">Email Address</label>
     <input type="email" id="emailInput" class="form-control"/>
   </div>
   <div className="mb-3">
     <label for="subjectInput" class="form-label">Subject</label>
     <input type="text" id="subjectInput" class="form-control"/>  
     </div>
   <div className="mb-3">
     <label for="messageTextArea" class="form-label">Message</label>
     <textarea class="form-control" id="messaageTextArea" rows="3"></textarea>
   </div>
 </form>
 </div>
      </div>
      <div className="d-flex text-white">
        <div className="col-lg-2">            
        <h4>{skills.Lang.Name}</h4>
          {skills.Lang.Skills.map((name) => (
            <li>{name}</li>
          ))}
        </div>
        <div>
          <h4>{skills.Plat.Name}</h4>
          {skills.Plat.Skills.map((name) => (
            <li>{name}</li>

          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
