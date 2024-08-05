import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Welcome to My Landing Page</h1>
      <nav>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
