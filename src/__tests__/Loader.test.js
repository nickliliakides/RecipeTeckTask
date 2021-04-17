import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../Loader';

let wrapper;

describe('<Loader /> component', () => {
  beforeEach(() => {
    wrapper = shallow(<Loader />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should matches its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
