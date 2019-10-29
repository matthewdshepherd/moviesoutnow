import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { fetchGenres } from '../../Thunks/fetchGenres';
import { fetchRecentMovies } from '../../Thunks/fetchRecentMovies';

jest.mock('../../Thunks/fetchGenres');
jest.mock('../../Thunks/fetchRecentMovies');

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(
      <App
        movies={[
          {
            popularity: 458.719,
            vote_count: 4305,
            video: false,
            poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            id: 475557,
            adult: false,
            backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
            original_language: "en",
            original_title: "Joker",
            genre_ids: [
              80,
              18,
              53
            ],
            title: "Joker",
            vote_average: 8.6,
            overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
            "release_date": "2019-10-04"
          },
          {
            popularity: 231.895,
            vote_count: 472,
            video: false,
            poster_path: "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
            id: 420809,
            adult: false,
            backdrop_path: "/skvI4rYFrKXS73BJxWGH54Omlvv.jpg",
            original_language: "en",
            original_title: "Maleficent: Mistress of Evil",
            genre_ids: [
              12,
              14,
              10751
            ],
            title: "Maleficent: Mistress of Evil",
            vote_average: 7.2,
            overview: "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
            "release_date": "2019-10-18"
          }
        ]}
        genres={[{
          id: 30,
          name: 'Action'
        },
        {
          id: 44,
          name: 'Comedy'
        },
        {
          id: 32,
          name: 'Horror'
        }]}
        isLoading={false}
        error=''
        toggleModal={true}
        currentUser={{}}
        fetchRecentMovies={jest.fn()}
        fetchGenres={jest.fn()}
      />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls dispatch with fetchGenres when componentDidMount is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = fetchGenres();

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchGenres();

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with fetchRecentMovies when componentDidMount is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = fetchRecentMovies('https://api.themoviedb.org/3/movie/now_playing?api_key=02dd2ef67fc6cb12ff710ae75f51dda5&language=en-US&page=1');

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.fetchRecentMovies('https://api.themoviedb.org/3/movie/now_playing?api_key=02dd2ef67fc6cb12ff710ae75f51dda5&language=en-US&page=1');

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  describe('mapStateToProps', () => {
    it('should return and object with the redux state', () => {
      const mockState = {
        movies: [{ title: 'movie1' }, { title: 'movie2' }],
        currentUser: {},
        error: '',
        genres: [{ name: 'genre1' }],
        isLoading: false,
        toggleModal: true
      };
      const expected = mockState

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});
