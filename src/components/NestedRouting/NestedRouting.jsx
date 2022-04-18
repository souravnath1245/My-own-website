import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Routing extends Component {
  state = {};
  render() {
    return (
      <nav className="flex flex-wrap justify-evenly lg:w-2/4 m-auto  text-center text-white">
        <Link className="text-3xl font-medium  w-1/3 bg-indigo-500 shadow-lg hover:shadow-zinc-900 duration-400 py-3 rounded-md" to="youtube">Youtube</Link>
        <Link className="text-3xl font-medium w-1/3 bg-indigo-500 shadow-lg hover:shadow-zinc-900 duration-400 py-3 rounded-md" to="">All</Link>
        <Link className="text-3xl font-medium w-1/3 bg-indigo-500 shadow-lg hover:shadow-zinc-900 duration-400 py-3 rounded-md" to="photography">Photography</Link>
      </nav>
    );
  }
}

export default Routing;
