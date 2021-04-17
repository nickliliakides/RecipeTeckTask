import React from 'react';
import { shallow } from 'enzyme';
import RecipeDirections from '../RecipeDirections';
import recipes from '../mockRecipes';

let wrapper;

const defaultProps = {
  recipe: recipes[0],
  loading: false,
};

describe('<RecipeDirections /> component', () => {
  beforeEach(() => {
    wrapper = shallow(<RecipeDirections {...defaultProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
