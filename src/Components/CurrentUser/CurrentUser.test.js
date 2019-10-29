import React from 'react';
import { CurrentUser, mapStateToProps, mapDispatchToProps } from './CurrentUser';
import { shallow } from 'enzyme';
import { signOut } from '../../Actions';


describe('CurrentUser', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(
            <CurrentUser
                currentUser={{ id: 3, name: 'Chris' }}
            />)
    })

    it('should match the snapshot with all data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe('mapStateToProps', () => {
    it('should return an object with the current user', () => {
        const mockState = {
            currentUser: { id: 3, name: 'Chris' }
        };
        const expected = { currentUser: { id: 3, name: 'Chris' } }
        
        const mappedProps = mapStateToProps(mockState);
        expect(mappedProps).toEqual(expected);
    })
})