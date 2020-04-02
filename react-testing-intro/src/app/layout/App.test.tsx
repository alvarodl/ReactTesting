import React from 'react';
import App from './App';
import { shallow, render, mount } from 'enzyme';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

test('component shallow snapshot', () => {
  const wrapper = shallow(
    <App />
  );
  
  expect(wrapper).toMatchSnapshot();
});

it('renders "You clicked this button" text with enzyme', () => {
  const wrapper = shallow(
    <App />
  );
  
  expect(wrapper.text()).toContain('You clicked this button');
});

it('adds correctly', () => {
  expect(1 + 1).toEqual(2);
});