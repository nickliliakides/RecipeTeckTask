import React, { useState } from 'react';
import './Header.styles.scss';

const Header = ({ recipes, allRecipes, setRecipes }) => {
  const [searchField, setSearchField] = useState('');

  const filterRecipes = (recipes, e) => {
    const filteredRecipes = recipes.filter((recipe) => {
      const matchIngredient = recipe.ingredients.some((ing) =>
        ing.toLowerCase().includes(e.currentTarget.value.trim().toLowerCase())
      );

      const matchTitle = recipe.tags.some((tag) =>
        tag.toLowerCase().includes(e.currentTarget.value.trim().toLowerCase())
      );

      return (
        recipe.title
          .toLowerCase()
          .includes(e.currentTarget.value.trim().toLowerCase()) ||
        matchIngredient ||
        matchTitle
      );
    });
    if (filteredRecipes.length) setRecipes(filteredRecipes);
  };

  const handleChange = (e) => {
    setSearchField(e.currentTarget.value);
    if (searchField.length < e.currentTarget.value.length)
      filterRecipes(recipes, e);
    else filterRecipes(allRecipes, e);
  };

  return (
    <header className='header'>
      <img src='img/recipeLogo.png' alt='Logo' className='header__logo' />
      <div className='search'>
        <input
          type='text'
          className='search__field'
          placeholder='Search over recipes...'
          onChange={(e) => handleChange(e)}
        />
        <div className='search__icon__wrapper'>
          <svg className='search__icon'>
            <use href='img/icons.svg#icon-magnifying-glass'></use>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
