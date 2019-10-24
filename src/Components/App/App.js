import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecentMovies } from '../../Thunks/fetchRecentMovies';
import { fetchGenres } from '../../Thunks/fetchGenres';
import { bindActionCreators } from 'redux';
import Movies from '../../Containers/Movies/Movies';
import './App.css';
import movie_time_logo from '../../images/movie_time.png'
import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm'
import ReactModal from "react-modal";


class App extends Component {

  componentDidMount() {
    this.props.fetchGenres()
    this.props.fetchRecentMovies('https://api.themoviedb.org/3/movie/now_playing?api_key=02dd2ef67fc6cb12ff710ae75f51dda5&language=en-US&page=1')
  }

  render() {
    return (
      <div className="App">
      <header className="header">
        <img
          src={movie_time_logo}
          alt="Logo"
          className="movie_time_logo"
        />
        <LoginForm />
        </header>
        <ReactModal
          isOpen={true} //need to assign to a variagle in global state
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(255, 255, 255, 0.75)",
            },
            content: {}
          }}
          contentLabel="Signup Form"
          className="SignupFormModal"
          overlayClassName="SignupFormOverlay"
        >
          <SignupForm />
        </ReactModal>
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
