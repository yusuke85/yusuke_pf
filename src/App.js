import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Links from './Component/Links';
import LandingPage from "./Component/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Works from './Component/Works';
import About from './Component/About';
import Contact from "./Component/Contact"

function App() {
  return (
    <div>
    <Router>
      <div className="App">
        <Links />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/Works" element={<Works />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>

    </div>
      
  );
}

export default App;


















