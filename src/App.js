import React from 'react';
import './App.css';
import Header from './Shared/Header';
import {  Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Blogs from './Pages/Blogs/Blogs';
// import Project from './Pages/Project/Project';
// import Portfolio from './Pages/portfolio/Portfolio';
import "./tablet.css"
import PrePortfolio from './component/PrePortfolio';

function App() {
  return (
    <div className="App">
    <Header />
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/prePortfolio" element={<PrePortfolio />} />
        <Route path="/service" element={<Service /> } />
        <Route path="/blogs" element={<Blogs /> } />
        <Route path="/about" element={<About /> } />
        <Route path="*" element={<NotFound />} />
       

      </Routes>
    
    </div>
  );
}

export default App;
