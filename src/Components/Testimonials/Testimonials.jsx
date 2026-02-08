// Testimonials.jsx

import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "./testimonialsData";


const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>
      <p className="testimonials-subtitle">
        What our students say about us
      </p>

      <div className="testimonials-grid">
        {testimonialsData.map(({ id, name, role, image, rating, text }) => (
          <div className="testimonial-card" key={id}>
            <div className="testimonial-header">
              <img src={image} alt={name} />
              <div className="common">
                <h4>{name}</h4>
                <span>{role}</span>
              </div>
            </div>

            <p className="testimonial-text">{text}</p>

            <div className="testimonial-rating">
              {"★".repeat(rating)}
              <span className="star-color">{"☆".repeat(5 - rating)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
