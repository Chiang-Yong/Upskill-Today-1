import React from "react";
import { Card, Row, Button, Popover, OverlayTrigger } from "react-bootstrap";
import FullStackIcon from "../../images/fullstack.png";
import FrontEndIcon from "../../images/frontend.jfif";
import BackEndIcon from "../../images/backend1.jfif";

const JRStyle = {
  main: {
    width: "100%",
    height: "auto",
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
    height: "25rem",
  },

  title: {
    color: "#ff7b00",
    fontWeight: 800,
    fontSize: "3rem",

    marginBottom: "2%",
  },
};

const popoverFS = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Full Stack Developer</Popover.Header>
    <Popover.Body>
      A <strong>full stack developer</strong> is a software engineer who is
      skilled in developing applications for both the front-end and back-end. In
      other words, they have knowledge and expertise in all the layers of the
      software stack, including the user interface, application logic, and
      database. The responsibilities of a full stack developer may include
      designing and implementing the user interface using HTML, CSS, and
      JavaScript, writing the application logic in languages such as Java,
      Python, or Ruby, and managing the database using SQL or NoSQL
      technologies.
    </Popover.Body>
  </Popover>
);

const popoverFE = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Front-End Developer</Popover.Header>
    <Popover.Body>
      A <strong>front-end developer</strong> is a software engineer who focuses
      on the development of the user interface of a software application. They
      are responsible for designing and building the part of the software that
      the user interacts with directly, such as web pages, forms, buttons, and
      other elements of the user interface. Front-end developers use a variety
      of technologies to create user interfaces, including HTML, CSS, and
      JavaScript. They must have a strong understanding of user experience (UX)
      design principles and be able to create visually appealing, easy-to-use
      interfaces that are optimized for speed and performance.
    </Popover.Body>
  </Popover>
);

const popoverBE = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Back-End Developer</Popover.Header>
    <Popover.Body>
      A <strong>back-end developer</strong> is a software engineer who focuses
      on the development of the server-side components of a software
      application. They are responsible for designing and building the part of
      the software that runs on the server and is responsible for processing
      data and serving it to the front-end components of the application.
      Back-end developers use a variety of technologies to build server-side
      components, including programming languages such as Java, Python, or Ruby,
      and database technologies such as SQL or NoSQL. They must have a strong
      understanding of data structures, algorithms, and system architecture, as
      well as good problem-solving skills.
    </Popover.Body>
  </Popover>
);

const JobRoles = () => {
  return (
    <div style={JRStyle.main}>
      <h1 className="text-center" style={JRStyle.title}>
        JOB ROLES
      </h1>
      <Row xs={1} md={3} className="g-3 d-flex justify-content-center">
        <Card style={JRStyle.card} className="rounded-4">
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
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={popoverFS}
              >
                <Button style={JRStyle.button}>
                  Find Out More
                </Button>
              </OverlayTrigger>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={JRStyle.card} className="rounded-4">
          <Card.Img
            variant="top"
            src={FrontEndIcon}
            className="rounded mx-0 d-block"
            style={{
              display: " block",
              objectFit: "contain",
            }}
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-center">
              Front-End Developer
            </Card.Title>
            <Card.Text className="d-flex justify-content-center"></Card.Text>
            <Card.Text className="d-flex justify-content-center">
            <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={popoverFE}
              >
              <Button style={JRStyle.button}>
                Find Out More
              </Button>
              </OverlayTrigger>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={JRStyle.card} className="rounded-4">
          <Card.Img
            variant="top"
            src={BackEndIcon}
            className="rounded mx-0 d-block"
            style={{
              display: " block",
              objectFit: "contain",
            }}
          />
          <Card.Body>
            <Card.Title className="d-flex justify-content-center">
              Back-End Developer
            </Card.Title>
            <Card.Text className="d-flex justify-content-center"></Card.Text>
            <Card.Text className="d-flex justify-content-center">
            <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={popoverBE}
              >
              <Button style={JRStyle.button}>
                Find Out More
              </Button>
              </OverlayTrigger>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default JobRoles;
