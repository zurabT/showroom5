import Navbar from "./navbar";
import Slider from "./Slider";
import himg from "../pictures/Mask Group.jpg";
import Services from "./Services";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "./Spinner";
import HeaderSpinner from "./HeaderSpinner";

function Header() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

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

          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "white" }}
            className="header-link"
          >
            <div className="header-linka">Contact</div>
          </Link>
        </div>

        <div onLoad={handleLoad} className="header-img">
          <img src={himg} height="350" />
          <div
            style={{ opacity: isLoading ? 0 : 1 }}
            className="header-img-border"
          ></div>

          {isLoading && <HeaderSpinner />}
        </div>
      </div>
      <Services />
      <Slider />
    </div>
  );
}

export default Header;
