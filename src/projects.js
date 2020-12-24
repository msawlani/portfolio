import React, { Fragment } from "react";
import BBLogin from "./assets/BudgetBuster/Login.png";
import BBTransactions from "./assets/BudgetBuster/Transactions.png";
import MSList from "./assets/MemorandumShopper/GroceryList.png";
import MSLogin from "./assets/MemorandumShopper/Login Screen.png";
import MDHome from "./assets/MyPediatricMD/Home.JPG";
import MDApp from "./assets/MyPediatricMD/RequestAppointment.JPG";

const Projects = () => {
  return (
    <Fragment>
      <Fragment>
        <h1 className="mt-5 text-center">Projects</h1>
      </Fragment>
      <Fragment>
        <h2 className="pl-3">College</h2>
        <ul>
          <li>
            <b> Budget Buster | IOS App </b>
          </li>
          <p>
            Have you been spending a lot of money lately? Well fear no more,
            Budget Buster is an app that allows you to keep track of your daily
            spending. The features include adding expenses and monthly bills to
            a list. Also gives you in detail pie chart of how much you are
            spending. Each slice is clickable and shows you a list of all the
            expense for that section on the list. This app was developed using
            Swift and the framework is XCode.
          </p>
          <button>Show Pictures</button>
          <br />
          <img
            loading="lazy"
            src={BBLogin}
            alt="Login"
            display="inline-block"
            width="20%"
            height="auto"
          />
          <img
            loading="lazy"
            src={BBTransactions}
            alt="Transactions"
            display="inline-block"
            width="20%"
            height="auto"
          />

          <br />
          <li>
            <b> Memorandum Shopper | IOS App</b>
          </li>
          <p>
            People always forget what they need to buy and then have to go back
            to the store. This app was a one month project that allows you to
            make a grocery list on your phone. The main scope of it was to add
            items to a list, found near by grocery stores, send you
            notifications when you are near, and allow you to share list of
            items with friends and family. the list. This app was developed
            using Swift and the framework is XCode.
          </p>
          <button>Show Pictures</button>
          <br />
          <img
            loading="lazy"
            src={MSLogin}
            alt="Login"
            display="inline-block"
            width="25%"
            height="auto"
          />
          <img
            loading="lazy"
            src={MSList}
            alt="Grocery List"
            display="inline-block"
            width="25%"
            height="auto"
          />
        </ul>
      </Fragment>

      <Fragment>
        <h2 className="pl-3">Job</h2>
        <ul>
          <li>
            <a href="http://www.mypediatricmd.com/" target="_blank">
              <b>MyPediatricMD</b>
            </a>
            <b> | Website</b>
          </li>
          <p>
            This site is for MD Pediatric Center. It will allow you to make
            appointments, learn about the doctors, and get information on what a
            pediatric. This was developed using HTML, CSS, and JavaScript.
          </p>
          <button>Show Pictures</button>
          <br />
          <br />

          <img
            loading="lazy"
            src={MDHome}
            alt="Home"
            display="inline-block"
            width="25%"
            height="auto"
          />
          <img
            loading="lazy"
            src={MDApp}
            alt="Appointment"
            display="inline-block"
            width="25%"
            height="auto"
          />
          <li>
            <a target="_blank">
              <b>Curbside Pickup</b>
            </a>
            <b> | Phone App</b>
          </li>
          <p>
            This app is for Follett. It allows you to order items from a store
            and have someone bring it out to your car when you arrive at the
            location. This app was developed in react using html, JavaScript,
            and used Redux. Theme of the project was already thought out and had
            picturs to work from. For designing we used bootstrap and a little
            CSS.
          </p>
          <button>Show Pictures</button>
          <br />
          <br />
          <ul style={{ listStyle: "none" }}>
            <li>
              <img
                loading="lazy"
                src="../../assets/MyPediatricMD/Home.JPG"
                alt="Login"
                width="500"
                height="300"
              />
            </li>
            <li>
              <img
                loading="lazy"
                src="../../assets/MyPediatricMD/RequestAppointment.JPG"
                alt="Login"
                width="500"
                height="300"
              />
            </li>
          </ul>
        </ul>
      </Fragment>
    </Fragment>
  );
};

export default Projects;
