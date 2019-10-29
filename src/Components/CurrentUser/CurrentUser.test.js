import React from 'react';
import { CurrentUser, mapStateToProps, mapDispatchToProps } from './CurrentUser';
import { shallow } from 'enzyme';
import { signOut } from '../../Actions';


describe('CurrentUser', () => {
  let wrapper

  beforeEach(() => {
      wrapper = shallow(
          <CurrentUser
            currentUser = {{id: 3, name: 'Chris'}}
          />)
  })

    it('should match the snapshot with all data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})