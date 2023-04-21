import React from "react";
import { Row, Card, Button } from "react-bootstrap";
import quizplaceholder from "../../images/quizplaceholder.png";

const QuizStyle = {
  main: {
    backgroundColor: "white",
    height: "auto",
    width: "100%",
  },
  button: {
    backgroundColor: "#ff7b00",
    color: "#fff",
    border: "none",
    outline: "none",
    fontWeight:600,
  },

  image: {
    display: "block",
    width: "100%",
    height: "auto",
    justifyContent:"center",
    alignItems: "center",
    marginLeft: "25%",

  },

  title: {
    fontWeight: 800,
    fontSize: "3rem",
    textShadow: "0px 4px 6px rgba(0,0,0,0.6)",
    color: "#ff7b00",
    marginTop:"5%",
  },

  text:{
    fontWeight: 700,
    fontSize: "1.8rem",
    paddingTop: "1%",
    paddingBottom: "1%",
  },

  card: {
    width: "50%",
    height: "auto",
    backgroundColor:"#fff9eb",
    justifyContent: "center",
  },
  
  row:{
    paddingBottom: "5%",
  }
};

const Quiz = () => {
  return (
    <div className="text-center justify-content-center border border-1" style={QuizStyle.main}>
      <Row style={QuizStyle.row}>
      <h1 style={QuizStyle.title}>QUIZ</h1>
      <p style={QuizStyle.text}>Take the quiz to help you to decide the course path</p>
      </Row>
      <Row className="text-center justify-content-center" style={QuizStyle.row}>
        <Card style={QuizStyle.card}>
          <Card.Img
            variant="top"
            src={quizplaceholder}
            className="text-center justify-content-center rounded mx-0 d-block"
            style={QuizStyle.image}
          />
          <Card.Body>
            <Card.Text>
                <Button style={QuizStyle.button}>Submit</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default Quiz;
