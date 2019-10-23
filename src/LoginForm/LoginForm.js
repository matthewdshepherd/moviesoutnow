import React from "react"
import "./LoginForm.css"
import movie_time_logo from '../images/movie_time.png'


export class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      passowrd: ""
    }
  }

  render() {
    return(
      <form className="header--login">
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
      </form>
    )
  }
}

export default LoginForm