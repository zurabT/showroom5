import { Link } from "react-router-dom";
import logo from "../pictures/IMG-LOGO.jpg";

function Footer() {
  return (
    <div className="footer">
      <Link to="/" className="footer-logo-link">
        <img className="footer-logo" src={logo} width="130" height="130" />
      </Link>
      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul className="footer-list">
          <li className="footer-item">
            {/* <a href="#" className="footer-link">
              Home
            </a> */}
            <Link to="/" className="footer-link">
              {" "}
              Home
            </Link>
          </li>
          <li className="footer-item">
            {/* <a href="#" className="footer-link">
              Gallery
            </a> */}
            <Link to="/gallery" className="footer-link">
              {" "}
              Gallery
            </Link>
          </li>
          <li className="footer-item">
            {/* <a href="#" className="footer-link">
              About
            </a> */}
            <Link to="/about" className="footer-link">
              {" "}
              About
            </Link>
          </li>
          <li className="footer-item">
            {/* <a href="#" className="footer-link">
              Contact
            </a> */}
            <Link to="/contact" className="footer-link">
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-info">
        <h3>Contact Us</h3>
        <ul className="footer-list">
          <li className="footer-item">Mail: gg.expo@yahoo.com</li>
          <li className="footer-item">Phone: +40733871580</li>
          {/* <li className="footer-item">address: address</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
