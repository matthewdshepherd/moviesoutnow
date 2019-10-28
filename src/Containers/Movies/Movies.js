import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../Components/MovieCard/MovieCard';
import './Movies.css'


const Movies = ({ movies, genres, isLoading, favorites }) => {
  const movieCards = movies.map(movie => {
    const favorited = favorites.map(favorite => favorite.title).includes(movie.title)
    const genre = genres.filter(genre => genre.id === movie.genre_ids[0])
    return (<MovieCard
      key={movie.id}
      id={movie.id}
      title={movie.title}
      posterPath={movie.poster_path}
      releaseDate={movie.release_date}
      voteAverage={movie.vote_average}
      overview={movie.overview}
      genre={genre[0]}
      isFavorite={favorited}
      />)
    })
    return (
      <section className='section--movies-container'>
        {!isLoading && movieCards}
    </section>
  )
}

const mapStateToProps = ({ movies, genres, isLoading, favorites }) => ({
  movies,
  genres,
  isLoading,
  favorites
})
  
export default connect(mapStateToProps)(Movies)