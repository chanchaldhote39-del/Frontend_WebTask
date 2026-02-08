import React from "react";
import "./Hero.css";
import hero_img from "../../assets/Images/hero_img.png";
import circle from "../../assets/Images/quote-circle.svg";


const Hero = () => {
  return (
    <section className="hero">
      {/* Decorative Circles */}
      <div className="hero-circles"></div>

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1>
            Achieve Success <br />
            with <span>India’s No.1</span> <br />
            Online Exam Institute
          </h1>

          <p className="hero-desc">
            Join thousands of successful students who have cracked their
            entrance exams with our expert-led online courses.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">Explore Courses</button>
            <button className="btn secondary">Start Learning for Free</button>
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="hero-testimonial">
          <div className="quote-line-wrap">
            <img src={circle} alt="quote" />
            <div className="line"></div>
          </div>

          <div className="quote-text">
            <h4>Dadashaheb Sondge</h4>
            <p>
              Led by CEO Dadashaheb Sondge, IFAS Publications delivers quality
              educational materials, empowering students and educators to shape
              future leaders through innovation.
            </p>
            <div className="stars">★★★★★</div>
          </div>
        </div>

      </div>

      {/* IMAGE */}
      <div className="hero-image">
        <img src={hero_img} alt="Student using laptop" />
      </div>
    </section>
  );
};

export default Hero;
