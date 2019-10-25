import React from 'react';
import './MovieCard.css'

const MovieCard = ({ key, title, posterPath, genre }) => {
  var borderStyle = {
    border: `3px solid ${genre.borderColor}`
  }
  var genreStyle = {
    background: `${genre.borderColor}`,
    borderRadius: '18px',
    padding: '5px 15px',
    width: '11vw'
  }
  return (
    <div className="movieCard" style={borderStyle}>
      <img className="moviePoster" src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={`${title} art`} />
      <div className="moviePosterOverlay">
        <div className="movieCardGenre">
          <h2 className="movieCardGenre" style={genreStyle}>{genre.name}</h2>
        </div>
        <h1 className="movieCardTitle">{title}</h1>
      </div>
      
    </div>
  )
}

export default MovieCard