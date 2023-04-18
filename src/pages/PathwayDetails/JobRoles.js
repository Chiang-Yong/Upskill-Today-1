import React from 'react'
import { Card, Col, Row, Button } from 'react-bootstrap'
import Placeholder from '../../images/placeholder.jpg'

const JRStyle = {
    main: {
      width:"100%",
      height:"auto",  
      paddingTop: "5%",
      backgroundColor: "#fff9eb",
    },
  
    button: {
      backgroundColor: "#ff7b00",
      color: "#fff",
      border: "none",
      outline: "none",
    },
  
    card_title: {
      color: "#ff7b00",
      backgroundColor: "#fff9eb",
      fontWeight: 800,
      fontSize: "35px",
    },
  
    card_text: {
      color: "black",
      fontWeight: 600,
      fontSize: "25px",
      paddingTop: "1%",
      paddingBottom: "1%",
    },
  
    card: {
      width: "18rem",
      padding: "1%",
      marginLeft: "1%",
      marginRight: "1%",
      marginBottom: "5%",
      height:"25rem"
    },

    title: {
        color: "#000",
        backgroundColor: "#fff9eb",
        fontWeight: 800,
        fontSize: "35px",
        marginBottom:"2%",
      },
  };

const JobRoles = () => {
  return (
    <div style={JRStyle.main}>
        <h1 className='text-center' style={JRStyle.title}>JOB ROLES</h1>
        <Row xs={1} md={3} className="g-3 d-flex justify-content-center">
        <Card style={JRStyle.card}>
          <Card.Img
            variant="top"
            src={Placeholder}
            className="rounded mx-0 d-block"
            style={{
              display: "block",
              objectFit: "scale-down",
            }}
          />
          <Card.Body style={{backgroundColor:"#dacafb"}}>
            <Card.Title className="d-flex justify-content-center">
              Full Stack Developer
            </Card.Title>
            <Card.Text className="d-flex justify-content-center"></Card.Text>
            <Card.Text className="d-flex justify-content-center">
              <Button style={JRStyle.button} href="/JavascriptCourse">Find Out More</Button>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={JRStyle.card}>
          <Card.Img
            variant="top"
            src={Placeholder}
            className="rounded mx-0 d-block"
            style={{
              display: " block",
            }}
          />
          <Card.Body style={{backgroundColor:"#c9f1fd"}}>
            <Card.Title className="d-flex justify-content-center">
              Front-End Developer
            </Card.Title>
            <Card.Text className="d-flex justify-content-center"></Card.Text>
            <Card.Text className="d-flex justify-content-center">
              <Button style={JRStyle.button} href="/JavaCourse">Find Out More</Button>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={JRStyle.card}>
          <Card.Img
            variant="top"
            src={Placeholder}
            className="rounded mx-0 d-block"
            style={{
              display: " block",
            }}
          />
          <Card.Body style={{backgroundColor:"#dfedd6"}}>
            <Card.Title className="d-flex justify-content-center">
              Back-End Developer
            </Card.Title>
            <Card.Text className="d-flex justify-content-center"></Card.Text>
            <Card.Text className="d-flex justify-content-center">
              <Button style={JRStyle.button} href="/DevOpsCourse">Find Out More</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </div>
  )
}

export default JobRoles