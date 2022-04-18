import React from "react";
import "./Resume.css";
import { Link, Outlet } from "react-router-dom";

const Resume = () => {
  return (
    <div className="container">
      <div className="page--header py-9 text-center border-2 rounded-lg shadow-lg shadow-black-500/20">
        <h1 className="text-7xl font-extrabold py-2"> Resume</h1>
        <h3
          className="text-4xl pb-2"
          style={{ color: "var( --color-secondary)" }}
        >
          Combination of Skill & Experience
        </h3>
      </div>

      <div className="section--nevigation my-9">
        <nav className="main-nav">
          <ul className="">
            <li>
              <Link className="link" to="education">
                Education
              </Link>
            </li>
            <li>
              <Link className="link" to="">
                Professional Skills
              </Link>
            </li>
            <li>
              <Link className="link" to="experience">
                Experience
              </Link>
            </li>
            <li>
              <Link className="link" to="iterview">
                Interview
              </Link>
            </li>
          </ul>

          <Outlet />
        </nav>
      </div>
    </div>
  );
};

export default Resume;
