import React from "react"
import "./LoginForm.css"
import movie_time_logo from '../../images/movie_time.png'
import { userLogin } from '../../Actions/index'
import { connect } from 'react-redux'

export class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.userLogin(this.state)
    this.setState({
      email: "",
      password: ""
    })
  }

  handleChnage = event => {
    this.setState( {[event.target.name]: event.target.value})
  };

  canBeSubmitted() {
   const { email, password } = this.state;
   return email.length > 0 && password.length > 0;
 }

  render() {
    const isEnabled = this.canBeSubmitted();
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
            name="email"
            placeholder="Email"
            onChange={this.handleChnage}
            value={this.state.email} />
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
            name="password"
            placeholder="Password"
            onChange={this.handleChnage}
            value={this.state.password} />
          <p className="login--bottomtext" >Forgot account?</p>
        </div>
        <button
          type="button"
          className="login__button"
          disabled={!isEnabled}>Login</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLogin: loginCredentials => dispatch(userLogin(loginCredentials) )
})

export default connect(null, mapDispatchToProps)(LoginForm);
