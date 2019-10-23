import React from 'react';

const MovieCard = ({ title, posterPath, genre  }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{genre.name}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={`${title} art`} />
    </div>
  )
}

export default MovieCard