// Navbar.jsx
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header-box">
      <div className="container">
        <div className="user-logo">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            BishnuDev Mahato
          </NavLink>
        </div>
        <nav>
          <ul className="header-topic">
            <li className="header-link">
              <NavLink to="/work" className={({ isActive }) => (isActive ? "active" : "")}>
                Work
              </NavLink>
            </li>
            <li className="header-link">
              <NavLink to="/certifications" className={({ isActive }) => (isActive ? "active" : "")}>
                Certifications
              </NavLink>
            </li>
            <li className="header-link">
              <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
                Projects
              </NavLink>
            </li>
            <li className="header-link">
              <NavLink to="/resume" className={({ isActive }) => (isActive ? "active" : "")}>
                Resume
              </NavLink>
            </li>
            <li className="header-link">
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
