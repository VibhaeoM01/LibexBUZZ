import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="text-2xl font-bold">LOGO</div>
      <nav className="space-x-6 text-gray-600">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/about" className="hover:text-blue-500">About Us</Link>
        <Link to="/internships" className="hover:text-blue-500">Internships</Link>
        <Link to="/profile" className="hover:text-blue-500">My Profile</Link>
        <Link to="/contact" className="hover:text-blue-500">Contact</Link>
      </nav>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Join For Free</button>
    </header>
  );
};

export default Navbar;
