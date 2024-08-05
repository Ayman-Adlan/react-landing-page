import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label>
            Name:
            <input type="text" name="name" placeholder="Your Name" required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Message:
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
