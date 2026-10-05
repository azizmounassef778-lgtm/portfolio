import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo">
          Aziz<span>.</span>
        </a>

        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="navbar-button">
          Let's Talk
        </a>

      </div>
    </nav>
  );
}

export default Navbar;