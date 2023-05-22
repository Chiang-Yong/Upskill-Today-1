import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  ProgressBar,
} from "react-bootstrap";
import { quiz } from "../CareerPathway/QuizData";
import "./quiz.css";

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
    fontWeight: 600,
    borderRadius: "25px",

    width: "150px",
    "&:disabled": {
      backgroundColor: "blue" || "red",
    },
  },

  image: {
    display: "block",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "25%",
  },

  title: {
    fontWeight: 800,
    fontSize: "clamp(1.5rem, 2vw, 2.5rem)",
    textShadow: "0px 4px 6px rgba(0,0,0,0.6)",
    color: "#ff7b00",
    marginTop: "5%",
  },

  text: {
    fontWeight: 600,
    fontSize: "clamp(1.0rem, 1.15vw, 1.3rem)",
    paddingTop: "1%",
    paddingBottom: "1%",
  },

  card: {
    width: "75%",
    height: "auto",
    backgroundColor: "#fff9eb",
  },

  row: {
    paddingBottom: "5%",
  },

  selectedAnswer: {
    background: "#ffd6ff",
    border: "1px solid #800080",
  },

  listGroup: {
    backgroundColor: "#fff9eb",
  },

  filler: {
    textAlign: "right",
    height: "20px",
  },
};

const roleData = [
  { role: "Java Developer", count: 0 },
  { role: "JavaScript Developer", count: 0 },
  { role: "DevOps Enginer", count: 0 },
  { role: "Self-Paced (Java)", count: 0 },
];

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    javaType: 0,
    jsType: 0,
    devopsType: 0,
    selfPaced: 0,
    type: "",
  });

  const { questions } = quiz;
  const { id, question, choices, correctAnswer } = questions[activeQuestion];

  // const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const onClickTryAgain = () => {
    setShowResult(false);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      javaType: 0,
      jsType: 0,
      devopsType: 0,
      selfPaced: 0,
      type: "",
    });
  };

  const onClickNext = () => {

    if (selectedAnswerIndex === 0) {
      result.javaType += 1;
      console.log("Java count: "+result.javaType)
    } else if (selectedAnswerIndex === 1) {
      result.jsType += 1;
      console.log("JavaScript count: "+result.jsType)
    } else if (selectedAnswerIndex === 2) {
      result.devopsType += 1;
      console.log("DevOPs count: "+result.devopsType)
    } else {
      result.selfPaced += 1;
      console.log("Self-paced count: "+result.selfPaced)
    }
    setSelectedAnswerIndex(null);

    if (activeQuestion){

    //  setSelectedAnswerIndex(null);
      setResult((prev) =>
        selectedAnswer
          ? {
              ...prev,
              score: prev.score + 5,
              correctAnswers: prev.correctAnswers + 1,
            }
          : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
      );
    }

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      roleData[0].count = result.javaType;
      roleData[1].count = result.jsType;
      roleData[2].count = result.devopsType;
      roleData[3].count = result.selfPaced;

      //  roleData.map((role, index) => console.log(role.role + " " + role.count));

      // const roleDescending = [...roleData].sort((a, b) => b.count - a.count);
      //console.log(roleDescending);

      //Sort with Descending order --- highest number first
      roleData.sort((a, b) => b.count - a.count);
      // console.log(roleData);

      if (roleData[0].count > roleData[1].count) {
        result.type = roleData[0].role;
      } else if (
        roleData[0].count === roleData[1].count &&
        roleData[1].count > roleData[2].count
      ) {
        result.type = roleData[0].role + " / " + roleData[1].role;
      } else if (
        roleData[0].count === roleData[1].count &&
        roleData[1].count === roleData[2].count
      ) {
        result.type =
          roleData[0].role +
          " / " +
          roleData[1].role +
          " or " +
          roleData[2].role;
      }

      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);

   if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("Index = " + index);

      // console.log("right");
    } else {
      setSelectedAnswer(false);
      // console.log("wrong");
    }
  };

  return (
    <div className="justify-content-center" style={QuizStyle.main}>
      <Row>
        <h1 className="text-center" style={QuizStyle.title}>
          PERSONALITY QUIZ
        </h1>
        <p className="text-center" style={QuizStyle.text}>
          Take the personality quiz to help you to decide the program track
        </p>
      </Row>
      {!showResult ? (
        <Row className="justify-content-center" style={QuizStyle.row}>
          <Card style={QuizStyle.card} className="shadow-lg rounded-4">
            <Card.Body>
              <p>
                Question {id} of {quiz.totalQuestions}
              </p>

              <ProgressBar
                now={(id / quiz.totalQuestions) * 100}
                label={`${(id / quiz.totalQuestions) * 100}%`}
                variant="success"
              />
              <Card.Title className="fs-5 text-left pt-4 pb-3">
                {/* {id}.&nbsp;&nbsp;*/} {question}
              </Card.Title>

              <ListGroup
                className="quiz-main list-group-flush py-3"
                variant="flush"
                style={QuizStyle.listGroup}
              >
                {choices.map((answer, index) => (
                  <ListGroup.Item
                    onClick={() => onAnswerSelected(answer, index)}
                    key={answer}
                    style={{ backgroundColor: "#fff9eb", textAlign: "left" }}
                  >
                    <span
                      className={
                        selectedAnswerIndex === index ? "selected-answer" : null
                      }
                    >
                      {" "}
                      {index + 1}.&nbsp;&nbsp; {answer}
                    </span>
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <Card.Text className="text-end quiz-main">
                <Button
                  type="button"
                  onClick={onClickNext}
                  disabled={selectedAnswerIndex === null}
                  className="quiz-button"
                >
                  {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      ) : (
        <div style={QuizStyle.main} className="justify-content-center result">
          <Row className="justify-content-center" style={QuizStyle.row}>
            <Card style={QuizStyle.card} className="shadow-lg">
              <Card.Header className="fs-1 fw-bold text-center">
                Recommendation
              </Card.Header>
              <Card.Body>
                <Card.Text style={QuizStyle.text} className="text-center mb-5">
                  The recommended program tracks: &nbsp;&nbsp; {result.type}
                </Card.Text>

                {console.log(roleData)}

                {roleData.map((role, index) => (
                  <Card.Text key={index}>
                    <Row className="justify-content-md-center">
                      <Col xs lg="6">
                        <ProgressBar
                          now={(role.count / quiz.totalQuestions) * 100}
                          label={`${(role.count / quiz.totalQuestions) * 100}%`}
                          variant="success"
                          style={QuizStyle.filler}
                        />
                      </Col>
                      <Col xs lg="3" className="">
                        <p style={QuizStyle.text}>{role.role}</p>
                      </Col>
                    </Row>
                  </Card.Text>
                ))}
                <Card.Text></Card.Text>

                <Card.Text className="text-end quiz-main">
                  <Button onClick={onClickTryAgain} className="quiz-button">
                    Try Again
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </div>
      )}
    </div>
  );
};

export default Quiz;
