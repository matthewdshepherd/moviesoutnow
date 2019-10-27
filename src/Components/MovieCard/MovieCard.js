import React from 'react';
import { connect } from 'react-redux';
import './MovieCard.css';
import { bindActionCreators } from 'redux';
import { addFavorite } from '../../Thunks/addFavorite';

const MovieCard = ({ title, posterPath, genre, isFavorite }) => {
  var borderStyle = {
    border: `3px solid ${genre.borderColor}`
  }
  var genreStyle = {
    background: `${genre.borderColor}`,
    borderRadius: '18px',
    padding: '5px 15px',
    width: '11vw'
  }
  const favStatus = isFavorite ? { classVal: 'favorited', elem: <h3>Liked</h3> } : { classVal: 'not-favorited', elem: <h3>Like</h3> }
  return (
    <div className="movieCard" style={borderStyle}>
      <img className="moviePoster" src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={`${title} art`} />
      <div className="moviePosterOverlay">
        <div className="movieCardGenre">
          <h2 className="movieCardGenre" style={genreStyle}>{genre.name}</h2>
        <h1 className="movieCardTitle">     {title}</h1>
        </div>
        <footer className={`bottom-bar ${favStatus.classVal}`}>
          <div >
            {favStatus.elem}
          </div>
        </footer>
      </div>
    </div>
  )
}

mapDispatchToProps = (dispatch) => (
  bindActionCreators({addFavorite}, dispatch)
)

export default connect(null, mapDispatchToProps)(MovieCard)