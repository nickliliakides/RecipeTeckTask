import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';
import recipes from '../mockRecipes';

let wrapper;

const defaultProps = {
  recipes,
  allRecipes: recipes,
  setRecipes: jest.fn(),
};

describe('<Header /> component', () => {
  beforeEach(() => {
    wrapper = shallow(<Header {...defaultProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
