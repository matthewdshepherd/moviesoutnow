import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecentMovies } from '../../Thunks/fetchRecentMovies';
import { fetchGenres } from '../../Thunks/fetchGenres';
import { bindActionCreators } from 'redux';
import Movies from '../../Containers/Movies/Movies';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchRecentMovies('https://api.themoviedb.org/3/movie/now_playing?api_key=02dd2ef67fc6cb12ff710ae75f51dda5&language=en-US&page=1')
    this.props.fetchGenres()
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <Movies />
      </div>  
    )
  }
}


  const mapStateToProps = ({ movies, genres, isLoading, error }) => ({
    movies,
    genres,
    isLoading,
    error
  })

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({fetchRecentMovies, fetchGenres}, dispatch)
)




export default connect(mapStateToProps, mapDispatchToProps)(App)