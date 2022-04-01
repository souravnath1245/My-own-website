import React from "react";
import "./Banner.css";
import sourav from "../../images/person/person1.png";
import Typical from "react-typical";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="allSection ">
      <div className="banner secContainer">
        <section className="bannerContent">
          <div className="wrapper animate__animated animate__backInDown ">
            <h5>Wellcome To My World</h5>
            <h1 className="font-semibold animate__animated animate__backInDown animate__delay-.8s ">
              {" "}
              Sourav Nath{" "}
            </h1>
            <h3>
              I'm a{" "}
              <Typical
                className="unicDesign"
                loop={Infinity}
                wrapper="b"
                steps={[
                  "MERN Stake Developer",
                  1000,
                  "Web designer",
                  1000,
                  " programmer",
                  1000,
                ]}
              />
            </h3>
            <p>
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
              <br/>
            <Link className="detail__link" to="/about">
              {" "}
              More About Me <FontAwesomeIcon icon={faArrowRight} />
            </Link>
            </p>
          </div>
          <button className="btn animate__animated animate__backInLeft animate__delay-1s">
            Download Resume{" "}
            <FontAwesomeIcon className="icon" icon={faArrowRight} />
          </button>
        </section>
        <section className="sectionImage">
          <div className="bannerImage animate__animated animate__zoomInDown animate__delay-1s">
            <img src={sourav} alt="personal" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
