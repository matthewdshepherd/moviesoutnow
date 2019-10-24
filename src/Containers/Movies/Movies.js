import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../Components/MovieCard/MovieCard';
import './Movies.css'

const mapStateToProps = ({ movies, genres, isLoading }) => ({
  movies,
  genres,
  isLoading
  })

const Movies = ({ movies, genres, isLoading }) => {

  const movieCards = movies.map(movie => {
    const genre = genres.filter(genre => genre.id === movie.genre_ids[0])
    return (<MovieCard
        key={movie.id}
        title={movie.title}
        posterPath={movie.poster_path}
        genre={genre[0].name}
    />)
  })
  return (
    <section className='section--movies-container'>
        {!isLoading && movieCards}
    </section>
  )
}

export default connect(mapStateToProps)(Movies)