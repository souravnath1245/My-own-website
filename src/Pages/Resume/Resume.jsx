import React from "react";
import "./Resume.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
 
} from "react-router-dom";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./Skill";

const Resume = () => {
  return (
    <div className="myContainer">
      <span className="sectionTitle">2+ Years of Experience</span>
      <h1 className="sectionHeader">My Resume</h1>

      <div className="navigation">
        <Router>
          <div className="main-nav">
            <ul className="d-flex justify-content-space-around align-itmes-center">
              <li>
                
                <Link className="link" to="/education">Education</Link>
              </li>
              <li>
                <Link className="link" to="/skill">Professional Skills</Link>
              </li>
              <li>
                <Link  className="link" to="/experience">Experience</Link>
              </li>
              <li>
                <Link className="link" to="/iterview">Interview</Link>
              </li>
            </ul>

            <Routes>
                <Route path="education" element={<Education />} />
                <Route path="skill" element={<Skill />} />
                <Route path="experience" element={<Experience />} />
                {/* <Route path="interview" element={<Interview />} /> */}
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default Resume;
