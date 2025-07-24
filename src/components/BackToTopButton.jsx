import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show button when scrolled down more than 300px
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a 
      href="#" 
      className="btn btn-primary border-3 border-primary rounded-circle back-to-top"
      onClick={handleBackToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <FaArrowUp />
    </a>
  );
};

export default BackToTopButton;