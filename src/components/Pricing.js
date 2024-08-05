import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <h2>Pricing</h2>
      <div className="pricing-plan-container">
        <div className="pricing-plan">
          <h3>Basic</h3>
          <p className="price">$10/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="pricing-plan featured-plan">
          <h3>Premium</h3>
          <p className="price">$20/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>Choose Plan</button>
        </div>
        <div className="pricing-plan">
          <h3>Enterprise</h3>
          <p className="price">$50/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button>Choose Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
