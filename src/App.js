import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import {Routes , Route , Navigate  } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
   <>
   <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/service" element={<Service/>}/>

     </Routes>
     <Footer/>
   </>
  );
}

export default App;
