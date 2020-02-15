import React from 'react';
import '../App.css';

const Recipe = (props) => {
    const { title, calories, image, ingredients } = props;
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}</ol>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    );
}

export default Recipe;