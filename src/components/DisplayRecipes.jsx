import React from 'react';

function DisplayRecipes({ recipes }) {
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <h3>{recipe.title}</h3>
          <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
          <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayRecipes;
