import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { toggleModal, postUserLogin, hasErrored } from '../../Actions';
import { LoginForm } from './LoginForm';

describe("LoginForm", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <LoginForm
        currentUser={{ id: 3, name: 'Chris' }}
        
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})