import React from 'react';
import App from './index';
import { shallow } from 'enzyme';

//test App component
describe('The main App component loads', () => {
  it ('Should render the App component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  })
})

