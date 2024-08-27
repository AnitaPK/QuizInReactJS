import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import CategorySelector from './CategorySelector';

const Home = () => {
    const [userName, setUserName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        if (userName.trim() && selectedCategory) {
            navigate('/quiz', { state: { userName, category: selectedCategory } });
        } else {
            alert('Please enter your name and select a category.');
        }
    };

    return (
        <div className="home d-flex flex-column align-items-center justify-content-center h-100">
            <Form>
                <Form.Group controlId="formUserName">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Your name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </Form.Group>
                <CategorySelector
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
                <Button
                    variant="primary"
                    onClick={handleStartQuiz}
                    className="mt-3"
                >
                    Start Quiz
                </Button>
            </Form>
        </div>
    );
};

export default Home;
