import React from 'react';
import { Form } from 'react-bootstrap';

const Question = ({ question, options, handleAnswerClick }) => {
    const handleOptionChange = (event) => {
        handleAnswerClick(event.target.value);
    };

    return (
        <div className="question-container">
            <h3>{question}</h3>
            <Form>
                {options.map((option, index) => (
                    <Form.Check
                        key={index}
                        type="radio"
                        id={`option-${index}`}
                        label={option}
                        value={option}
                        name="quiz-option"
                        onChange={handleOptionChange}
                        className="mb-2"
                    />
                ))}
            </Form>
        </div>
    );
};

export default Question;
