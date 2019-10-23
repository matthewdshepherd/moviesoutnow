import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecentMovies } from '../../Thunks/fetchRecentMovies';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchRecentMovies('https://api.themoviedb.org/3/movie/now_playing?api_key=02dd2ef67fc6cb12ff710ae75f51dda5&language=en-US&page=1')
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <img src='https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' />
      </div>  
    )
  }
}


  const mapStateToProps = (state) => ({
    movies: state.movies,
    isLoading: state.isLoading,
    error: state.error
  })

  const mapDispatchToProps = (dispatch) => ({
    fetchRecentMovies: (url) => dispatch(fetchRecentMovies(url))
  })




export default connect(mapStateToProps, mapDispatchToProps)(App)