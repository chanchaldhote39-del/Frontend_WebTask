import React from "react";
import "./Courses.css";
import { coursesData } from "./CoursesData";

const Courses = () => {
  return (
    <section className="courses">
      <div className="courses-ellipse" />

      <h2 className="courses-title">
        Why <span>learn</span> with our courses?
      </h2>

      <p className="courses-subtitle">
        Join millions of learners and experience top-notch education
        <br />
        with expert instructors and real-time learning.
      </p>

      <div className="courses-grid">
        {coursesData.map(({ id, count, title, description, image }) => (
          <div className="course-card" key={id}>
            <img src={image} alt={title} />
            <h3>{count}</h3>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
