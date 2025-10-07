import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="container">
      <div className="logo">Travel</div>

      
      <div className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/destinations">Destinations</a>
        <a href="/contact">Contact</a>
      </div>

      
      <div className="burger-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      
      <div className={`nav mobile-nav ${menuOpen ? "open" : ""}`}>
        <a href="/" onClick={toggleMenu}>Home</a>
        <a href="/about" onClick={toggleMenu}>About</a>
        <a href="/destinations" onClick={toggleMenu}>Destinations</a>
        <a href="/contact" onClick={toggleMenu}>Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
