import React from 'react';
import App from './App';
import { shallow, render, mount } from 'enzyme';

test('renders learn react link with enzyme', () => {
  const wrapper = shallow(
    <App />
  );
  
  expect(wrapper.text()).toContain('Learn React');
});

test('adds correctly', () => {
  expect(1 + 1).toEqual(2);
});

// Real unit test (isolation, no children render)
test('renders correctly - shaññpw', () => {
  const wrapper = shallow(
    <App />
  );
  
  expect(wrapper).toMatchSnapshot();
});

// Only calls render but renders all children.
test('renders correctly - render', () => {
  const wrapper = render(
    <App />
  );
  
  expect(wrapper).toMatchSnapshot();
});

// Full rendering including child components. The only way to test componentDidMount and componentDidUpdate.
test('renders correctly - mount', () => {
  const wrapper = mount(
    <App />
  );
  
  expect(wrapper).toMatchSnapshot();
});

