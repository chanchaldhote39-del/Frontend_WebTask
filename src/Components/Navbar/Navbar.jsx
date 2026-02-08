import "./Navbar.css";
import company_logo from "../../assets/Images/company_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
          <div className="logo">
              <img src={company_logo} />
          </div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Courses</li>
            <li>About Us</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>

          <button className="signup-btn">Signup</button>
    </nav>
  );
};

export default Navbar;
