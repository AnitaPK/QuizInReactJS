import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Score = ({ score, totalQuestions }) => {
    const navigate = useNavigate();

    const handleRetakeQuiz = () => {
        navigate('/');
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>Your Score</Card.Title>
                <Card.Text>
                    You scored {score} out of {totalQuestions}
                </Card.Text>
                <Button onClick={handleRetakeQuiz} variant="primary">
                    Retake Quiz
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Score;
