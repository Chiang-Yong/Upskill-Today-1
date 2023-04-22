import React from "react";
import { Link } from "react-router-dom";
const Policy = "https://www.upskilltoday.com/privacypolicy"
const Term = "https://www.upskilltoday.com/termsandconditions"

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-lg-start text-white "
        style={{ backgroundColor: "#2d2d2d" }}
      >
        <section className="company-info border-bottom ">
          <div className="container text-center text-md-start pt-4">
            <div className="row mt-3 g-2 justify-content-between">
              <div className="col-md-3 col-lg-4 col-xl-3  mb-4">
                <h6
                  className="text-uppercase mb-4 fw-bold"
                  //   style={{ fontWeight: "700", }}
                >
                  Upskill Today
                </h6>

                <a
                  href={Policy}
                  className="pe-1 text-nowrap text-white hover-effect"
                  target='_blank' 
                  rel='noreferrer'
                  hover
                  
                  style={{
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                  <span className="hover-effect">Privacy Policy</span>
                </a>
                <span>
                  {"  "}|{"  "}
                </span>
                <a
                  href={Term}
                  className="ps-1 text-nowrap text-white hover-effect"
                  target='_blank' 
                  rel='noreferrer'
                  hover
                 
                  style={{
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                >
                 <span className="hover-effect"> Terms & Conditions </span>
                </a>

                <div className="pt-3 justify-content-evenly align-items-center">
                  <a
                    href="https://www.facebook.com/helloupskilltoday"
                    className=" btn btn-floating text-white"
                    target='_blank' 
                    rel='noreferrer'
                    hover
                  >
                    <i
                      className="bi bi-facebook hover-effect"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/company/upskilltoday"
                    className="btn btn-floating text-white"
                    target='_blank' 
                    rel='noreferrer'
                    hover
                  >
                    <i
                      className="bi bi-linkedin hover-effect"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCEN2ltg-7TQTE1zRDWBzAOw"
                    className=" btn btn-floating text-white"
                    target='_blank' 
                    rel='noreferrer'
                    hover
                  >
                    <i
                      className="bi bi-youtube hover-effect"
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </a>
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2  mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Quick links</h6>
                <p className="hover-effect">
                  <Link
                    className="text-white"
                    style={{ textDecoration: "none", fontWeight: "500" }}
                    to="/Home"
                  >
                    <span className="hover-effect">Home</span>
                  </Link>
                </p>
                <p>
                  <Link
                    className="text-white"
                    style={{ textDecoration: "none", fontWeight: "500" }}
                    to="/About"
                  >
                    <span className="hover-effect">About</span>
                  </Link>
                </p>

                <p>
                  <Link
                    className="text-white"
                    style={{ textDecoration: "none", fontWeight: "500" }}
                    to="/CareerPathway"
                  >
                    <span className='hover-effect'>Career Pathways</span>
                  </Link>
                </p>
                <p>
                  <Link
                    className="text-white"
                    style={{ textDecoration: "none", fontWeight: "500" }}
                    to="/Corporate"
                  >
                    <span className="hover-effect">Corporate</span>
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3  mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p style={{ fontWeight: "500" }}>
                  <i className="bi bi-house-fill me-2"></i>2 Venture Drive
                  #10-18, Vision Exchange, Singapore 608526
                </p>
                <p style={{ fontWeight: "500" }}>
                  <i className="bi bi-envelope-fill me-2"></i>
                  hello@upskilltoday.com
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-white text-center p-4"
          style={{ backgroundColor: "#2d2d2d" }}
        >
          <span className="text-white " style={{ fontWeight: "500" }}>
            © 2023 Copyright: Upskill Today
          </span>
        </div>
      </footer>
    </>
  );
};
export default Footer;
