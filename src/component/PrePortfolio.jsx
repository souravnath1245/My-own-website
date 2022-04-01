import React from 'react';
import "./preportfolio.css";
import img1 from "../images/portfolio/img1.jpg"
import img2 from "../images/portfolio/img2.jpg"
import img3 from "../images/portfolio/img3.jpg"
import img4 from "../images/portfolio/img4.jpg"
import img5 from "../images/portfolio/img5.jpg"
import img6 from "../images/portfolio/img6.jpg"
import img7 from "../images/portfolio/img7.jpg"
import img8 from "../images/portfolio/img8.jpg"
import img9 from "../images/portfolio/img9.jpg"


const PrePortfolio = () => {
    return ( 
        <div className='portfolioSection'>
           <img className='img1' src={img1} alt="" />
           <img className="img2"src={img2} alt="" />
           <img className="img3"src={img3} alt="" />
           <img className="img4"src={img4} alt="" />
           <img className="img5"src={img5} alt="" />
           <img className="img6"src={img6} alt="" />
           <img className="img7"src={img7} alt="" />
           <img className="img8"src={img8} alt="" />
           <img className="img9"src={img9} alt="" />
        </div>
     );
}
 
export default PrePortfolio;