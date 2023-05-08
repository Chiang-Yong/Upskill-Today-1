import React from "react";
import { useEffect, useState } from "react";
import uparrow from "../images/up-arrow.svg";

function BackTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-top-button">
      {backToTopButton && (
        <img
          src={uparrow}
          alt="up-top"
          onClick={scrollUp}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "15px",
            height: "50px",
            width: "50px",
            cursor: "pointer",
          }}
        />
      )}
    </div>
  );
}
export default BackTopButton;
