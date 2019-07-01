/**
 * @jest-environment node
 */

import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/app.jsx';

test('<App />', () => {
  const wrapper = shallow(<App /> )
  expect(wrapper.exists()).toBe(true);
})