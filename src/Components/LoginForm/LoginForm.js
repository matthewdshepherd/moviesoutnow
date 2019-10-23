import React from "react"
import "./LoginForm.css"
import movie_time_logo from '../../images/movie_time.png'


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
            className="login__label"
            htmlFor="email">Email</label>
          <input
            className="header--userinput__input"
            id="email"
            type="text"
            placeholder="Email"></input>
          <p className="login--bottomtext" >Create new account</p>
        </div>
        <div className="header--userinput__div">
          <label
            className="login__label"
            htmlFor="password">Passowrd</label>
          <input
            className="header--userinput__input"
            id="password"
            type="password"
            placeholder="Password"></input>
          <p className="login--bottomtext" >Forgot account?</p>
        </div>
        <button
          type="button"
          className="login__button">Login</button>
      </form>
    )
  }
}

export default LoginForm
