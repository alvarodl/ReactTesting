import React from 'react';
import Count from './Count';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { cleanup } from '@testing-library/react';

afterEach(cleanup);

test('component shallow snapshot', () => {
  const wrapper = shallow(
    <Count count={0} incrementCount={() => null} />  
  );

  expect(wrapper).toMatchSnapshot();
});

it('simulate increment count on click', () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <Count count={0} incrementCount={spy}/>
    );
  
    wrapper
    .find('#incrementCountButton')
    .simulate('click');
  
    expect(spy.calledOnce).toBe(true);
  });