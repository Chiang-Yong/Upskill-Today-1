import React from "react";
import { Row, Card, CardImg } from "react-bootstrap";
import JavaWeb from "../../images/Code 1-02.webp";
import SalaryTwo from "../../images/Money 1-01.webp";
import SalaryFive from "../../images/Money 1-02.webp";

const JCDstyle = {
    main:{
        backgroundColor: '#fff9eb',
    },

    h1_text:{
      fontSize: "clamp(1.8rem, 2vw, 2.8rem)",
      fontWeight: 700,
    },

    card:{
        width:'18rem',
        height: '20rem',
        backgroundColor:'#000',
    },

    card1:{
        width:'18rem',
        height: '20rem',
        backgroundColor:'#000',
    },

    card3:{
        width:'18rem',
        backgroundColor:'#fff',
        border:"solid",
        borderColor:"#ff7b00",
        borderwidth: "2px",
        borderRadius:"10px",
    },

    body:{
        marginTop:'-15%',
    },

    image:{
        objectFit: "scale-down",
              marginTop: "-15%",
    },

    title:{
        color: "white",
        justifyContent: "center",
        fontSize:"clamp(1.5em, 2vw, 1.8em)",
        fontWeight: 700,
    },

    text:{
        color: "white",
        fontSize:"clamp(1.0em, 1.1vw, 1.1em)",
        fontWeight: 600,
    },
    text1:{
        color: "black",
        fontSize:"clamp(1.0em, 1.1vw, 1.1em)",
        fontWeight: 600,
    }

}

const JavaCourseDetails = () => {
  return (
    <div style={JCDstyle.main} className="mt-5 mb-5">
        <h1 style={JCDstyle.h1_text} className='text-center mt-5 pt-5'>JAVA PROGRAM DETAILS</h1>
      <Row sx={1} md={3} className="g-4 d-flex justify-content-center my-2 py-5">
        <Card className='me-3 rounded-4' style={JCDstyle.card}>
          <CardImg
            variant="top"
            src={JavaWeb}
            className="rounded d-block"
            style={JCDstyle.image}
          ></CardImg>
          <Card.Body style={JCDstyle.body}>
            <Card.Text style={JCDstyle.text} className='text-center text-white'>
              Learn how to build amazing Java web and mobile application and get
              prepared for a software engineering job
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='me-3 rounded-4' style={JCDstyle.card1}>
          <CardImg
            variant="top"
            src={SalaryTwo}
            className="rounded d-block"
            style={JCDstyle.image}
          ></CardImg>
          <Card.Body style={JCDstyle.body}>
            <Card.Title style={JCDstyle.title} className="text-center">
                $50,327 
                <br />per year
            </Card.Title>
            <Card.Text style={JCDstyle.text} className='text-center text-white'>
              Java Developer Salary 
              <br />2+ years experience
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='me-3 rounded-4' style={JCDstyle.card}>
          <CardImg
            variant="top"
            src={SalaryFive}
            className="rounded d-block"
            style={JCDstyle.image}
          ></CardImg>
          <Card.Body style={JCDstyle.body}>
            <Card.Title style={JCDstyle.title} className="text-center">
                $83,093 
                <br />per year
            </Card.Title>
            <Card.Text style={JCDstyle.text} className='text-center text-white'>
              Java Developer Salary 
              <br />5+ years experience
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row sx={1} md={3} className="g-4 justify-content-center d-flex">
        <Card className='me-3' style={JCDstyle.card3}>
            <Card.Body>
                <Card.Text style={JCDstyle.text1}>
                    1. &nbsp;Programming Basics 
                    &nbsp; &nbsp; &nbsp; with Java
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className='me-3' style={JCDstyle.card3}>
            <Card.Body>
                <Card.Text style={JCDstyle.text1}>
                    2. &nbsp; Java Fundamentals - 
                    <br />
                    &nbsp; &nbsp; &nbsp; Method and Arrays
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className='me-3' style={JCDstyle.card3} >
            <Card.Body>
                <Card.Text style={JCDstyle.text1}>
                    3. &nbsp;Java Fundamentals - 
                    <br />
                    &nbsp;&nbsp;&nbsp; Objects Maps 
                    <br /> 
                    &nbsp;&nbsp;&nbsp; & Strings
                </Card.Text>
            </Card.Body>
        </Card>
      </Row>
      <Row sx={1} md={3} className="g-4 justify-content-center d-flex mt-1">
        <Card className='me-3' style={JCDstyle.card3}>
            <Card.Body>
                <Card.Text style={JCDstyle.text1}>
                    4. &nbsp;Java Advanced
                    <br />
                    <br />
                    <br />
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className='me-3' style={JCDstyle.card3}>
            <Card.Body>
                <Card.Text style={JCDstyle.text1}>
                    5. &nbsp;Java OOP Basics
                    
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className='me-3' style={JCDstyle.card3} >
            <Card.Body>
                <Card.Text style={JCDstyle.text1}>
                    6.&nbsp; Java OOP Advanced
                    
                </Card.Text>
            </Card.Body>
        </Card>
      </Row>
      <Row sx={1} md={3} className="g-4 justify-content-center d-flex mt-1">
        <Card className='me-3' style={JCDstyle.card3}>
            <Card.Body>
                <Card.Text style={JCDstyle.text1}>
                    7. &nbsp;Java DB and MySQL
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className='me-3' style={JCDstyle.card3}>
            <Card.Body>
                <Card.Text style={JCDstyle.text1}>
                    8.&nbsp; Java ORM and 
                    <br />
                    &nbsp;&nbsp;&nbsp; Spring
                    <br />
                    <br />
                </Card.Text>
            </Card.Body>
        </Card>
        <Card className='me-3' style={JCDstyle.card3} >
            <Card.Body>
                <Card.Text style={JCDstyle.text1}>
                    9. &nbsp;Java Spring 
                    <br />
                    &nbsp;&nbsp;&nbsp; Fundamentals
                </Card.Text>
            </Card.Body>
        </Card>
      </Row>
      
      <Row sx={1} md={3} className="g-4 justify-content-center d-flex mt-1 pb-5">
      <Card className='me-3' style={JCDstyle.card3} >
            <Card.Body>
                <Card.Text style={JCDstyle.text1}>
                    10. &nbsp;JavaScript 
                    <br />
                    &nbsp; &nbsp; &nbsp; Application 
                    <br />
                    <br />
                </Card.Text>
            </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default JavaCourseDetails;
