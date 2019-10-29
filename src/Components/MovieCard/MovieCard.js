import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import './MovieCard.css';
import favorited_movie from '../../images/favorited__movie.png';
import isNotFavorited from '../../images/unfavorited__movie.png';
import { bindActionCreators } from 'redux';
import { removeFavorite } from '../../Thunks/removeFavorite';
import { addFavorite } from '../../Thunks/addFavorite';
import { clickHandler } from '../../Thunks/clickHandler'
import { setCurrentMovie } from '../../Actions'

const MovieCard = ({ title, posterPath, releaseDate, voteAverage, overview, genre, isFavorite, id, currentUser, removeFavorite, addFavorite, clickHandler, setCurrentMovie}) => {
  var borderStyle = {
    border: `3px solid ${genre.borderColor}`
  }
  var genreStyle = {
    background: `${genre.borderColor}`,
    borderRadius: '18px',
    // margin: '6% auto',
    padding: '5px 15px',
    width: '11vw'
  }

  const favStatus = isFavorite ? { classVal: 'favorited', elem: <img className='favorite-icon' src={favorited_movie} alt='is favorite'/> } : { classVal: 'not-favorited', elem: <img className='favorite-icon' src={isNotFavorited} alt='is not favorite'/> }
  {console.log('id', id)}
  return (
    <div className="movieCard" style={borderStyle}>
      <div className="movie--content__div">
        <img className="moviePoster" src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={`${title} art`} />
        <div className="moviePosterOverlay">
          <div className="movieCardGenre__div">
            <h2 className="movieCardGenre" style={genreStyle}>{genre.name}</h2>
            <h1 className="movieCardTitle">{title}</h1>
          </div>
          <footer className='footer--accents'>
            { isFavorite && <div className={`bottom-bar ${favStatus.classVal}`} onClick={(event) => removeFavorite(event, currentUser.id, id)}>
              {favStatus.elem}
              <Link className="view--movies button--border" onClick={(event) => clickHandler(event, id)} to={`/movies/${id}`}>View Movie</Link>
              <h3 className="vote--avg--text">{`${voteAverage * 10}%`}</h3>
            </div>}
            { !isFavorite && <div className={`bottom-bar ${favStatus.classVal}`} onClick={(event) => addFavorite(event, currentUser.id, { id, title, poster_path: posterPath, release_date: releaseDate, vote_average: voteAverage, overview})}>
              {favStatus.elem}
              <Link className="view--movies button--border" onClick={(event) => clickHandler(event, id)} to={`/movies/${id}`}>View Movie</Link>
              <h3 className="vote--avg--text">{`${voteAverage * 10}%`}</h3>
            </div>}        
          </footer>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({removeFavorite, addFavorite, setCurrentMovie, clickHandler}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)