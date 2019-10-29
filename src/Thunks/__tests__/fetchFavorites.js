import { fetchFavorites } from '../fetchFavorites';
import { isLoading, hasErrored, setFavorites } from '../../Actions';

describe('fetchFavorites', () => {
  let mockDispatch
  let mockFavorites

  beforeEach(() => {
    mockFavorites = [{
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
    ];
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        favorites: mockFavorites
      })
    }));
  });

  it('should call dispatch with isLoading(true)', () => {
    const thunk = fetchFavorites(2);
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should call fetch with correct URL', () => {
    const mockUrl = 'http://localhost:3001/api/v1/users/2/moviefavorites';
    const thunk = fetchFavorites(2);
    thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });

  it('should call dispatch with isLoading(false)', async () => {
    const thunk = fetchFavorites(2);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });
})