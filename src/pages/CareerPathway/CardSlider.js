import React from "react";
//import { useRef, useEffect } from 'react';
//import { register } from 'swiper/element/bundle';

import JavaIcon from "../../images/Java.png";
import JavaScriptIcon from "../../images/Javascript.png";
import DevOpsIcon from "../../images/devops.png";
import Pega from "../../images/pega.png";
import BusinessAnalyst from "../../images/business-analyst.png";
import DataAnalyst from "../../images/data-analytics.png";
import SiteCore from "../../images/sitecore.png";
import "./cardslider.css";

import Swiper, { Navigation, Pagination } from "swiper";
//import "swiper/swiper-bundle.min.css";
//import "swiper/swiper.min.css";
// core version + navigation, pagination modules:
// import {Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// SwiperCore.use([EffectCoverflow, Pagination]);

const CardSlider = () => {
  const swiper = new Swiper(".mySwiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    loopFillGroupWithBlank: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      position: "relative",
      marginTop: 20,
    },

    // And if we need scrollbar
    //  scrollbar: {
    //    el: '.swiper-scrollbar',
    //  },

    modules: [Navigation, Pagination],
  });

  return (
    <section>
      <div className="cs-container">
        <div className="cs-content">
          <div className="cs-card swiper-slide">
            <div className="cs-card-content">
              <div className="cs-image">
                <img src={JavaIcon} alt="Java Icon" />
              </div>
              <div className="cs-program-name">
                <span className="cs-program">Java</span>
                <span className="cs-name"></span>
              </div>
              <div className="cs-button">
                <button className="findOut">Find Out More</button>
              </div>
            </div>
          </div>

          <div className="cs-card swiper-slide">
            <div className="cs-card-content">
              <div className="cs-image">
                <img src={JavaScriptIcon} alt="Java Icon" />
              </div>
              <div className="cs-program-name">
                <span className="cs-program">JavaScript</span>
                <span className="cs-name"></span>
              </div>
              <div className="cs-button">
                <button className="findOut">Find Out More</button>
              </div>
            </div>
          </div>

          <div className="cs-card swiper-slide">
            <div className="cs-card-content">
              <div className="cs-image">
                <img src={DevOpsIcon} alt="DevOps Icon" />
              </div>
              <div className="cs-program-name">
                <span className="cs-program">DevOps</span>
                <span className="cs-name"></span>
              </div>
              <div className="cs-button">
                <button className="findOut">Find Out More</button>
              </div>
            </div>
          </div>

          <div className="cs-card swiper-slide">
            <div className="cs-card-content">
              <div className="cs-image">
                <img src={Pega} alt="Pega Icon" />
              </div>
              <div className="cs-program-name">
                <span className="cs-program">Pega</span>
                <span className="cs-name"></span>
              </div>
              <div className="cs-button">
                <button className="findOut">Find Out More</button>
              </div>
            </div>
          </div>

          <div className="cs-card swiper-slide">
            <div className="cs-card-content">
              <div className="cs-image">
                <img src={BusinessAnalyst} alt="Business Analyst Icon" />
              </div>
              <div className="cs-program-name">
                <span className="cs-program">Business</span>
                <span className="cs-program">Analyst</span>
              </div>
              <div className="cs-button">
                <button className="findOut">Find Out More</button>
              </div>
            </div>
          </div>

          <div className="cs-card swiper-slide">
            <div className="cs-card-content">
              <div className="cs-image">
                <img src={BusinessAnalyst} alt="JBusiness Analyst Icon" />
              </div>
              <div className="cs-program-name">
                <span className="cs-program">Business</span>
                <span className="cs-program">Analyst</span>
              </div>
              <div className="cs-button">
                <button className="findOut">Find Out More</button>
              </div>
            </div>
          </div>

          <div className="cs-card swiper-slide">
            <div className="cs-card-content">
              <div className="cs-image">
                <img src={DataAnalyst} alt="Data Analyst Icon" />
              </div>
              <div className="cs-program-name">
                <span className="cs-program">Data</span>
                <span className="cs-program">Analyst</span>
              </div>
              <div className="cs-button">
                <button className="findOut">Find Out More</button>
              </div>
            </div>
          </div>

          <div className="cs-card swiper-slide">
            <div className="cs-card-content">
              <div className="cs-image">
                <img src={SiteCore} alt="SiteCore Icon" />
              </div>
              <div className="cs-program-name">
                <span className="cs-program">SiteCore</span>
                <span className="cs-program">Program</span>
              </div>
              <div className="cs-button">
                <button className="findOut">Find Out More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-scrollbar"></div>
      </div>
    </section>
  );
};

export default CardSlider;
