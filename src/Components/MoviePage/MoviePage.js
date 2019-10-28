import React from 'react';
import './MoviePage.css'

const MoviePage = ({ title, poster_path, backdrop_path, release_date, vote_average, vote_count, overview, genre, isFavorite, id }) => {


    return (
        <div className="moviePage__div" key={id}>
            <img 
                src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} 
                alt={`${title} Back Drop`}
                className="moviePage--backdrop" />
            <div className="movie--poster--details__div">
                <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
                alt={`${title} Poster`}
                className="moviePage--poster" />
                <div className="movie__details">
                    <div className="movie--title--year">
                        <h3 className="movie--title">{title}</h3>
                        <p className="movie--year">{release_date.split('-')[0]}</p>
                    </div>
                    <div className="movie--user--score--fav--votes">
                        <p className="movie--score">86</p>
                        <p className="movie--favorited">Fav</p>
                        <p className="movie--vote">Vote</p>
                    </div>
                    <p className="movie--overview"></p>
                    <div className="movie--genres"></div>
                </div>
            </div>
        </div>
    ) 
}

export default MoviePage