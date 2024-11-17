import logo from "../pictures/IMG-LOGO.jpg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";
import { useEffect, useState } from "react";

function Navbar({ active, setActive }) {
  useEffect(() => {
    const savedActive = localStorage.getItem("activeLink");
    if (savedActive) {
      setActive(savedActive);
    }
  }, []);

  // Save active link to localStorage whenever it changes

  // const [active, setActive] = useState(null);
  const handleActiveLink = (link) => {
    setActive(link);
    localStorage.setItem("activeLink", link);
  };
  const navigate = useNavigate();

  const handleLogoClick = (link) => {
    navigate("/"); // Navigate to home page
    setActive("home");
    localStorage.setItem("activeLink", "home");
  };
  return (
    <div className="navbar">
      {/* <Link to="/" className="navbar-logo-link"> */}
      <img
        onClick={handleLogoClick}
        className="navbar-logo"
        src={logo}
        width="130"
        height="130"
      />
      {/* </Link> */}

      <ul className="navbar-items">
        <li className="navbar-item">
          {/* <a className="navbar-link" href="#">
            Home
          </a> */}
          <Link
            to="/"
            className={active === "home" ? "navbar-link-active" : "navbar-link"}
            onClick={() => handleActiveLink("home")}
          >
            {" "}
            Home
          </Link>
        </li>
        <li className="navbar-item">
          {/* <a className="navbar-link" href="#">
              Gallery
            </a> */}
          <Link
            to="/gallery"
            className={
              active === "gallery" ? "navbar-link-active" : "navbar-link"
            }
            onClick={() => handleActiveLink("gallery")}
          >
            {" "}
            Gallery
          </Link>
        </li>
        <li className="navbar-item">
          {/* <a className="navbar-link" href="#">
            About
          </a> */}
          <Link
            to="/about"
            className={
              active === "about" ? "navbar-link-active" : "navbar-link"
            }
            onClick={() => handleActiveLink("about")}
          >
            {" "}
            About
          </Link>
        </li>
        <li className="navbar-item">
          {/* <a className="navbar-link" href="#">
            Contact
          </a> */}
          <Link
            to="/contact"
            className={
              active === "contact" ? "navbar-link-active" : "navbar-link"
            }
            onClick={() => handleActiveLink("contact")}
          >
            {" "}
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
