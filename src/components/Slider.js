import img1 from "../pictures/IMG-1.jpg";
import img2 from "../pictures/IMG-2.jpg";
import img3 from "../pictures/IMG-3.jpg";
import img4 from "../pictures/IMG-4.jpg";
import img5 from "../pictures/IMG-5.jpg";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Slideshow({ active, setActive }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
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

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    // Add event listener to track window resizing
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = isMobile
    ? {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
      }
    : {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
      };

  return (
    <div className="slider-container">
      <div className="slider-container-link">
        {/* <a href="#">Go to gallery</a> */}
        <Link to="/gallery" onClick={() => handleActiveLink("gallery")}>
          Our projects
        </Link>
      </div>

      <Slider {...settings}>
        <div className="slide">
          <img src={img1} alt="img-1" width="200" height="150" />
        </div>
        <div className="slide">
          <img src={img2} alt="img-2" width="200" height="150" />
        </div>
        <div className="slide">
          <img src={img3} alt="img-3" width="200" height="150" />
        </div>
        <div className="slide">
          <img src={img4} alt="img-4" width="200" height="150" />
        </div>
        <div className="slide">
          <img src={img5} alt="img-5" width="200" height="150" />
        </div>
        <div className="slide">
          <img src={img1} alt="img-1" width="200" height="150" />
        </div>
        <div className="slide">
          <img src={img2} alt="img-2" width="200" height="150" />
        </div>
        <div className="slide">
          <img src={img3} alt="img-3" width="200" height="150" />
        </div>
        <div className="slide">
          <img src={img4} alt="img-4" width="200" height="150" />
        </div>
      </Slider>
    </div>
  );

  // return (
  //   <div className="img-container">
  //     <p>Gallery...</p>
  //     <div className="slider">
  //       <img src={img1} alt="img-1" width="200" height="150" />
  //       <img src={img2} alt="img-2" width="200" height="150" />
  //       <img src={img3} alt="img-3" width="200" height="150" />
  //       <img src={img4} alt="img-4" width="200" height="150" />
  //       <img src={img5} alt="img-5" width="200" height="150" />

  //       <img src={img1} alt="img-1" width="200" height="150" />
  //       <img src={img2} alt="img-2" width="200" height="150" />
  //       <img src={img3} alt="img-3" width="200" height="150" />
  //       <img src={img4} alt="img-4" width="200" height="150" />
  //       <img src={img5} alt="img-5" width="200" height="150" />
  //     </div>
  //   </div>
  // );
}

export default Slideshow;
