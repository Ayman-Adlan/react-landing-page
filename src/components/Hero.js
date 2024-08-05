import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Service</h1>
        <p>We provide amazing solutions to make your life easier.</p>
        <a href="#about" className="hero-button">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
