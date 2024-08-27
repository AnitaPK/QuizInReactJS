// src/components/ResultPage.js

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ResultPage = () => {
    const locationState = useLocation();
    const navigate = useNavigate();
    const { score, userName, category } = locationState.state || { score: 0, userName: 'User', category: 'General' };

    React.useEffect(() => {
        // Store result in local storage
        const previousResults = JSON.parse(localStorage.getItem('quizResults')) || [];
        previousResults.push({ userName, score, category });
        localStorage.setItem('quizResults', JSON.stringify(previousResults));
    }, [score, userName, category]);

    const handleRetakeQuiz = () => {
        navigate('/');
    };
    console.log(category);

    return (
        <div className="result-page d-flex flex-column align-items-center justify-content-center h-100">
            <h1>Quiz Finished!</h1>
            <h2>{userName}, your score is: {score}</h2>
            <h3>Category: {category}</h3>
            <Button variant="primary" onClick={handleRetakeQuiz}>
                Retake Quiz
            </Button>
        </div>
    );
};

export default ResultPage;
