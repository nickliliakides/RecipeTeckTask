import React from 'react';
import { shallow } from 'enzyme';
import AppMain from '../AppMain';
import Header from '../Header';
import RecipeList from '../RecipeList';
import RecipeDetails from '../RecipeDetails';
import recipes from '../mockRecipes';

let wrapper;

const defaultProps = {
  recipes,
  allRecipes: recipes,
  setRecipes: jest.fn(),
  loading: false,
  setLoading: jest.fn(),
};

describe('<AppMain /> component', () => {
  beforeEach(() => {
    wrapper = shallow(<AppMain {...defaultProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the Header component', () => {
    expect(wrapper.find(Header).length).toEqual(1);
  });

  it('should render the RecipeList component', () => {
    expect(wrapper.find(RecipeList).length).toEqual(1);
  });

  it('should render the RecipeDetails component', () => {
    expect(wrapper.find(RecipeDetails).length).toEqual(1);
  });
});
