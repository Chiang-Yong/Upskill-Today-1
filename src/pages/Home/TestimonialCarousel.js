import React from "react";
import "./testimonialcarousel.css";
import { Carousel, Col } from "react-bootstrap";

const myreview = { background: " linear-gradient (#f6ffab, #ff7b00)" };

const TestimonialCarousel = () => {
  return (
    <div style={myreview}>
      <Carousel variant="dark" fade className=" testimonial-home py-5">
        <Carousel.Item className="text-center">
          <img
            className="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
            alt="Avatar1"
            style={{ width: "150px" }}
          />
          <div className="d-flex justify-content-center">
            <Col lg={8}>
              <h5 className="mb-3">Maria Kate</h5>
              <p>Photographer</p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <img
            className="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
            alt="Avatar2"
            style={{ width: "150px" }}
          />
          <div className="d-flex justify-content-center">
            <Col lg={8}>
              <h5 className="mb-3">John Doe</h5>
              <p>Web Developer</p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </Col>
          </div>
        </Carousel.Item>
        <Carousel.Item className="text-center">
          <img
            className="rounded-circle shadow-1-strong mb-4"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
            alt="Avatar3"
            style={{ width: "150px" }}
          />
          <div className="d-flex justify-content-center">
            <Col lg={8}>
              <h5 className="mb-3">Anna Deynah</h5>
              <p>Web Developer</p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                quibusdam illo, beatae quia fugit consequatur laudantium velit
                magnam error. Consectetur distinctio fugit doloremque.
              </p>
            </Col>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
