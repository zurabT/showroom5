import Navbar from "./navbar";
import Slider from "./Slider";
import himg from "../pictures/Mask Group.jpg";
import Services from "./Services";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="header">
      {/* <Navbar /> */}

      <div className="header-items">
        <div className="header-title">
          <h1> We create showrooms for your business</h1>
          <p>
            With a focus on aesthetics, layout, and lighting, our expert team
            ensures each piece is highlighted to its full potential, creating an
            immersive experience for customers.
          </p>
          <div className="header-link">
            {/* <a href="#">Contact </a> */}
            <Link to="/contact"> Contact</Link>
          </div>
        </div>
        <div className="header-img">
          <img src={himg} height="350" />
          <div className="header-img-border"></div>
        </div>
      </div>
      <Services />
      <Slider />
    </div>
  );
}

export default header;
