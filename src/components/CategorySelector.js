import React from 'react';
import { Form } from 'react-bootstrap';

const categories = ['Geography', 'Literature', 'Science','History','Sports' ]; // Add more categories as needed

const CategorySelector = ({ selectedCategory, onSelectCategory }) => {
    return (
        <Form.Group controlId="formCategorySelector">
            <Form.Label>Select a Category</Form.Label>
            <Form.Control
                as="select"
                value={selectedCategory}
                onChange={(e) => onSelectCategory(e.target.value)}
            >
                <option value="">-- Select a Category --</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </Form.Control>
        </Form.Group>
    );
};

export default CategorySelector;
