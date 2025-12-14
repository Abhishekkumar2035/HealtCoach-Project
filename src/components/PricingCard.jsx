import React from "react";

const PricingCard = ({ plan }) => {
  return (
    <div className="block-7">
      <div className="text-center">
        <h4 className="heading-2">{plan.name}</h4>
        <span className="excerpt d-block">{plan.description}</span>
        <span className="price">
          <sup>$</sup> <span className="number">{plan.price}</span>
        </span>

        <ul className="pricing-text mb-5">
          {plan.features.map((feature, index) => (
            <li key={index}>
              <span className="fa fa-check mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>

        <a href="#" className="btn btn-primary px-4 py-3">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
