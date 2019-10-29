import React, { Component } from 'react';
import { CurrentUser, mapStateToProps, mapDispatchToProps } from './CurrentUser';
import { shallow } from 'enzyme';
import { signOut, setFavorites } from '../../Actions';

jest.mock('../../Actions')

describe('CurrentUser', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallow(
            <CurrentUser
                currentUser={{ id: 3, name: 'Chris' }}
                signOut={jest.fn()}
                setFavorites={jest.fn()}
            />)
    })

    it('should match the snapshot with all data passed in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should return an object with the current user', () => {
        const mockState = {
            currentUser: { id: 3, name: 'Chris' }
        };
        const expected = { currentUser: { id: 3, name: 'Chris' } }
        
        const mappedProps = mapStateToProps(mockState);
        expect(mappedProps).toEqual(expected);
    });

    it('should call dispatch with signOut and setFavorites when handleClick is called', () => {
        const mockEvent = {
            preventDefault: jest.fn()
        }
        const mockDispatch = jest.fn();
        const actionToDispatch1 = signOut();
        const actionToDispatch2 = setFavorites([]);

        const mappedProps = mapDispatchToProps(mockDispatch);
        wrapper.instance().handleClick(mockEvent);

        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch1);
        expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch2);
    });
})