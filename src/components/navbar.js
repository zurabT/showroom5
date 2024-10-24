import logo from "../pictures/IMG-LOGO.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar-logo" src={logo} width="130" height="130" />

      <ul className="navbar-items">
        <li className="navbar-item">
          {/* <a className="navbar-link" href="#">
            Home
          </a> */}
          <Link to="/" className="navbar-link">
            {" "}
            Home
          </Link>
        </li>
        <li className="navbar-item">
          {/* <a className="navbar-link" href="#">
              Gallery
            </a> */}
          <Link to="/gallery" className="navbar-link">
            {" "}
            Gallery
          </Link>
        </li>
        <li className="navbar-item">
          {/* <a className="navbar-link" href="#">
            About
          </a> */}
          <Link to="/about" className="navbar-link">
            {" "}
            About
          </Link>
        </li>
        <li className="navbar-item">
          {/* <a className="navbar-link" href="#">
            Contact
          </a> */}
          <Link to="/contact" className="navbar-link">
            {" "}
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
