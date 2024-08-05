import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        <div className="testimonial">
          <p>"This service is amazing! It changed my life."</p>
          <h4>- Happy Customer</h4>
        </div>
        <div className="testimonial">
          <p>"Excellent support and great value for money."</p>
          <h4>- Satisfied User</h4>
        </div>
        <div className="testimonial">
          <p>"Top-notch quality and fantastic customer service."</p>
          <h4>- Loyal Client</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
