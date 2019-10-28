import React from 'react';
import { connect } from 'react-redux';
import './Favorites.css';
import MovieCard from '../../Components/MovieCard/MovieCard';

const Favorites = ({ favorites, genres, isLoading, movies }) => {
  const movieCards = favorites.map(favorite => {
    const favorited = favorites.includes(favorite)
    const foundMovie = movies.filter(movie => movie.title === favorite.title)[0]
    const genre = genres.filter(genre => genre.id === foundMovie.genre_ids[0])
    return (<MovieCard
      key={favorite.id}
      id={favorite.movie_id}
      title={favorite.title}
      posterPath={favorite.poster_path}
      releaseDate={favorite.release_date}
      voteAverage={favorite.vote_average}
      overview={favorite.overview}
      genre={genre[0]}
      isFavorite={favorited}
      />)
    })
    return (
      <section className='section--movies-container'>
        {favorites && !isLoading && movieCards}
        {favorites.length === 0 && <h1 className='no-favs--error'>You Have No Favorites Yet. Try Adding Some!</h1>}
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