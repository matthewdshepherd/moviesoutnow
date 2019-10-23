import React from 'react';
import './App.css';
import movie_time_logo from '../../images/movie_time.png'

function App() {
  return (
    <div className="App">
      <header className="header">
        <img
          src={movie_time_logo}
          alt="Logo"
          className="movie_time_logo"
        />
        <div className="header--login">
          <div className="header--userinput__div">
            <label
            htmlFor="email">Email</label>
            <input
              className="header--userinput__input"
            id="email"
            type="text"
            placeholder="Email"></input>
            <p>Create new account</p>
          </div>
          <div className="header--userinput__div">
            <label
            htmlFor="password">Passowrd</label>
            <input
              className="header--userinput__input"
            id="password"
            type="text"
            placeholder="Password"></input>
            <p>Forgot account?</p>
          </div>
          <button
          type="button"
          className="login__button">Login</button>
        </div>
      </header>
    </div>
  );
}

export default App;
