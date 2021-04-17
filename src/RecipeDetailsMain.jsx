import React, { Fragment } from 'react';
import RecipeDirections from './RecipeDirections';
import RecipeIngredients from './RecipeIngredients';

const RecipeDetailsMain = ({ recipe, loading }) => {
  return (
    <Fragment>
      <RecipeDirections recipe={recipe} loading={loading} />
      <RecipeIngredients recipe={recipe} loading={loading} />
    </Fragment>
  );
};

export default RecipeDetailsMain;
