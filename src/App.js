import Header from "./components/Header";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* <Route path="*" element={<Navigate to="/gallery" />} /> */}
        </Routes>
        <Footer />
        <button
          onClick={handleScrollToTop}
          className={scrollY > 200 ? "up-btn active" : "up-btn"}
        >
          &uarr;{" "}
        </button>
      </div>
    </Router>
  );
}

export default App;
