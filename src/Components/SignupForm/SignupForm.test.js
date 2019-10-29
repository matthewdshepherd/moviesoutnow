import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { toggleModal, hasErrored } from '../../Actions';
import { SignupForm } from './SignupForm';

describe("SignupForm", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <SignupForm
        toggleModal={true}
        error={''}
        toggleModal={jest.fn()}
        postNewUser={jest.fn()}
        hasErrored={jest.fn()}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})