import React from "react";
import "./Employee.css";
import employeeImg from "../../assets/Images/employee.png"; // change path if needed
import { FaCheckCircle } from "react-icons/fa";

const Employee = () => {
  return (
    <section className="employee-section">
      <div className="employee-container">

        {/* LEFT IMAGE */}
        <div className="employee-image">
          <img src={employeeImg} alt="Employee Platform" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="employee-content">
          <h2>
            Platform <span>Features</span> That <br />
            Empower Your Learning
          </h2>

          <ul>
            <li>
              <FaCheckCircle /> Live learning and interactive tools
            </li>
            <li>
              <FaCheckCircle /> Mobile-friendly access
            </li>
            <li>
              <FaCheckCircle /> On-demand content
            </li>
            <li>
              <FaCheckCircle /> Personalized learning paths
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Employee;
