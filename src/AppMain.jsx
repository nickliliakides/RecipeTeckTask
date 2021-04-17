import React from 'react';
import Header from './Header';
import RecipeDetails from './RecipeDetails';
import RecipeList from './RecipeList';

const AppMain = ({ recipes, allRecipes, setRecipes, loading, setLoading }) => {
  return (
    <div className='container'>
      <Header
        recipes={recipes}
        allRecipes={allRecipes}
        setRecipes={setRecipes}
      />
      <RecipeList recipes={recipes} />
      <RecipeDetails loading={loading} setLoading={setLoading} />
    </div>
  );
};

export default AppMain;
