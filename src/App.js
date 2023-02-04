
import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './routes/Home';
import About from "./routes/About"
import Navbar from './components/Navbar';
import Service from "./routes/Service"
import Contact from "./routes/Contact"

export default function App() {
  return (
    <>
    <Navbar/>
  
    <Router>
   
        
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />

        </Routes>
    
    </Router>
    </>
  );

}




