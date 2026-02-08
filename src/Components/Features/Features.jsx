

import React from 'react'
import './Features.css'
import { featureData } from './featureData'

const Features = () => {
  return (
    <section className="feature-outer">
      <div className="feature-inner">

        <h2 className="feature-title">
          Featured <span>Courses</span>
        </h2>

        <p className="feature-subtitle">
          Explore Our Range of Courses for In-Depth Learning and
          <br />
          Exam Success
        </p>

        <div className="feature-grid">
          {featureData.map((item) => (
            <div className="feature-card" key={item.id}>

              <div className="feature-icon">
                <img src={item.icon} alt={item.title} />
              </div>

              <h4>{item.title}</h4>
              <p>{item.count} Courses</p>

            </div>
          ))}
        </div>

        <button className="feature-btn">View All Courses</button>

      </div>
    </section>
  )
}

export default Features
