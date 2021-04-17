import React, { useEffect, useState } from 'react';
import RecipeIngredientItem from './RecipeIngredientItem';
const Fraction = require('fractional').Fraction;

const RecipeIngredients = ({ recipe, loading }) => {
  const [ingredients, setIngredients] = useState([]);
  const [currentServings, setCurrentServings] = useState();

  useEffect(() => {
    if(recipe) {
      if(!currentServings) setCurrentServings(recipe.servings)
      /* Here is handled all the logic to slplit the ingredient in two strings(quantity and the ingredient itself). If there is a fraction need to be checked as well, and myltiplied with the factor(default servings / current servings) to do the calculation everytime the user increases or decreases the servings quantity  */
      const ingredientArray = recipe.ingredients.map((ing) => {
        const ingredientsArray = ing.split(' ');
        let count = ingredientsArray[0];
        if (ingredientsArray[1].match(/^\d/)) {
          count = `${count} ${ingredientsArray[1]}`;
          ingredientsArray.splice(0, 2);
        } else {
          ingredientsArray.splice(0, 1);
        }
        if (currentServings !== recipe.servings) {
          if (count.includes('/')) {
            if (count.includes(' ')) {
              const newCountArray = count.split(' ');
              const fractionArray = newCountArray[1].split('/');
              const countNum = new Fraction(newCountArray[0]).add(
                new Fraction(fractionArray[0], fractionArray[1])
              );
  
              count = countNum
                .multiply(new Fraction(currentServings, recipe.servings))
                .toString();
            } else {
              const fractionArray = count.split('/');
              count = new Fraction(fractionArray[0], fractionArray[1])
                .multiply(new Fraction(currentServings, recipe.servings))
                .toString();
            }
          } else {
            count = new Fraction(count)
              .multiply(new Fraction(currentServings, recipe.servings))
              .toString();
          }
        }
        const ingredient = ingredientsArray.join(' ');
  
        return { count, ingredient };
      });

      setIngredients(ingredientArray);
    }
   
  }, [recipe, currentServings]);

  return recipe && !loading ? (
    <div className='shopping'>
      <div className='ingredients'>
        <h2 className='heading-2'>Ingredients</h2>
        <div className='recipe__info'>
          <svg className='recipe__info-icon'>
            <use href='img/icons.svg#icon-man'></use>
          </svg>
          <span className='recipe__info-data recipe__info-data--people'>
            {currentServings}
          </span>
          <span className='recipe__info-text'> servings</span>
          <div className='recipe__info-buttons'>
            <button
              disabled={currentServings === 1}
              className='btn-tiny btn-decrease'
              onClick={() =>
                setCurrentServings((currentServ) => {
                  return currentServ - 1;
                })
              }
            >
              <svg>
                <use href='img/icons.svg#icon-circle-with-minus'></use>
              </svg>
            </button>
            <button
              className='btn-tiny btn-increase'
              onClick={() =>{
                if(currentServings < 20) {
                  setCurrentServings((currentServ) => {
                    return currentServ + 1;
                  })
                } else {
                  alert('20 people are the greater number to calculate the ingredients')
                }
              }

              }
            >
              <svg>
                <use href='img/icons.svg#icon-circle-with-plus'></use>
              </svg>
            </button>
          </div>
        </div>

        <ul className='recipe__ingredient-list'>
          {ingredients.map((ing, i) => (
            <RecipeIngredientItem key={i} item={ing} />
          ))}
        </ul>
      </div>

      <div className='categories'>
        <h2 className='heading-2 cat'>Categories</h2>
        <ul className='recipe__tags__list'>
          {recipe.tags.map((tag, i) => (
            <li key={i}>
              <p>{tag}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : <div className='loading'>Loading ...</div>
};

export default RecipeIngredients;
