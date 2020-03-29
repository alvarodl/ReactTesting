import React from 'react';
import Count from './Count';
import { mount } from 'enzyme';
import sinon from 'sinon';

test('simulate increment count on click', () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <Count count={0} incrementCount={spy}/>
    );
  
    wrapper
    .find('#incrementCountButton')
    .simulate('click');
  
    expect(spy.calledOnce).toBe(true);
  });