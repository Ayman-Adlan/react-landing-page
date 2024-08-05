import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="social-media">
        <a href="#facebook">Facebook</a>
        <a href="#twitter">Twitter</a>
        <a href="#instagram">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
