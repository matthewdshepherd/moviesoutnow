import React from "react"
import "./SignupForm.css"
import { postNewUser } from '../../Thunks/postNewUser'
import { connect } from 'react-redux'
import { toggleModal, hasErrored } from '../../Actions'
import { bindActionCreators } from 'redux';
import error_icon from '../../images/error_icon.png'
import close_button from '../../images/close_btn.png'


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
    this.props.postNewUser(this.state)
    this.setState({
      password: ""
    })
    if (!this.props.error === "Internal Server Error") {
      this.props.toggleModal()
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      })
    }
  }

  closeAndClearSignupFrom = () => {
    this.props.toggleModal()
    this.props.hasErrored('', { type: 'CLEAR_ERROR' })
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    })
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
          <img
            src={close_button}
            alt="Close Button"
            className="signup_close_button"
            onClick={() => this.closeAndClearSignupFrom()}
          />
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
            id="signup--name--input fname"
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
            id="signup--name--input lname"
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
            className={this.props.error === "Internal Server Error" ? "email--password--SU__input border__error" : "email--password--SU__input"}   id="email--SU"
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
        <div className="error--message--spacing">
          <div className={this.props.error === "Internal Server Error" ? "signup__error" : "signup__error--none"}>
            <img src={error_icon }
              alt="Error Icon" 
              className="error__icon"/>
            <p className="signup__error__p">Account with this email already exisits.</p>
          </div>
        </div>
      </form>
    )
  }

}

const mapStateToProps = ({ toggleModal, error }) => ({ toggleModal, error })

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ toggleModal, postNewUser, hasErrored}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
