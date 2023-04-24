import React, { useState } from "react";
import { Row, Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
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
    fontSize: "3rem",
    textShadow: "0px 4px 6px rgba(0,0,0,0.6)",
    color: "#ff7b00",
    marginTop: "5%",
  },

  text: {
    fontWeight: 600,
    fontSize: "1.3rem",
    paddingTop: "1%",
    paddingBottom: "1%",
  },

  card: {
    width: "50%",
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

  listGroup:{
    backgroundColor:"#fff9eb",
  }
};

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const onClickTryAgain = () => {
    setShowResult(false);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  };

  const onClickNext = () => {
    setSelectedAnswerIndex(null);

    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("right");
    } else {
      setSelectedAnswer(false);
      console.log("wrong");
    }
  };
  const { questions } = quiz;
  const { id, question, choices, correctAnswer } = questions[activeQuestion];
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className="justify-content-center" style={QuizStyle.main}>
      <Row>
        <h1 className="text-center" style={QuizStyle.title}>
          QUIZ
        </h1>
        <p className="text-center" style={QuizStyle.text}>
          Take the quiz to help you to decide the program track
        </p>
      </Row>
      {!showResult ? (
        <Row className="justify-content-center" style={QuizStyle.row}>
          <Card style={QuizStyle.card}>
            <Card.Header className="fs-3 fw-bold text-center">
              JavaScript MCQ
            </Card.Header>
            <Card.Body>
              <Card.Title className="text-left py-3">
                {id}.&nbsp;&nbsp; {question}
              </Card.Title>
         
                <ListGroup className="quiz-main list-group-flush py-3" variant="flush" style={QuizStyle.listGroup}>
                  {choices.map((answer, index) => (
                    <ListGroup.Item
                      onClick={() => onAnswerSelected(answer, index)}
                      key={answer}
                      style={{ backgroundColor: "#fff9eb", textAlign: "left" }}
                    >
                     <span className={
                        selectedAnswerIndex === index ? "selected-answer w-500" : null
                      }> {index + 1}.&nbsp;&nbsp; {answer}</span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              

              <Card.Text className="text-end">
                <Button
                  style={QuizStyle.button}
                  onClick={onClickNext}
                  disabled={selectedAnswerIndex === null}
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
            <Card style={QuizStyle.card}>
              <Card.Header className="fs-1 fw-bold text-center">
                Result
              </Card.Header>
              <Card.Body>
                <Card.Text style={QuizStyle.text}>
                  Total Question:&nbsp;&nbsp; <span>{questions.length}</span>
                </Card.Text>
                <Card.Text style={QuizStyle.text}>
                  Total Score:&nbsp;&nbsp;<span> {result.score}</span>
                </Card.Text>
                <Card.Text style={QuizStyle.text}>
                  Correct Answers:&nbsp;&nbsp;
                  <span> {result.correctAnswers}</span>
                </Card.Text>
                <Card.Text style={QuizStyle.text}>
                  Wrong Answers:&nbsp;&nbsp;<span> {result.wrongAnswers}</span>
                </Card.Text>
                <Card.Text style={QuizStyle.text}> Recommended: &nbsp; &nbsp;
                  {result.score > 10
                    ? "Guided Track"
                    : "Self-paced Track"}
                </Card.Text>
                <Card.Text className="text-end">
                  <Button style={QuizStyle.button} onClick={onClickTryAgain}>
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
