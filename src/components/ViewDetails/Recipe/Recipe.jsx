import React from 'react';

const Recipe = (props) => {
    const { name, ingredients, cooking_method, rating } = props.recipe;
    return (
        <>
           <div>
                <h1>{}</h1>

            </div> 
        </>
    );
};

export default Recipe;