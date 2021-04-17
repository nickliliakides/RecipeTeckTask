import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from '../RecipeList';
import recipes from '../mockRecipes';
import RecipeListItem from '../RecipeListItem';

let wrapper;

const defaultProps = {
  recipes,
};

describe('<RecipeList /> component', () => {
  beforeEach(() => {
    wrapper = shallow(<RecipeList {...defaultProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the right amount of RecipeListItem components', () => {
    expect(wrapper.find(RecipeListItem).length).toEqual(
      defaultProps.recipes.length
    );
  });
});
