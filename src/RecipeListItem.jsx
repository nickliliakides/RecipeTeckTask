import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { limitRecipeTitle } from './utils';

const RecipeListItem = ({ recipe }) => {
  const { id } = useParams();
  const { push } = useHistory();
  return (
    <li>
      <a
        className={`results__link ${
          recipe.id === parseInt(id) ? 'active' : ''
        }`}
        href='#23456'
        onClick={() => push(`/${recipe.id}`)}
      >
        <figure className='results__fig'>
          <img src={recipe.source_url} alt={recipe.title} />
        </figure>
        <div className='results__data'>
          <h4 className='results__name'>{limitRecipeTitle(recipe.title)}</h4>
          <p className='results__author'>{recipe.author.name}</p>
        </div>
      </a>
    </li>
  );
};

export default RecipeListItem;
