import React, { useRef, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./companies.css";
import { companiesData } from "./CompaniesData";

const Companies = () => {
  const [current, setCurrent] = useState(0);
  const length = companiesData.length;
  const timeout = useRef(null);

 // console.log("Length:  %d", length);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 1000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  return (
    <div className="company-main">
      <h1 className="text-center">Come Aboard With Top Tech Companies</h1>
      {companiesData.map((slide, index) => {
        return (
          <Carousel key={index}>
            {index === current && (
              <Carousel.Item>
                <img
                  className="d-block mx-auto"
                  src={slide.image}
                  alt={slide.alt}
                  style={{
                    display: "inline-block",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    height: "150px",
                    maxWidth: "350px",
                    marginTop: "80px",
                    marginBottom: "10px",
                  }}
                />
              </Carousel.Item>
            )}
          </Carousel>
        );
      })}
    </div>
  );
};

export default Companies;
