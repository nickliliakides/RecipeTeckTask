import React from 'react';
import { shallow } from 'enzyme';
import RecipeDetailsMain from '../RecipeDetailsMain';
import RecipeDirections from '../RecipeDirections';
import RecipeIngredients from '../RecipeIngredients';

let wrapper;

const defaultProps = {
  loading: false,
  setLoading: jest.fn(),
};

describe('<RecipeDetailsMain /> component', () => {
  beforeEach(() => {
    wrapper = shallow(<RecipeDetailsMain {...defaultProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the RecipeDirections component', () => {
    expect(wrapper.find(RecipeDirections).length).toEqual(1);
  });

  it('should render the RecipeIngredients component', () => {
    expect(wrapper.find(RecipeIngredients).length).toEqual(1);
  });
});
