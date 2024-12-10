import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar"; // Navbar appears globally
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Internships from "../pages/Internships";
import MyProfile from "../pages/MyProfile";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;