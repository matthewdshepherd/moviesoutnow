import { isLoading, hasErrored, setGenres } from '../Actions';

const genresAndColors = [
  {movie: "Action",
  color: "#F94488"}, 
  {movie: "Adventure",
  color: "#53C8FF"}, 
  {movie: "Animation",
  color: "#37AAEE"}, 
  {movie: "Comedy",
  color: "#FDC938"}, 
  {movie: "Crime",
  color: "#D11C5B"}, 
  {movie: "Documentary",
  color: "#690877"}, 
  {movie: "Drama",
  color: "#FB9CFF"}, 
  {movie: "Family",
  color: "#A3FFFF"}, 
  {movie: "Fantasy",
  color: "#AD0E36"}, 
  {movie: "History",
  color: "#2AA9B6"}, 
  {movie: "Horror",
  color: "#F91D55"}, 
  {movie: "Music",
  color: "#F8F8F8"}, 
  {movie: "Mystery",
  color: "#D7D7D7"}, 
  {movie: "Romance",
  color: "#A07500"}, 
  {movie: "Science Fiction",
  color: "#B2638A"}, 
  {movie: "TV Movie",
  color: "#335EAA"}, 
  {movie: "Thriller",
  color: "#2596A7"}, 
  {movie: "War",
  color: "#2286C7"}, 
  {movie: "Western",
  color: "#FFFF2"} ]

export const fetchGenres = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true))
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=02dd2ef67fc6cb12ff710ae75f51dda5&language=en-US')
      if (!response.ok) {
        throw Error(response.statusText)
      }
      let genres = await response.json();
      let newGenres = genres.genres.map(genre => {
        const color = genresAndColors.filter(elem => elem.movie === genre.name)
        return ({
          id: genre.id,
          name: genre.name,
          borderColor: color[0].color
        })
      })
      dispatch(isLoading(false));
      dispatch(setGenres(newGenres));
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}