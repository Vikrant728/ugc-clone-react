import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Simpleslider from './Simpleslider';
import News from './News';
import Esite from './Esite'
import Performer from './Performer';
import Notice from './Notice'
import Socialmedia from './Socialmedia';
import Dig from './Dig';
import Footer from './Footer';


function App() {
  return (
    <div>
  <Navbar/>
  <Navbar2/>
  <Simpleslider/>
  <News/>
 <Esite/>
 <Performer/>
 <Notice/>
 <Socialmedia/>
 <Dig/>
 <Footer/>
  </div>
  )
}

export default App