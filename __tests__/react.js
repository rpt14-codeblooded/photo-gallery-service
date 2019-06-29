import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/app.jsx';

it('renders without crashing', () => {
  shallow(<App />);
});