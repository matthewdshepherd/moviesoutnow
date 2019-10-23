import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../Components/MovieCard/MovieCard';

const Movies = ({ movies, genres }) => {
    const movieCards = movies.map(movie => <MovieCard
        title={movie.title}
        posterPath={movie.poster_path}
        genre={genres.filter(genre => genre.id === movie.genre_ids[0])}
      />
  )
  return (
    <section className='section--movies-container'>
      <ul>
        {movieCards}
      </ul>
    </section>
  )
}

const mapStateToProps = ({ movies, genres }) => ({
    movies,
    genres
  })

export default connect(mapStateToProps)(Movies)