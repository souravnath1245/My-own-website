import React from "react";
import "./Rate.css";

const Rate = () => {
  return (
    <section className="secContainer rate allSection">
      <header className="block__header">
        <h2>Starting at $10 per month</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ea?
        </p>
        <div className="input-group">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter domain name here..."
          />
          <input type="button" className="btn" value="Search -->" />
        </div>
      </header>
      <div className="card-Section">
   
        <div className="card">
          <div className="card--header">
            <h3 className="plan--name">Entry</h3>
           
              <span className="plan--price">$14</span>
              <span className="monthBadge">/month</span> 
              <span className="badge ">10% OFF</span>
            
            <span className="plan-description">Easy start on the cloud</span>
          </div>
          <div className="card--body">
            <ul className="list list--tick">
              <li className="list--item">Unlimited Websites</li>
              <li className="list--item">Unlimited Bandwidth</li>
              <li className="list--item">100 GB SSD Sotrage</li>
              <li className="list--item">3 GB RAM</li>
            </ul>
          <button className="buy-button">Buy Now</button>
          </div>
        </div>
        <div className="card plan--popular">
          <div  className="card--header card__popular">
            <h3 className="plan--name">Entry</h3>
           
              <span className="plan--price">$14</span>
              <span className="monthBadge">/month</span> 
              <span className="badge ">10% OFF</span>
            
            <span className="plan-description">Easy start on the cloud</span>
          </div>
          <div className="card--body">
            <ul className="list list--tick">
              <li className="list--item">Unlimited Websites</li>
              <li className="list--item">Unlimited Bandwidth</li>
              <li className="list--item">100 GB SSD Sotrage</li>
              <li className="list--item">3 GB RAM</li>
            </ul>
          <button className="buy-button">Buy Now</button>
          </div>
        </div>
        <div className="card">
          <div className="card--header">
            <h3 className="plan--name">Entry</h3>
           
              <span className="plan--price">$14</span>
              <span className="monthBadge">/month</span> 
              <span className="badge ">10% OFF</span>
            
            <span className="plan-description">Easy start on the cloud</span>
          </div>
          <div className="card--body">
            <ul className="list list--tick">
              <li className="list--item">Unlimited Websites</li>
              <li className="list--item">Unlimited Bandwidth</li>
              <li className="list--item">100 GB SSD Sotrage</li>
              <li className="list--item">3 GB RAM</li>
            </ul>
          <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rate;
