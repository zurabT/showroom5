import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scroll behavior
    }); // Scroll to the top of the page
  }, [pathname]); // Run the effect when the pathname changes

  return null; // This component doesn't render anything, it only handles the scroll effect
};

export default ScrollToTop;
