import React from 'react';

const RecipeIngredientItem = ({ item }) => {
  return (
    <li className='recipe__item'>
      <svg className='recipe__icon'>
        <use href='img/icons.svg#icon-check'></use>
      </svg>
      <div className='recipe__count'>{item.count}</div>
      <div className='recipe__ingredient'>{item.ingredient}</div>
    </li>
  );
};

export default RecipeIngredientItem;
