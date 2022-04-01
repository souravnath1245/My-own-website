import React from "react";
import "./About.css";
import PersonalInformation from "./Personal/Personal";

const About = () => {
  return (
    <div>
      <div className=" about">
        <div className="about--section">
          <header className="section__header">
            <div className="header__content">
              <h1 className="header__title">About Me</h1>
              <h4>Know Me More</h4>
            </div>
          </header>
          <div className="about--myself">
            <PersonalInformation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
