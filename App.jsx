import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./../components/ui/Navbar";
import Home from "./../components/ui/Home";
import About from "./../components/ui/About";
import Contact from "./../components/ui/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
