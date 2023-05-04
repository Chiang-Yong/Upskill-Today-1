import React from 'react'
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";


const Pathways = () => {
    const settings = {
       // className: "slider variable-width center",
        //variableWidth: true,
       // centerMode: true,
        dots: true,
        infinite: true,
      //  centerPadding: "60px",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
  
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            }
          }
        ]
  
      }
  return (
    <Slider {...settings} style={{width:"75%",margin:"auto"}}>
    
    <div ><h1 style={{border:"solid", justifyContent:"center"}} className="justify-content-center text-center mx-auto w-50">Pathways</h1></div>
    <div ><h1 style={{border:"solid", justifyContent:"center"}} className="justify-content-center text-center w-50">Pathways</h1></div>
    <div ><h1 style={{border:"solid", justifyContent:"center"}} className="justify-content-center text-center w-50">Pathways</h1></div>
    <div ><h1 style={{border:"solid", justifyContent:"center"}} className="justify-content-center text-center w-50">Pathways</h1></div>
    <div style={{border:"solid", justifyContent:"center"}} className="text-center"><h1>Pathways</h1></div>
    <div style={{border:"solid", justifyContent:"center"}} className="text-center"><h1>Pathways</h1></div>
    <div style={{border:"solid", justifyContent:"center"}} className="text-center"><h1>Pathways</h1></div>
    <div style={{border:"solid", justifyContent:"center"}} className="text-center"><h1>Pathways</h1></div>
    <div style={{border:"solid", justifyContent:"center"}} className="text-center"><h1>Pathways</h1></div>
    </Slider>
  )
}

export default Pathways