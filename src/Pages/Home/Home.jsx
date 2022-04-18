import React from "react";
import "./Home.css";
import Banner from "./../Banner/Banner";
import { useState } from "react";
import Rate from "./../Rate/Rate";
import Contact from "../Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import Project from "./project";
import Resume from './../Resume/Resume';


const Home = () => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    if (theme === true) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  };
  return (
    <div>
      <header className={theme === true ? "lightTheme" : "darkTheme"}>
        <button
          onClick={toggleTheme}
          className={
            theme === true
              ? "lightTheme themeToggle darkBorder"
              : "darkTheme themeToggle lightBorder"
          }
        >
          {theme === true ? (
            <FontAwesomeIcon className="menuIcon" icon={faSun} />
          ) : (
            <FontAwesomeIcon className="menuIcon" icon={faMoon} />
          )}
        </button>
        <Banner />
      </header>
      <main className={theme === true ? "lightTheme" : "darkTheme"}>
        <Rate />
        <Project />
        <Resume/>
        
        <Contact />
        <hr style={{
          marginTop: "3rem"
        }}/>
        
      </main>
      <footer className={theme === true ? "lightTheme" : "darkTheme"}>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
