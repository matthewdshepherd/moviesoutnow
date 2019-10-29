import { fetchRecentMovies } from '../fetchRecentMovies';
import { isLoading, hasErrored, setRecentMovies } from '../../Actions';

// jest.mock('../../Actions');

describe('fetchRecentMovies', () => {
  let mockUrl
  let mockMovies
  let mockDispatch

  beforeEach(() => {
    mockUrl = 'http://localhost:3001/api/v1/users/1/moviefavorites'
    mockMovies = [{
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
    ]
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        results: mockMovies
      })
    }));
  });

  it('should call dispatch with isLoading(true)', () => {
    const thunk = fetchRecentMovies(mockUrl);  
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should call the fetch with the correct url', () => {
    const thunk = fetchRecentMovies(mockUrl);
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should dispatch isLoading(false) if the response is ok', async () => {
    const thunk = fetchRecentMovies(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch setRecentMovies with correct arguments', async () => {
    const thunk = fetchRecentMovies(mockUrl);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(setRecentMovies(mockMovies));
  });

  it('should dispatch hasErrored if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: "Nice Try"
    }));
    const thunk = fetchRecentMovies(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Nice Try'));
  });
});