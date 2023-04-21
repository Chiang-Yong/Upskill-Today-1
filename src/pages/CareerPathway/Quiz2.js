import React, { useState } from 'react';
import './quiz.css'
import { Container } from 'react-bootstrap'

const questions = [
    {
        questionText: 'Are you detail-oriented?',
        answerOptions: [
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: false },

        ],
    },
    {
        questionText: 'Do you enjoy problem-solving?',
        answerOptions: [
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: false },
        ],
    },
    {
        questionText: 'Are you analytical?',
        answerOptions: [
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: false },
        ],
    },
    {
        questionText: 'Do you enjoy learning new things?',
        answerOptions: [
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: false },
        ],
    },
];


function Quiz2() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };



    return (
        <Container fluid className="quiz">

            <row>
                <h1>QUIZ</h1>
                <p>Take the quiz to help you to decide the course path</p>
            </row>


            <row>
                <div className='app'>
                    {showScore ? (
                        <div className='score-section'>
                            {/* You scored {score} out of {questions.length} */}
                            Java Developer role will be a good fit for you.
                        </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='question-text'>{questions[currentQuestion].questionText}</div>
                            </div>

                            <div className='answer-section'>
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </row>
        </Container>
    )
}

export default Quiz2