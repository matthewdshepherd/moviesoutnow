import React from 'react';
import './MoviePage.css'
import { connect } from 'react-redux'


const MoviePage = ({ movies, genres, currentMovie}) => {
    const foundMovie = movies.find(movie => movie.id === currentMovie)
    const { title, poster_path, backdrop_path, release_date, vote_average, vote_count, overview, genre_ids, id } = foundMovie
   
    const getGenres = genres.reduce( (acc, genre) => {
        genre_ids.forEach( movieGenre => {
            if ( genre.id ===  movieGenre)
            acc.push(genre.name)
        })
        return acc
    }, []).join(", ")
  

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
                        <p className="movie--year">{release_date.split('-')[0]}</p>
                        <h3 className="movie--title">{title}</h3>
                    </div>
                    <div className="movie--user--score--fav--votes">
                        <div className="movie--score__div">
                            <p className="movie--score--text">Score:</p>
                            <p className="movie--score">{vote_average * 10}%</p>
                        </div>
                        <div className="movie--vote__div">
                            <p className="movie--vote--text">Votes:</p>
                            <p className="movie--vote">{vote_count}</p>
                        </div>
                    </div>
                    <p className="movie--overview">{overview}</p>
                    <div className="movie--genres"><span className="genre-title">Genres:</span>  {getGenres}</div>
                </div>
            </div>
        </div>
    ) 
}

const mapStateToProps = ({ movies, genres, currentMovie}) => ({ movies, genres, currentMovie })

export default connect(mapStateToProps, null)(MoviePage)
