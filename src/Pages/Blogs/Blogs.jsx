import React, { Component } from "react";
import img1 from "../../images/portfolio/img1.jpg";
import img2 from "../../images/portfolio/img2.jpg";
import img3 from "../../images/portfolio/img3.jpg";
import img4 from "../../images/portfolio/img4.jpg";
import img5 from "../../images/portfolio/img5.jpg";
import img6 from "../../images/portfolio/img6.jpg";

class Blogs extends Component {
  render() {
    return (
      <div className="container">
        <div className="page--header py-9 text-center border-2 rounded-lg shadow-lg shadow-black-500/20">
          <h1 className="text-7xl font-extrabold py-2">Blogs</h1>
          <h3
            className="text-4xl pb-2"
            style={{ color: "var( --color-secondary)" }}
          >
            Latest tips, tricks & Updates
          </h3>
        </div>
        <div className="page--body my-4 flex lg:flex-row lg:flex-wrap justify-around flex-col rounded-lg shadow-lg shadow-black-500/20">
          <div className="blog--card my-4 w-11/12 lg:basis-1/4 lg:mx-2  m-auto rounded-lg py-2 hover:shadow-lg shadow-black-500/20 ease-in-out duration-500">
            <div className="card--image  m-auto rounded-lg truncate ">
              <img
                className="w-full object-cover hover:scale-125 ease-in-out duration-500"
                src={img6}
                alt=""
              />
            </div>
            <div className="card--content p-3">
              <h4 className="title text-3xl  font-bold text-red-600">
                web design
              </h4>
              <h2 className="content font-semibold lg:text-2xl ">
                How to create a website using WordPress
              </h2>
            </div>
          </div>
          <div className="blog--card my-4 w-11/12 lg:basis-1/4 lg:mx-2  m-auto rounded-lg py-2 hover:shadow-lg shadow-black-500/20 ease-in-out duration-500">
            <div className="card--image  m-auto rounded-lg truncate ">
              <img
                className="w-full object-cover hover:scale-125 ease-in-out duration-500"
                src={img3}
                alt=""
              />
            </div>
            <div className="card--content p-3">
              <h4 className="title text-3xl  font-bold text-red-600">
                web design
              </h4>
              <h2 className="content font-semibold lg:text-2xl ">
                How to create a website using WordPress
              </h2>
            </div>
          </div>
          <div className="blog--card my-4 w-11/12 lg:basis-1/4 lg:mx-2  m-auto rounded-lg py-2 hover:shadow-lg shadow-black-500/20 ease-in-out duration-500">
            <div className="card--image  m-auto rounded-lg truncate ">
              <img
                className="w-full object-cover hover:scale-125 ease-in-out duration-500"
                src={img1}
                alt=""
              />
            </div>
            <div className="card--content p-3">
              <h4 className="title text-3xl  font-bold text-red-600">
                web design
              </h4>
              <h2 className="content font-semibold lg:text-2xl ">
                How to create a website using WordPress
              </h2>
            </div>
          </div>
          <div className="blog--card my-4 w-11/12 lg:basis-1/4 lg:mx-2  m-auto rounded-lg py-2 hover:shadow-lg shadow-black-500/20 ease-in-out duration-500">
            <div className="card--image  m-auto rounded-lg truncate ">
              <img
                className="w-full object-cover hover:scale-125 ease-in-out duration-500"
                src={img4}
                alt=""
              />
            </div>
            <div className="card--content p-3">
              <h4 className="title text-3xl  font-bold text-red-600">
                web design
              </h4>
              <h2 className="content font-semibold lg:text-2xl ">
                How to create a website using WordPress
              </h2>
            </div>
          </div>
          <div className="blog--card my-4 w-11/12 lg:basis-1/4 lg:mx-2  m-auto rounded-lg py-2 hover:shadow-lg shadow-black-500/20 ease-in-out duration-500">
            <div className="card--image  m-auto rounded-lg truncate ">
              <img
                className="w-full object-cover hover:scale-125 ease-in-out duration-500"
                src={img5}
                alt=""
              />
            </div>
            <div className="card--content p-3">
              <h4 className="title text-3xl  font-bold text-red-600">
                web design
              </h4>
              <h2 className="content font-semibold lg:text-2xl ">
                How to create a website using WordPress
              </h2>
            </div>
          </div>
          <div className="blog--card my-4 w-11/12 lg:basis-1/4 lg:mx-2  m-auto rounded-lg py-2 hover:shadow-lg shadow-black-500/20 ease-in-out duration-500">
            <div className="card--image  m-auto rounded-lg truncate ">
              <img
                className="w-full object-cover hover:scale-125 ease-in-out duration-500"
                src={img2}
                alt=""
              />
            </div>
            <div className="card--content p-3">
              <h4 className="title text-3xl  font-bold text-red-600">
                web design
              </h4>
              <h2 className="content font-semibold lg:text-2xl ">
                How to create a website using WordPress
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
