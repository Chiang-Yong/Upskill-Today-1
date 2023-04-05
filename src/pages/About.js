import React from "react";
import { Card } from "react-bootstrap";

const StyleAbout = {
  main: {
    color: "#ff7b00",
    backgroundColor: "#fff9eb",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    
  },

  cardHeader: {
    marginTop: '50px',
    backgroundColor: '',
    color: 'white',

  },

  body:{
    color: 'white',
    backgroundColor: '',
    marginTop:'50px',
  }
};

const About = () => {
  return (
        <Card className='bg-dark text-white' style={StyleAbout.main}>
          <Card.Img src='holder.js/100pxx270' alt='Card Image Placeholder'/>
          <Card.ImgOverlay>
          <Card.Title style={StyleAbout.cardHeader} className="d-flex justify-content-center"><h1>About Us</h1></Card.Title>
          <Card.Text style={StyleAbout.body} className="d-flex justify-content-center">
            'Upskill Today is an innovative and highly curated Hire, Upskill &
            Deploy Program'
          </Card.Text>
          </Card.ImgOverlay>
        </Card>
  );
};

export default About;
