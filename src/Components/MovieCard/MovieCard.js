import React from 'react';
import './MovieCard.css'

const MovieCard = ({ key, title, posterPath, genre }) => {
  return (
    <div className="movieCard">
      <img className="moviePoster" src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={`${title} art`} />
      <div className="moviePosterOverlay">
        <h1 className="movieCardTitle">{title}</h1>
        <h2 className="movieCardGenre">{genre}</h2>
      </div>
      
    </div>
  )
}

export default MovieCard