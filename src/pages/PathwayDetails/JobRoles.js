import React from 'react'
import { useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap'
import Placeholder from '../../images/placeholder.jpg'
import JobRolesModal from './JobRolesModal';
import FullStackIcon from '../../images/fullstack.png'
import FrontEndIcon from '../../images/frontend.jfif'
import BackEndIcon from '../../images/backend1.jfif'

const JRStyle = {
    main: {
      width:"100%",
      height:"auto",  
      paddingTop: "5%",
      backgroundColor: "white",
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
      height:"25rem",
      
    },

    title: {
        color: "#ff7b00",
        fontWeight: 800,
        fontSize: "3rem",
        textShadow:"0 4px 6px rgba(0,0,0,0.6)",
        marginBottom:"2%",
      },
  };

const JobRoles = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={JRStyle.main}>
        <h1 className='text-center' style={JRStyle.title}>JOB ROLES</h1>
        <Row xs={1} md={3} className="g-3 d-flex justify-content-center">
        <Card style={JRStyle.card}className='rounded-4'>
          <Card.Img
            variant="top"
            src={FullStackIcon}
            className="rounded mx-0 d-block"
            style={{
              display: "block",
              objectFit: "scale-down",
            }}
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-center">
              Full Stack Developer
            </Card.Title>
            <Card.Text className="d-flex justify-content-center"></Card.Text>
            <Card.Text className="d-flex justify-content-center">
              <Button style={JRStyle.button} onClick={handleShow}>Find Out More</Button>
              <JobRolesModal show={show} />
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={JRStyle.card} className='rounded-4'>
          <Card.Img
            variant="top"
            src={FrontEndIcon}
            className="rounded mx-0 d-block"
            style={{
              display: " block",
              objectFit:"contain"
            }}
          />
          <Card.Body >
            <Card.Title className="d-flex justify-content-center">
              Front-End Developer
            </Card.Title>
            <Card.Text className="d-flex justify-content-center"></Card.Text>
            <Card.Text className="d-flex justify-content-center">
              <Button style={JRStyle.button} href="/JavaCourse">Find Out More</Button>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={JRStyle.card} className='rounded-4'>
          <Card.Img
            variant="top"
            src={BackEndIcon}
            className="rounded mx-0 d-block"
            style={{
              display: " block",
              objectFit:"contain",
            }}
          />
          <Card.Body>
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