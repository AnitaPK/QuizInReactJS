// src/components/Quiz.js

import React, { useState, useEffect } from 'react';
import Question from './Question';
import { useNavigate, useLocation } from 'react-router-dom';
import gkQuestions from '../questionsData';
import { Button, ProgressBar } from 'react-bootstrap';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(180); 
    const locationState = useLocation();
    const navigate = useNavigate();
    const { userName, category } = locationState.state || {};

    // Filter questions by selected category
    const filteredQuestions = gkQuestions.filter(
        (question) => question.category === category
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    setIsQuizFinished(true);
                    navigate('/result', { state: { score, userName, category } });
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate, score, userName]);

    const handleAnswerClick = (selectedOption) => {
        if (selectedOption === filteredQuestions[currentQuestion]?.correctAnswer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < filteredQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setIsQuizFinished(true);
            navigate('/result', { state: { score, userName } });
        }
    };

    const handlePreviousClick = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleNextClick = () => {
        if (currentQuestion < filteredQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setIsQuizFinished(true);
            navigate('/result', { state: { score, userName } });
        }
    };

    if (isQuizFinished) {
        return null;
    }

    const current = filteredQuestions[currentQuestion];
    if (!current) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Time Left: {timeLeft}s</h2>
            <ProgressBar
                now={(currentQuestion + 1) * 100 / filteredQuestions.length}
                label={`${currentQuestion + 1} of ${filteredQuestions.length}`}
            />
            <div className='container h-30'>
            <Question
                question={current.question}
                options={current.options}
                handleAnswerClick={handleAnswerClick}
            />
            </div>
            <div className="d-flex justify-content-between mt-3">
                <Button
                    variant="secondary"
                    onClick={handlePreviousClick}
                    disabled={currentQuestion === 0}
                >
                    Previous
                </Button>
                <Button
                    variant="primary"
                    onClick={handleNextClick}
                    disabled={currentQuestion === filteredQuestions.length - 1}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default Quiz;
