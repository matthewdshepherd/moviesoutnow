import React from "react"
import "./LoginForm.css"

export class SignupForm extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  }

render() {
  return(
    <form className="SignupForm">
      <div className="signup-login">
        <p className="signup-text"></p>
        <button type="button" className="signup--login--button">Login</button>
      </div>
      <div className="first--last--name__div">
        <div className="name__div--input">
          <label
          className="signup--label"
          htmlFor='firstNameSU'
          >First Name</label>
          <input
          type="text"
          className="signup--name--input"
          id="signup--name--input"
          placeholder="First Name"
          name="firstName"
          value={}
          />
        </div>
        <div className="name__div--input">
          <label
          className="signup--label"
          htmlFor='lastNameSU'
          >Last Name</label>
          <input
          type="text"
          className="signup--name--input"
          id="signup--name--input"
          placeholder="Last Name"
          name="lastName"
          value={}
          />
        </div>
      </div>
      <div>
        <div className="email--password--SU__div">
          <label
          className="email--password--SU__label"
          htmlFor="email">Email</label>
          <input
          type="text"
          className="email--password--SU__input"
          id="email--SU"
          placeholder="Email"
          name="email"
          value={}
        </div>
        <div className="email--password--SU__div">
          <label
          className="email--password--SU__label"
          htmlFor="password">Passowrd</label>
          <input
          type="text"
          className="email--password--SU__input"
          id="password--SU"
          placeholder="Password"
          name="password"
          value={}
        </div>
      </div>
      <button
      type="button"
      className="signup--submit__button"
    </form>

  )
}

}

export default SignupForm
