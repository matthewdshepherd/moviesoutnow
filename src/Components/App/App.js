import React from 'react';
import './App.css';
import movie_time_logo from '../../images/movie_time.png'
import LoginForm from '../../LoginForm/LoginForm'

function App() {
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
    </div>
  );
}

export default App;
