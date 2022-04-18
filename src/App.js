import React from 'react';
import './App.css';
import Header from './Shared/Header';
import {  Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';
import Service from './Pages/Service/Service';
import Blogs from './Pages/Blogs/Blogs';
import "./tablet.css"
import Login from './Login/Login';
import Portfolio from './Pages/Portfolio/Portfolio';
import All from './components/portfolioDetails/All';
import Youtube from './components/portfolioDetails/youtube';
import Photography from './components/portfolioDetails/photography';
import Resume from './Pages/Resume/Resume';
import Education from './Pages/Resume/Education';
import Skill from './Pages/Resume/Skill';
import Experience from './Pages/Resume/Experience';

function App() {
  return (
    <div className="App">
    <Header />
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service /> } />
        <Route path="/portfolio" element={<Portfolio /> } >
          <Route index element={<All/>}/>
          <Route path='youtube' element={<Youtube/>}/>
          <Route path='photography' element={<Photography/>}/>
          </Route>
        <Route path="/resume" element={<Resume /> } >
          <Route index element={<Skill/>}/>
          <Route path='education' element={<Education/>}/>
          <Route path='experience' element={<Experience/>}/>
          </Route>
        
        <Route path="/blogs" element={<Blogs /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/login" element={<Login /> } />
        <Route path="*" element={<NotFound />} />
       

      </Routes>
    
    </div>
  );
}

export default App;
