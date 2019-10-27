import React from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../Components/MovieCard/MovieCard';

const Favorites = ({ favorites, genres, isLoading, movies }) => {
  
  const movieCards = favorites.map(favorite => {
    console.log(favorite.movie_id)
    const foundMovie = movies.filter(movie => movie.title === favorite.title)[0]
    const genre = genres.filter(genre => genre.id === foundMovie.genre_ids[0])
    return (<MovieCard
      key={favorite.id}
      id={favorite.movie_id}
      title={favorite.title}
      posterPath={favorite.poster_path}
      genre={genre[0]}
      isFavorite={true}
      />)
    })
    return (
      <section className='section--movies-container'>
        {!isLoading && movieCards}
    </section>
  )
}

const mapStateToProps = ({ favorites, genres, isLoading, movies }) => ({
  favorites,
  genres,
  isLoading,
  movies
  })

export default connect(mapStateToProps)(Favorites)