import React, { useState } from "react";
import {
  Row,
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
    backgroundColor:"#ff7b00",
    color: "#fff",
    border: "none",
    outline: "none",
    fontWeight: 600,
    borderRadius: "25px",
    
    width:"150px",
    "&:disabled": {
      backgroundColor: 'blue' || 'red'
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

  listGroup: {
    backgroundColor: "#fff9eb",
  },
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
    javaType: 0,
    jsType: 0,
    devopsType: 0,
    type: "",
  });

  const { questions } = quiz;
  const { id, question, choices, correctAnswer } =
    questions[activeQuestion];
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
      type: "",
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

      if(result.javaType >= result.jsType && result.javaType>=result.devopsType){
        result.type="Java Developer"
      }

      if(result.jsType>= result.javaType && result.jsType >= result.devopsType){
        result.type="Javascript Developer"
      }

      if(result.devopsType>=result.javaType && result.devopsType>=result.jsType){
        result.type="DevOps Engineer"
      }
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);

    if(index===0){
      result.javaType += 1;
    }else if(index===1){
      result.jsType += 1;

    }else{
      result.devopsType += 1;
    }


    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("Index = " + index);

      console.log("right");
    } else {
      setSelectedAnswer(false);
      console.log("wrong");
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
                <Card.Text style={QuizStyle.text} className="text-center"> 
                  {result.type}
                </Card.Text>
                <Card.Text className="text-end quiz-main">
                  <Button 
                  onClick={onClickTryAgain}
                  className="quiz-button"
                  >
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
