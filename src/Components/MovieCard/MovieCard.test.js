import React from 'react';
import { shallow } from 'enzyme';
import { removeFavorite, addFavorite, setCurrentMovie, clickHandler } from '../../Actions';
import { MovieCard } from './MovieCard';

describe("MovieCard", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <MovieCard
        title={'Movie'}
        posterPath={'/path'}
        releaseDate={'yesterday'}
        voteAverage={20}
        overview={'An overview'}
        genre={'Comedy'}
        isFavorite={false}
        id={4575557}
        currentUser={{ id: 3, name: 'chris' }}
        removeFavorite={jest.fn()}
        addFavorite={jest.fn()}
        clickHandler={jest.fn()}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})