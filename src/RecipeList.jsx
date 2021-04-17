import React from 'react';
import './RecipeList.styles.scss';
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ recipes }) => {
  return (
    <div className='results'>
      <ul className='results__list'>
        {recipes.map((recipe) => (
          <RecipeListItem key={recipe.id} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
