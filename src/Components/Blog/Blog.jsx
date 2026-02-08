import React from "react";
import "./Blog.css";
import { blogData } from "./blogData";


const Blog = () => {
  return (
    <section className="blog-outer">
      <div className="blog-inner">

        <h2 className="blog-title">
          Latest <span>Blogs</span>
        </h2>

        <p className="blog-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          <br />
          do eiusmod temporidunt ut labore veniam..
        </p>

        {/* BLOG CARDS */}
        <div className="blog-grid">
          {blogData.map((item) => (
            <div className="blog-card" key={item.id}>
              <img src={item.image} alt={item.title} className="blog-img" />

              <div className="blog-content">
                <div className="blog-meta">
                  <span>{item.author}</span>
                  <span>{item.time}</span>
                </div>

                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* NEWSLETTER */}
        <div className="newsletter-box">
          <div className="newsletter-content">
            <h3>Subscribe to our newsletter</h3>
            <p>
              Subscribe today to unlock a wealth of knowledge, delivered right to your email, and stay ahead of the curve with ease.
            </p>

            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;
