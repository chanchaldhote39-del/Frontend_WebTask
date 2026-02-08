import React from "react";
import "./Card.css";
import { data } from "./data";

const Card = () => {
  return (
    <section className="why-outer">
      <div className="why-inner">
        <h2 className="why-title">
          Why Choose <span>IFAS</span> Online?
        </h2>
        <p className="why-subtitle">
          12,000+ unique online course list designs
        </p>

        <div className="card-grid">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon">
                <img src={item.icon} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
