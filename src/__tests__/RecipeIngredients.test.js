import React from 'react';
import { shallow } from 'enzyme';
import RecipeIngredients from '../RecipeIngredients';
import recipes from '../mockRecipes';
import RecipeIngredientItem from '../RecipeIngredientItem';

let wrapper;

const defaultProps = {
  recipe: recipes[0],
  loading: false,
};

describe('<RecipeIngredients /> component', () => {
  beforeEach(() => {
    wrapper = shallow(<RecipeIngredients {...defaultProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the right amount of RecipeIngredientItem components', () => {
    setTimeout(() => {
      expect(wrapper.find(RecipeIngredientItem).length).toEqual(
        defaultProps.recipe.ingredients.length
      );
    }, 500);
  });
});
