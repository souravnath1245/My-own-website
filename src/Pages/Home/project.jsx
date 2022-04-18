import React from 'react';
import "./Home.css";
import project1 from "../../images/porjects/portfolio-01.jpg";
import project2 from "../../images/porjects/portfolio-02.jpg";
import project3 from "../../images/porjects/portfolio-03.jpg";
import project4 from "../../images/porjects/portfolio-04.jpg";
import project5 from "../../images/porjects/portfolio-05.jpg";
import project6 from "../../images/porjects/portfolio-06.jpg";


const Project = () => {
    return ( 
        <section className="secContainer allSection">
       <header className="block__header">

      <h2>My Portfolio</h2>
      <p >
        visit my Portfolio and keep your feedback
      </p>
       </header>
      <div className="myPortfolio">
        <div className="myProject">
          <div className="projectImage">
            <img src={project6} alt="My first project" />
          </div>
          <div className="projectContent">
            <div className="projectName">
              <div className="projectShortName ">
                <span className="sectionTitle">Development</span>
                <span className="projectLiked">Like</span>
              </div>
              <h4 className="projectTitle">The services provide for design</h4>
            </div>
          </div>
        </div>
        <div className="myProject">
          <div className="projectImage">
            <img src={project2} alt="My first project" />
          </div>
          <div className="projectContent">
            <div className="projectName">
              <div className="projectShortName ">
                <span className="sectionTitle">Development</span>
                <span className="projectLiked">Like</span>
              </div>
              <h4 className="projectTitle">The services provide for design</h4>
            </div>
          </div>
        </div>
        <div className="myProject">
          <div className="projectImage">
            <img src={project3} alt="My first project" />
          </div>
          <div className="projectContent">
            <div className="projectName">
              <div className="projectShortName ">
                <span className="sectionTitle">Development</span>
                <span className="projectLiked">Like</span>
              </div>
              <h4 className="projectTitle">The services provide for design</h4>
            </div>
          </div>
        </div>
        <div className="myProject">
          <div className="projectImage">
            <img src={project4} alt="My first project" />
          </div>
          <div className="projectContent">
            <div className="projectName">
              <div className="projectShortName ">
                <span className="sectionTitle">Development</span>
                <span className="projectLiked">Like</span>
              </div>
              <h4 className="projectTitle">The services provide for design</h4>
            </div>
          </div>
        </div>
        <div className="myProject">
          <div className="projectImage">
            <img src={project5} alt="My first project" />
          </div>
          <div className="projectContent">
            <div className="projectName">
              <div className="projectShortName ">
                <span className="sectionTitle">Development</span>
                <span className="projectLiked">Like</span>
              </div>
              <h4 className="projectTitle">The services provide for design</h4>
            </div>
          </div>
        </div>
        <div className="myProject">
          <div className="projectImage">
            <img src={project1} alt="My first project" />
          </div>
          <div className="projectContent">
            <div className="projectName">
              <div className="projectShortName ">
                <span className="sectionTitle">Development</span>
                <span className="projectLiked">Like</span>
              </div>
              <h4 className="projectTitle">The services provide for design</h4>
            </div>
          </div>
        </div>
      </div>
   </section>
     );
}
 
export default Project;