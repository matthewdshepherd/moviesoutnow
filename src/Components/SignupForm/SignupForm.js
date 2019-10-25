import React from "react"
import "./SignupForm.css"
import { postNewUser } from '../../Thunks/postNewUser'
import { connect } from 'react-redux'
import { toggleModal } from '../../Actions'

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

  handleSubmit = (event) => {
    event.preventDefault();
    postNewUser(this.state)
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    })
    this.props.toggleModal()
  }

  handleChnage = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  canBeSubmitted() {
    const { firstName, lastName, email, password } = this.state;
    return firstName.length > 0 && email.length > 0 && lastName.length > 0 && password.length > 0 ;
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    return(
      <form className="SignupForm">
        <div className="signup-login">
          <h3 className="signup-text">SIGN UP</h3>
          <button type="button" className="signup--login--button">Current User Login</button>
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
            onChange={this.handleChnage}
            value={this.state.firstName}
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
            onChange={this.handleChnage}
            value={this.state.lastName}
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
            onChange={this.handleChnage}
            value={this.state.email}
            />
          </div>
          <div className="email--password--SU__div">
            <label
            className="email--password--SU__label"
            htmlFor="password">Passowrd</label>
            <input
            type="password"
            className="email--password--SU__input"
            id="password--SU"
            placeholder="Password"
            name="password"
            onChange={this.handleChnage}
            value={this.state.password}
            />
          </div>
        </div>
        <button
          type="button"
          disabled={!isEnabled}
          className="signup--submit__button"
          onClick={(event) => this.handleSubmit(event)}>SIGN UP</button>
      </form>
    )
  }

}

const mapStateToProps = ({ toggleModal }) => ({ toggleModal })

const mapDispatchToProp = dispatch => ({
  toggleModal: bool => dispatch(toggleModal(bool)) 
})

export default connect(mapStateToProps, mapDispatchToProp)(SignupForm)
