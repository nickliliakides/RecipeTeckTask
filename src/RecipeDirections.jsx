import React from 'react';
import Loader from './Loader';

const RecipeDirections = ({ recipe, loading }) => {
  return recipe && !loading ? (
    <div className='recipe'>
      <figure className='recipe__fig'>
        <img src={recipe.source_url} alt='Tomato' className='recipe__img' />
        <h1 className='recipe__title'>
          <span>{recipe.title}</span>
        </h1>
      </figure>
      <div className='recipe__details'>
        <div className='recipe__info'>
          <svg className='recipe__info-icon'>
            <use href='img/icons.svg#icon-stopwatch'></use>
          </svg>
          <span className='recipe__info-data recipe__info-data--minutes'>
            {`${recipe.prep_time_min} + ${recipe.cook_time_min}`}
          </span>
          <span className='recipe__info-text'> minutes (prep + cook)</span>
        </div>
      </div>

      <div className='recipe__directions'>
        <h2 className='heading-2'>How to cook it</h2>
        {recipe.directions.map((dir, i) => (
          <p key={i} className='recipe__directions-text'>
            {dir}
          </p>
        ))}
        <hr />
        <p className='recipe__directions-last-text'>
          This recipe was carefully designed and tested by
          <span className='recipe__by'>&nbsp;{recipe.author.name}</span>. Please
          check out more recipes at their website.
        </p>
        <a
          className='btn-small recipe__btn'
          href={recipe.author.url}
          target='_blank'
          rel='noreferrer'
        >
          <span>Directions</span>
          <svg className='search__icon'>
            <use href='img/icons.svg#icon-triangle-right'></use>
          </svg>
        </a>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default RecipeDirections;
